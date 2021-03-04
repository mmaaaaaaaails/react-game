import React from "react";
import Header from "./components/Header";
import Footer from './components/Footer/Footer';
import Title from "./components/Title";
import CalculateWinner from "./components/CalculateWinner";
import Board from "./components/Board";
import Row from "./components/Row";
import Button from "./components/Button";
import Squares from "./components/Squares";
import click from './audio/click.wav';
import win from './audio/winner.wav';
import draw from './audio/draw.wav';
import Help from './components/Help/Help';
import Fullscreen from 'react-fullscreen-crossbrowser';
import { DrawIn, DrawOut } from "./components/Draw";
import { WinnerIn, WinnerOut } from "./components/Winner";
import "./App.css";

const defaultState = {
    squares: JSON.parse(sessionStorage.getItem('squares')),
    moves: JSON.parse(sessionStorage.getItem('moves')),
    restart: false,
    gameOver: null,
    isFullscreenEnabled: false
};

if (!sessionStorage.getItem('squares')) {
    defaultState.squares = [null, null, null, null, null, null, null, null, null]
    defaultState.moves = 0
}

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

    componentDidUpdate() {
        sessionStorage.setItem('squares', JSON.stringify(this.state.squares))
        sessionStorage.setItem('moves', JSON.stringify(this.state.moves))
    }

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.code === 'KeyA') {
                return this.restart()
            }

            if (e.altKey && e.code === 'KeyS') {
                const url = 'https://github.com/mmaaaaaaaails';
                window.open(url, '_blank');
            }

            if (e.altKey && e.code === 'KeyD') {
                const url = 'https://rs.school/react/';
                window.open(url, '_blank');
            }

            if (e.altKey && e.code === 'KeyZ') {
                this.setState({
                    isFullscreenEnabled: true
                });
            }
        });
    }

    restart = () => {
        sessionStorage.clear()
        window.location.reload()
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

        if (this.state.squares) {
            const audio = new Audio(click);
            audio.play();
            audio.currentTime = 0;
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
                const audio = new Audio(win);
                audio.play();
                audio.currentTime = 0;
                setTimeout(() => {
                    this.restart()
                }, 2000)
                figure.add(gamer === "X" ? "gamerOne" : "gamerTwo");
                return;
            }

            if (this.state.moves > 8) {
                const audio = new Audio(draw);
                audio.play();
                audio.currentTime = 0;
                setTimeout(() => {
                    this.restart()
                }, 2000)
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
            <React.Fragment>
                <Fullscreen enabled={this.state.isFullscreenEnabled}
                            onChange={isFullscreenEnabled => this.setState({isFullscreenEnabled})}>
                    <div className="app">
                        <Header>
                            <Button>{this.state.moves} moves</Button>
                            <span onClick={() => this.setState({isFullscreenEnabled: true})} className="fullScreen">
                                <i className="fas fa-expand-arrows-alt fa-2x"></i>
                            </span>
                            <Help />
                            {this.endGame(this.state.gameOver, this.state.moves)}
                            <Button onClick={this.restart}>Restart</Button>
                        </Header>
                        <Board>
                            {this.makeRow([0, 1, 2])}
                            {this.makeRow([3, 4, 5])}
                            {this.makeRow([6, 7, 8])}
                        </Board>
                        <Footer />
                    </div>
                </Fullscreen>
            </React.Fragment>
        );
    }
}

export default App;
