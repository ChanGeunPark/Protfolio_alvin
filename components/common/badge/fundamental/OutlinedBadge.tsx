import React from "react";
import { cls } from "@/lib/utils";
import { BadgeProps } from "../badge.types";
import { GetBadgeSizeClassName } from "../alvinBadge";
import { HiOutlineX } from "react-icons/hi";

function OutlinedBadge(props: BadgeProps) {
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
        "border-2 border-gray-50 dark:border-gray-700 text-gray-800 dark:text-white",
        className ? className : "",
      )}
      style={style}
    >
      {children}
      {onClose ? (
        <button type="button" onClick={onClose}>
          <HiOutlineX className="w-4 h-4 ml-1 text-gray-600 dark:text-gray-300" />
        </button>
      ) : null}
    </div>
  );
}

export default OutlinedBadge;
