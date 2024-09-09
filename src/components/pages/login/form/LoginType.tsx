import { Dispatch, SetStateAction } from "react";

export type LoginFormType = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};
export type TitleFormType = {
  isLogin: boolean;
};

export type LinkInscriptionType = {
  onClick: () => void;
};
