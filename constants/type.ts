import { ChangeEvent } from "react";

export type DescriptionType = {
  title: string;
  content: string;
};

export type ResultType = {
  result: string;
  text: string;
};

export type ButtonType = {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};
