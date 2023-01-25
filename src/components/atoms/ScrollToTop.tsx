import { FC, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
interface IScrollToTopProps {}

export const ScrollToTop: FC<IScrollToTopProps> = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
