import styled from "styled-components";

export const LicenseStyled = styled.section`
    margin-top: 30px;
    width: 90%;
    max-width: 400px;

    .list-infos {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;

      .infos {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        border: 1px solid var(--color-primary);
        border-radius: 5px;

        cursor: pointer;

        .container {
          width: 95%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mac {
          margin-top: 7px;
          font-size: 15px;
        }

        .name {
          margin: 7px 0px;
          font-size: 14px;
        }

        .license {
          font-size: 15px;
        }
      }

      .list-details {
        width: 95%;

        margin-bottom: 7px;

        .details {
          font-size: 14px;
        }
      }
    }
`