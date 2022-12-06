import NavbarComponent from "./navbar.component";
import React from "react";
import { ComponentChildrenProps } from "@models/weather.models";

export default function LayoutComponent({ children }: ComponentChildrenProps) {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
    </>
  );
}
