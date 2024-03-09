import { useState } from "react";
import styled from "styled-components";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Product } from "@/_types/product.type";
import LinkCheckbox from "../LinkCheckbox";
import colors, { BadgeColorsTypes } from "@/config/colors";
import ColourBadge from "../ColourBadge";
import Logo from "../Logo";
import BadgeSwitch from "../BadgeSwitch";
import TooltipWrapper from "../TooltipWrapper";

interface ProductWidgetProps {
  product: Product;
  isSelected: Product["active"];
  setSelectedProduct: (id: Product["id"]) => void;
}

type WidgetBannerStyleTypes = {
  $bgcolor?: BadgeColorsTypes;
};

type TextColourTypes = {
  $textColour: string;
};

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 230px;
`;

const WidgetBanner = styled.div<WidgetBannerStyleTypes>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ $bgcolor }) => $bgcolor};
  gap: 10px;
  padding: 10px;
  width: 100%;
  transition: all 0.15s linear;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ActionParagraph = styled.p<TextColourTypes>`
  font-size: 14px;
  font-weight: 400;
  color: ${({ $textColour }) => $textColour};
  transition: all 0.15s linear;
`;
const TypePragraph = styled.p<TextColourTypes>`
  font-size: 20px;
  font-weight: 700;
  color: ${({ $textColour }) => $textColour};
  transition: all 0.15s linear;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
`;

const ControlRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ControlLabel = styled.div`
  color: ${colors.brand};
  font-size: 14px;
  font-weight: 400;
`;

const Control = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const ProductWidget = ({
  product,
  isSelected,
  setSelectedProduct,
}: ProductWidgetProps) => {
  //Just mapping the badge colors to an array of objects
  //This will be used to render the badge color controls
  const colourBadgeArray = Object.entries(colors.badgeColors).map((col) => ({
    colourName: col[0],
    colour: col[1],
  }));

  //Setting the state for the widget colour, initializing with the value we get from the server
  const [widgetColour, setWidgetColour] = useState<string>(
    colors.badgeColors[product.selectedColor]
  );

  const setColour = (colour: string) => {
    setWidgetColour(colour);
  };

  //This is not part of the exercise, but I thought it would be a nice touch
  //If it was to be kept, it would be better to move it to a helper function under /utils
  //Determine lightness of colour to change the text color -> Maybe there's a better way to do this
  const setContrastColour = (color: string) => {
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? colors.badgeColors["green"] : "#fff";
  };

  //Crude way to determine the measure units for the product type -> Just to match the Figma design
  const measureUnits = {
    carbon: "kgs",
    "plastic bottles": "",
    trees: "",
  };

  const tooltipText =
    "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.";

  return (
    <Widget>
      {/* TODO: fix the type on this */}
      <WidgetBanner $bgcolor={widgetColour as unknown as BadgeColorsTypes}>
        <LogoContainer>
          <Logo colour={setContrastColour(widgetColour)} />
        </LogoContainer>
        <DescriptionContainer>
          <ActionParagraph
            $textColour={setContrastColour(widgetColour)}
          >{`This product ${product.action}`}</ActionParagraph>
          <TypePragraph $textColour={setContrastColour(widgetColour)}>{`${
            product.amount
          }${measureUnits[product.type]} ${product.type}`}</TypePragraph>
        </DescriptionContainer>
      </WidgetBanner>
      <ControlsContainer>
        <ControlRow>
          <ControlLabel>
            Link to Public Profile
            <TooltipWrapper tooltipText={tooltipText}>
              <IoMdInformationCircleOutline size={14} />
            </TooltipWrapper>
          </ControlLabel>
          <Control>
            <LinkCheckbox linked={product.linked} id={product.id} />
          </Control>
        </ControlRow>
        <ControlRow>
          <ControlLabel>Badge colour</ControlLabel>
          <Control>
            {colourBadgeArray.map((col, idx) => (
              <ColourBadge
                key={idx}
                selectedColour={widgetColour}
                colour={col}
                setWidgetColour={setColour}
              />
            ))}
          </Control>
        </ControlRow>
        <ControlRow>
          <ControlLabel>Activate Badge</ControlLabel>
          <Control>
            <BadgeSwitch
              id={product.id}
              isActive={isSelected}
              setIsActive={setSelectedProduct}
            />
          </Control>
        </ControlRow>
      </ControlsContainer>
    </Widget>
  );
};

export default ProductWidget;
