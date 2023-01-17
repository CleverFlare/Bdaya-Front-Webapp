import { FC, ReactElement } from "react";
interface IShowProps {
  when: boolean;
  fallback?: string | number | ReactElement | ReactElement[];
  children: ReactElement | ReactElement[];
}

export const Show: FC<IShowProps> = (props) => {
  return <>{props.when ? props.children : props.fallback || <></>}</>;
};
