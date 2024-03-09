import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { Product } from "@/_types/product.type";
import colors from "@/config/colors";

interface CheckedProps {
  linked: Product["linked"];
  id: Product["id"];
}

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  right: -7px;
  transition: all 0.15s linear;
  &:hover {
    background-color: ${colors.lightGreen};
    & label {
      opacity: 0.5;
    }
  }
  & label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid ${colors.dark};
    border-radius: 2px;
    opacity: 1;
    transition: all 0.15s linear;
  }
  & input:checked + label {
    background-color: ${colors.brand};
    border: 2px solid ${colors.brand};
  }
  & input {
    display: none;
  }
`;

const LinkCheckbox = ({ linked, id }: CheckedProps) => {
  const [isLinked, setIsLinked] = useState<boolean>(linked);

  return (
    <CheckBoxContainer>
      <input
        id={`checkbox-${id}`}
        type="checkbox"
        checked={isLinked}
        onChange={(e) => setIsLinked(e.target.checked)}
      />
      <label htmlFor={`checkbox-${id}`}>
        {isLinked && <FaCheck color={colors.light} size={12} />}
      </label>
    </CheckBoxContainer>
  );
};

export default LinkCheckbox;
