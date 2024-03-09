import React from "react";
import styled from "styled-components";
import { Product } from "@/_types/product.type";
import colors from "@/config/colors";

interface BadgeSwitchProps {
  isActive: boolean;
  setIsActive: (id: Product["id"]) => void;
  id: Product["id"];
}

const Switch = styled.div`
  display: flex;
`;

const BadgeSwitchControl = styled.div<{
  $isActive: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 22px;
  background-color: ${({ $isActive }) =>
    $isActive ? colors.brand : colors.light};
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid
    ${({ $isActive }) => ($isActive ? colors.gray : colors.lightGreen)};
  transition: background-color 0.15s linear;
  box-shadow: inset rgb(0 0 0 / 15%) 0px 0px 5px 0px;

  & label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    transition: all 0.15s linear;
    transform: translateX(-10px);
    background-color: transparent;
    cursor: pointer;
  }

  input:checked + label {
    transform: translateX(10px);
  }

  &:hover > label {
    background-color: ${colors.transluscentGreen};
  }

  ${Switch} {
    display: flex;
    width: 23px;
    height: 23px;
    background-color: #fff;
    border-radius: 13px;
    border: 1px solid
      ${({ $isActive }) => ($isActive ? colors.brand : colors.beige)};
    box-shadow: rgb(0 0 0 / 68%) 0px 0px 2px 0px;
    z-index: 2;
  }

  input {
    display: none;
  }
`;

const BadgeSwitchInput = styled.input`
  display: none;
`;

const BadgeSwitch = ({ isActive, setIsActive, id }: BadgeSwitchProps) => {
  return (
    <BadgeSwitchControl $isActive={isActive} onClick={() => setIsActive(id)}>
      <BadgeSwitchInput
        id={`switch-${id}`}
        type="checkbox"
        checked={isActive}
        onChange={() => {
          setIsActive(id);
        }}
      />
      <label htmlFor={`switch-${id}`}>
        <Switch></Switch>
      </label>
    </BadgeSwitchControl>
  );
};

export default BadgeSwitch;
