import styled from "styled-components";

const Button = styled.p`
    font-size: 1rem;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    transition: all ease 0.5s;
    color: mediumslateblue;
    &:hover {
        color: salmon;
        transition: all ease 0.8s;
    }
`;

export default Button;
