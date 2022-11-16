import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
    .shortenUrl-container {
      background-image: url('../assets/bg-shorten-mobile.svg');
      border-radius: 10px;
      background-position: 100% 0%;
      background-size: 70% 70%;
      
      width: 100%;
      height: auto;
      padding: 20px 20px;

      .Wrapper {
        display: flex;
        flex-direction: column;
      }

      .form {
        margin-bottom: 20px;
      }
    }


    .statistics-body {
        flex-direction: column;
        align-items: center;
  
        .separator {
          height: 60px;
          width: 8px;
          background: ${theme.colors.primary_cyan};
          flex: none;
          margin-top: 0px
        }
      }
    }


    .primary-btn-container {
      a {
        font-size: 18px;
        font-weight: 700;
        width: 170px;
      }
    }

    .secondary-btn-container {
      width: 100%;
      border-radius: 4px;
    }

    .bodyCard-container {
      width: auto;
      display: flex;
      flex-direction: column;
      h5 {
        text-align: center;
      }
      p {
        text-align: center;
      }
      .icon {
        align-self: center;
      }
    }
    .user-action-container {
      background-image: url('../assets/bg-boost-mobile.svg');
      height: 300px;
    }
  }

`;
