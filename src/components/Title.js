import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

const Title = styled.h1`
    font-family: 'Oswald', sans-serif;
    animation: 0.7s ${keyframes`${fadeInUp}`};
    flex: 1 1 auto;
    font-weight: 700;
    text-align: center;
`;

export default Title;
