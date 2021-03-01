import styled from "styled-components";

const Button = styled.span`
    font-size: 1rem;
    cursor: pointer;
    line-height: 5rem;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    transition: all ease 0.5s;
    &:hover {
        color: salmon;
        transition: all ease 0.8s;
    }
`;

export default Button;
