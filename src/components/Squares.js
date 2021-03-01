import styled, { keyframes } from 'styled-components';
import { zoomOut, headShake, rubberBand } from 'react-animations';

const EmptySquare = styled.div`
    color: ${(props) =>
        props.color === 'O' ? 'red' : 'blue'};
    font-size: 5rem;
`;

const PlayerSquare = styled(EmptySquare)`
`;

const PlayerFade = styled(PlayerSquare)`
    transform: rotate(-180deg);
    animation: 1s ${keyframes`${zoomOut}`};
    animation-delay: ${props => props.delay}s;
`;

const PlayerWinner = styled(PlayerSquare)`
    animation: 1s ${keyframes`${rubberBand}`};
`;

const PlayerDraw = styled(PlayerSquare)`
    animation: 1s ${keyframes`${headShake}`};
`;

const Box = styled.div`
    position: relative;
    text-align: center;
    width: 160px;
    padding: 70px 0;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    cursor: pointer;
    line-height: 0px;
    &:last-child {
        border-right: 0px;
    }
`;

const T = ({ fadeOut, draw, winner, gameOver, active }) => {
    let Player = active ? PlayerSquare : PlayerSquare;
    if (gameOver) Player = PlayerSquare;
    if (winner) Player = PlayerWinner;
    if (draw) Player = PlayerDraw;
    if (fadeOut) Player = PlayerFade;
    return Player;
};

const Square = ({
    id,
    active,
    fadeOut,
    draw,
    winner,
    gameOver,
    handleClick,
}) => {
    const Player = T({ fadeOut, draw, winner, active, gameOver });
    return (
        <Box onClick={() => handleClick(id)}>
            <Player color={active} delay={id * 0.05}>
                {active}
            </Player>
        </Box>
    );
};

export default Square;
