import React from "react";
import Image from "next/image";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({ textAlign, content, level = 2 }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `max-w-5xl font-heading mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};
