import styled from "styled-components";

export const LoginStyled = styled.section`
width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;

h1 {
    font-size: 18px;
    color: var(--color-primary);
}

.box-login {
    width: 95%;
    max-width: 300px;

    border: 1px solid var(--color-primary);
    border-radius: 5px;

    form {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        margin-top: 20px;
    }

    button {
        width: 100px;
        height: 25px;

        background-color: transparent;

        border: 1px solid var(--color-primary);
        border-radius: 5px;

        cursor: pointer;

        transition: 200ms;

        font-family: "Roboto";
        font-size: 14px;

        margin: 15px 10px;
    }
}

.content-login {
    width: 95%;

    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
        font-size: 12px;
    }

    input {
        width: 100%;
        height: 30px;

        box-sizing: border-box;

        outline: none;

        border: 1px solid var(--color-primary);
        border-radius: 5px;
    }
}
`;
