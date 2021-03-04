import styled, { keyframes } from "styled-components";
import { flipInY, flipOutY } from "react-animations";

const Draw = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    text-align: center;
    color: green;
`;
const DrawIn = styled(Draw)`
    animation: 1s ${keyframes`${flipInY}`};
`;
const DrawOut = styled(Draw)`
    animation: 1s ${keyframes`${flipOutY}`};
`;

export { DrawIn, DrawOut };
