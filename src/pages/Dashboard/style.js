import styled from "styled-components";

export const DashboardStyled = styled.section`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 22px;
    color: var(--color-primary);

    margin-top: 30px;
  }

  .box-btn {
    margin-top: 20px;

    display: flex;
    gap: 10px;

    button {
      width: 135px;
      height: 25px;

      background-color: transparent;

      border: 1px solid var(--color-primary);
      border-radius: 5px;

      cursor: pointer;

      transition: 200ms;

      font-family: "Roboto";
      font-size: 14px;
    }

    button.active {
      background-color: var(--color-primary);
      color: var(--color-black);
    }
  }
`;
