import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  srcs: string[],
}