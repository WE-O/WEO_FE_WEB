import MainPage from "../../components/MainPage";
import { useAppSelector } from "../../store/hooks";
import ModalContanier from "../../components/Common/Modal/ModalContainer";

const Main = () => {
  const isLogin = useAppSelector((state) => state.login.openLogin);
  return (
    <>
      <MainPage />
      {isLogin && <ModalContanier />}
    </>
  );
};

export default Main;
