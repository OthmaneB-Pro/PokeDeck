import { Dispatch, SetStateAction } from "react";

export type LoginFormType = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};
