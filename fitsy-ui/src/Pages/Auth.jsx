import { useSelector } from "react-redux";
import Login from "../Components/login";
import Signup from "../Components/signup";

const Auth = () => {
  const isLoginForm = useSelector((store) => store.auth.isLoginForm);

  return isLoginForm ? <Login /> : <Signup />;
};

export default Auth;
