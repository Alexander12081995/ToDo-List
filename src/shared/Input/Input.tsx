import { FC, ChangeEvent, KeyboardEvent } from "react";
import css from "./input.module.css";

interface PropsInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isError?: boolean;
  className?: string;
}

export const Input: FC<PropsInput> = ({ value, onChange, onKeyDown, placeholder, isError, className }) => (
  <div className={`${css.blockInput} ${className}`}>
    <input
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`${css.input} ${isError && css.inputError}`}
      placeholder={placeholder}
    />
    {isError && <span className={css.errorText}>Некорректный ввод</span>}
  </div>
);
