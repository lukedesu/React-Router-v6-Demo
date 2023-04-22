import { useNavigate } from "react-router-dom";
import Auth from "./Auth";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    Auth.signIn(() => {
      navigate("/myprofile");
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Sign In</h1>
      <button type="button" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
