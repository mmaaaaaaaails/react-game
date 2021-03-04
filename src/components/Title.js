import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const Title = styled.h1`
    font-family: 'Oswald', sans-serif;
    animation: 0.7s ${keyframes`${fadeInUp}`};
    font-weight: 700;
    text-align: center;
    color: cadetblue;
`;

export default Title;
