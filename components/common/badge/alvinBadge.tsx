"use client";
import { BadgeProps, BadgeSize } from "./badge.types";
import BlackBadge from "./fundamental/BlackBadge";
import OutlinedBadge from "./fundamental/OutlinedBadge";
import PrimaryBadge from "./fundamental/PrimaryBadge";
import SecondaryBadge from "./fundamental/SecondaryBadge";
import TintBadge from "./fundamental/TintBadge";
import { cls } from "@/lib/utils";

// Badge component Common settings
export const GetBadgeSizeClassName = (size?: BadgeSize) => {
  const defaultStyle =
    "flex justify-center items-center rounded-md transition-all";
  switch (size) {
    case "LARGE":
      return cls(defaultStyle, "py-1 px-2 h6");
    case "MEDIUM":
      return cls(defaultStyle, "py-0.5 px-2 h6");
    case "SMALL":
      return cls(defaultStyle, "py-0.5 px-2 caption-500");
    default:
      return cls(defaultStyle, "py-1 px-2 h6");
  }
};

function AlvinBadge(props: BadgeProps) {
  switch (props.BadgeStyle) {
    case "PRIMARY":
      return <PrimaryBadge {...props} />;
    case "TINT":
      return <TintBadge {...props} />;
    case "OUTLINED":
      return <OutlinedBadge {...props} />;
    case "SECONDARY":
      return <SecondaryBadge {...props} />;
    case "BLACK":
      return <BlackBadge {...props} />;
    default:
      return <PrimaryBadge {...props} />;
  }
}

export default AlvinBadge;
