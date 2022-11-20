import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Flex, IconButton } from "@chakra-ui/react";
import React, { cloneElement } from "react";

export enum ICON_TYPE {
  STANDARD = "standard",
  SINGLE_CHEVRON = "single_chevron",
  DOUBLE_CHEVRON = "double_chevron",
}

type ICON_KEY = keyof typeof ICON_TYPE;

interface IProps {
  label: string;
  icon: React.ReactElement;
  type?: any;
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export default function CustomIconButton({
  label,
  icon,
  type = ICON_TYPE.STANDARD,
  disabled,
  onClick,
}: IProps) {
  const clonedIcon = cloneElement(icon, {
    fontSize: "14px",
  });
  return (
    <Flex
      borderRadius="8"
      p="2"
      gap="1"
      onClick={onClick}
      alignItems="center"
      justifyItems="center"
      _hover={{
        background: "blue.100",
      }}
      _active={{
        background: "red.100",
      }}
    >
      {clonedIcon}
      <ChevronIcons type={type} disabled={disabled} />
    </Flex>
  );
}

interface IChevronIcons {
  type: any;
  disabled?: boolean;
}

function ChevronIcons({ type, disabled }: IChevronIcons) {
  if (type === ICON_TYPE.STANDARD) return null;
  if (type === ICON_TYPE.SINGLE_CHEVRON) {
    return (
      <Flex flexDir="column" justify="center" alignItems="center">
        <ChevronDownIcon />
      </Flex>
    );
  }
  if (type === ICON_TYPE.DOUBLE_CHEVRON) {
    return (
      <Flex flexDir="column" gap="0" justify="center" alignItems="center">
        <ChevronUpIcon fontSize="14px" mb="-5px" />
        <ChevronDownIcon fontSize="14px" />
      </Flex>
    );
  }

  return null;
}
