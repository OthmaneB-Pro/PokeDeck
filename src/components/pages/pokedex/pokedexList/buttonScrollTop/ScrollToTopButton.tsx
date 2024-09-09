import { useState, useEffect } from "react";
import styled from "styled-components";

export default function ScrollToTopButton () {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollToTopStyled onClick={scrollToTop} isVisible={isVisible}>
      ↑
    </ScrollToTopStyled>
  );
};

const ScrollToTopStyled = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  font-size: 24px;
  background-color: #ff6b6b;;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &:hover {
    background-color: #ff4a4a;
  }
`;
