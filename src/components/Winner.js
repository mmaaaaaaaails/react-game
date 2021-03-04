import styled, { keyframes } from "styled-components";
import { fadeInDown, fadeOutUp } from "react-animations";

const Winner = styled.h2`
    color: ${(props) => (props.color === "O" ? "red" : "blue")};
    font-weight: 700;
    font-size: 26px;
`;
const WinnerIn = styled(Winner)`
    animation: 0.7s ${keyframes`${fadeInDown}`};
    text-align: center;
`;
const WinnerOut = styled(Winner)`
    animation: 0.7s ${keyframes`${fadeOutUp}`};
    text-align: center;
`;

export { WinnerIn, WinnerOut };
