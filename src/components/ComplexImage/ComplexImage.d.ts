import React from "react";

export interface ComplexImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ids: string[],
  srcs: string[],
  tags: string[],
  showTag: (tag: string) => void,
}