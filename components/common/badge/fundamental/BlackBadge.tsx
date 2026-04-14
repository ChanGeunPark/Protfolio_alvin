import React from "react";
import { cls } from "@/lib/utils";
import { BadgeProps } from "../badge.types";
import { GetBadgeSizeClassName } from "../alvinBadge";
import { HiOutlineX } from "react-icons/hi";

function BlackBadge(props: BadgeProps) {
  const {
    // React Button Default props
    className,
    style,
    children,

    // Design system props
    BadgeSize,
    onClose,
  } = props;

  return (
    <div
      className={cls(
        GetBadgeSizeClassName(BadgeSize),
        "bg-gray-700 text-white dark:bg-gray-600",
        className ? className : "",
      )}
      style={style}
    >
      {children}
      {onClose ? (
        <button type="button" onClick={onClose}>
          <HiOutlineX className="w-4 h-4 ml-1 text-white" />
        </button>
      ) : null}
    </div>
  );
}

export default BlackBadge;
