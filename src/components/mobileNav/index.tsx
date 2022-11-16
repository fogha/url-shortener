import { useState, useEffect, FC } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

import PrimaryButton from "../buttons/PrimaryButton";
import FlatButton from "../buttons/LinkButton";
import { theme } from "../../styles/theme";
import LinkButton from "../buttons/LinkButton";

const StyleContainer = styled.div`
  padding: 20px 40px;
  border-radius: 12px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  a {
    color: ${theme.colors.white};
    font-size: 16px;
    font-weight: 700;
  }

  .mobile-navLinks,
  .mobile-authButtons {
    display: flex;
    flex-direction: column;
    height: 180px;
    justify-content: space-around;
  }

  .mobile-authButtons {
    height: 180px;
    padding: 40px 0 20px 0;
    margin-top: 24px;
    border-top: 0.5px solid #fff;
  }

  .mobile-primaryBtn {
    width: 100%;
  }
`;

const modalStyles: ReactModal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    zIndex: 1000,
  },
  content: {
    top: "100px",
    left: "25px",
    right: "25px",
    bottom: "auto",
    maxHeight: "70%",
    height: "auto",
    border: "none",
    background: theme.colors.primary_dark_violet,
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "16px",
    outline: "none",
    padding: "0px",
  },
};

const MobileNavModal: FC<{ showModal: boolean; hideModal: () => void }> = ({
  showModal,
  hideModal,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(showModal);

  useEffect(() => {
    setIsVisible(showModal);
  }, [showModal]);

  const links = [
    { title: "Features", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Resources", href: "#" },
  ];

  return (
    <ReactModal
      isOpen={isVisible}
      closeTimeoutMS={500}
      onRequestClose={() => hideModal()}
      style={modalStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <StyleContainer data-testid="mobile-nav-modal">
        <div className="mobile-navLinks">
          {links.map((link) => (
            <LinkButton
              key={link.title}
              label={link.title}
              onClick={() => console.log("Clicked", link.title)}
              link={link.href}
            />
          ))}
        </div>
        <div className="mobile-authButtons">
          <FlatButton
            label="Login"
            onClick={() => console.log("Sign up")}
            link="#"
          />
          <PrimaryButton
            isInNav="mobile-primaryBtn"
            size="m"
            label="Sign Up"
            onClick={() => console.log("Sign up")}
            link="#"
            className="signUp-btn"
          />
        </div>
      </StyleContainer>
    </ReactModal>
  );
};

export default MobileNavModal;
