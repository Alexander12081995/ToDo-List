import { FC, PropsWithChildren } from "react";
import css from "./container.module.css";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
