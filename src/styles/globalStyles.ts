import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
 .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .mobile-wrapper {
    .home-section {
      .next-section {
        margin-top: 150px;
        padding: 0px 10px;
        padding-bottom: 100px;
      }
    
      .wrapper {
        padding: 0px 10px;
      }
    
      .footer-section {
        padding: 0px 10px;
      }
    }
    .hero-container {
      padding-top: 200px;
      margin-bottom: 0px;

      .main-body {
        width: 100%;
        padding-right: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          font-size: 42px;
          text-align: center;
          margin-bottom: 10px;
        }
        .description {
          font-size: 18px;
          text-align: center;
          font-weight: 500;
        }
      }

    }

    .url-shortener-container {
      margin-top: -80px;
    }

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

    .urlCard-container {
      flex-direction: column;
      height: auto;
      padding: 0px; 
      margin: 10px 0px;

      .main-url {
        padding: 10px 20px;
        border-bottom: 1px solid ${theme.colors.background};
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .section {
        width: 100%;
        padding: 10px 20px; 

        .button {
          margin-top: 10px;
        }
      }
    }

  
    .statistics-body {
        flex-direction: column;
        align-items: center;
  
        .seperator {
          height: 60px;
          width: 8px;
          background: ${theme.colors.primary_cyan};
          flex: none;
          margin-top: 0px
        }
      }
    }

    .footer-container {
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;

      .logo {
        margin-bottom: 50px;
      }
      .links {
        flex-direction: column;
        align-items: center;
      }

      .wrappers {
        align-items: center;
        margin-bottom: 50px;
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

  .ReactModalPortal {
    .modal-style {
      margin: 30px 20px;

      .buttons {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid ${theme.colors.background}80;
        padding-bottom: 10px;
        margin-bottom: 10px;
      }
      
      .navModalBtn {
        a {
          color: ${theme.colors.white};
          font-size: 18px;
          font-weight: 700;
        }
      }

      .auth-buttons {
        display: flex;
        flex-direction: column;
      }

      .primary-btn-nav {
        width: 100%;
      }
    }
  }
`;
