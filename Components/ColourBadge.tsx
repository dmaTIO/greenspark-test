import colors from "@/config/colors";
import React from "react";
import styled from "styled-components";

interface Colour {
  colourName: string;
  colour: string;
}

interface ColourBadProps {
  selectedColour: string;
  colour: Colour;
  setWidgetColour: (colour: string) => void;
}

const ColourBadgeControl = styled.div<{
  $colour: string;
  $isSelected: boolean;
}>`
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-color: ${({ $colour }) => $colour};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ $isSelected, $colour }) =>
    $isSelected ? colors.gray : $colour};
  opacity: 1;
  transition: all 0.15s linear;
  &:hover {
    opacity: 0.8;
  }
`;

const ColourBadge = ({
  selectedColour,
  colour,
  setWidgetColour,
}: ColourBadProps) => {
  return (
    <ColourBadgeControl
      $colour={colour.colour}
      $isSelected={colour.colour === selectedColour}
      onClick={() => setWidgetColour(colour.colour)}
    />
  );
};

export default ColourBadge;
