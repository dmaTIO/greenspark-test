import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import colors from "@/config/colors";

interface TooltipWrapperProps {
  tooltipText: string;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #fff;
  color: ${colors.dark};
  padding: 10px;
  border-radius: 5px;
  bottom: 20px;
  left: 20px;
  transform: translateX(-50%);
  z-index: 1;
  width: 220px;
  font-size: 12px;
  text-align: center;
  padding: 14px;
  gap: 10px;
  box-shadow: 0px 0px 6px 0px #00000047;
  & a {
    font-size: 12px;
    text-decoration: none;
    color: ${colors.brand};
    font-weight: 700;
  }
`;

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  tooltipText,
  children,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  let debounceTimer: NodeJS.Timeout | undefined;

  const handleMouseEnter = () => {
    setIsHovered(true);
    //clear the timeout if the mouse enters again
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  };

  const handleMouseLeave = () => {
    // debounce the mouse leave event
    debounceTimer = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      //clear the timeout if the component unmounts to avoid memory leaks
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, []);

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered && (
        <Tooltip>
          {tooltipText}{" "}
          <Link
            href={{
              pathname: "/",
            }}
          >
            View Public Profile
          </Link>
        </Tooltip>
      )}
      {children}
    </Wrapper>
  );
};

export default TooltipWrapper;
