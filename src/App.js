import React from "react";
import Header from "./components/Header";
import Footer from './components/Footer/Footer';
import Title from "./components/Title";
import CalculateWinner from "./components/CalculateWinner";
import Board from "./components/Board";
import Row from "./components/Row";
import { DrawIn, DrawOut } from "./components/Draw";
import { WinnerIn, WinnerOut } from "./components/Winner";
import Button from "./components/Button";
import Squares from "./components/Squares";
import "./App.css";

const defaultState = {
    squares: [null, null, null, null, null, null, null, null, null],
    moves: 0,
    restart: false,
    gameOver: null,
};

const updateSquares = (id, value) => {
    return (state) => {
        let squares = Object.assign({}, state.squares);
        if (squares[id]) {
            return;
        }
        squares[id] = value;
        return {
            squares,
            moves: state.moves + 1,
            gameOver: CalculateWinner(squares),
        };
    };
};

const resetBack = () => {
    document.body.classList.remove("gamerOne", "gamerTwo");
};
class App extends React.Component {
    state = {
        ...defaultState,
    };

    restart = () => {
        this.setState({
            restart: true,
        });
        resetBack();
        setTimeout(() => {
            this.setState(defaultState);
        }, 800);
    };

    endGame = (winner, moves) => {
        if (winner) {
            let player = this.state.squares[winner[0]];
            let Win = this.state.restart ? WinnerOut : WinnerIn;
            return (
                <Win color={player}>
                    Player <strong>{player}</strong> wins!
                </Win>
            );
        } else if (moves > 8) {
            setTimeout(resetBack, 700);
            let StandOff = this.state.restart ? DrawOut : DrawIn;
            return <StandOff>Draw!</StandOff>;
        }
        return <Title>Tic Tac Toe</Title>;
    };


    handleClick = (id) => {
        if (this.state.gameOver) {
            return;
        }

        const figure = document.body.classList;
        const gamer = this.state.moves % 2 ? "O" : "X";
        const s = updateSquares(id, gamer)(this.state);
        if (!s) {
            return;
        }

        this.setState(s, () => {
            if (this.state.gameOver) {
                resetBack();
                figure.add(gamer === "X" ? "gamerOne" : "gamerTwo");
                return;
            }

            if (gamer === "X") {
                figure.add("gamerTwo");
                figure.remove("gamerOne");
            } else {
                figure.add("gamerOne");
                figure.remove("gamerTwo");
            }
        });
    };

    makeSquares = (id) => {
        let active = this.state.squares[id];
        let gameOver = this.state.gameOver ? true : false;
        let winner =
            this.state.gameOver && this.state.gameOver.indexOf(id) !== -1
                ? true
                : false;
        let draw = !this.state.gameOver && this.state.moves > 8 ? true : false;
        return (
            <Squares
                key={id}
                id={id}
                active={active}
                fadeOut={this.state.restart}
                draw={draw}
                gameOver={gameOver}
                winner={winner}
                handleClick={(id) => this.handleClick(id)}
            />
        );
    };

    makeRow = (squares) => {
        return <Row>{squares.map(this.makeSquares)}</Row>;
    };

    render() {
        return (
            <div className="app">
                <Header>
                    <Button>{this.state.moves} moves</Button>
                    {this.endGame(this.state.gameOver, this.state.moves)}
                    <Button onClick={this.restart}>Restart</Button>
                </Header>
                <Board>
                    {this.makeRow([0, 1, 2])}
                    {this.makeRow([3, 4, 5])}
                    {this.makeRow([6, 7, 8])}
                </Board>
                <Footer>

                </Footer>
            </div>
        );
    }
}

export default App;
