import { FC } from "react";
import css from "./checkbox.module.css";

interface PropsCheckbox {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: FC<PropsCheckbox> = ({ checked, onChange }) => (
  <input checked={checked} className={css.checkbox} type="checkbox" onChange={onChange} />
);
