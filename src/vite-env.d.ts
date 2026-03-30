/// <reference types="vite/client" />

// Allow SCSS module imports
declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// Allow SVG imports
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

// Allow image imports
declare module "*.png" {
  const src: string;
  export default src;
}
