import { type FC, type ReactNode } from "react";
import { MyUserContextProvider } from "@/hooks/useUser";

interface IProps {
  children: ReactNode;
}

const UserProvider: FC<IProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
