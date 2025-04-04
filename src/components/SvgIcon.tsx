// src/components/SvgIcon.tsx
import { SVGProps } from "react";

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  src: string;
}

export default function SvgIcon({ src, ...props }: SvgIconProps) {
  return (
    <img
      src={src}
      alt=""
      className={props.className}
      style={{ fill: "currentColor" }}
    />
  );
}
