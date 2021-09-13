import { purple } from "@material-ui/core/colors";
import { LoginSignup } from "../cmps/LoginSignup";
import register from "../../../assets/imgs/register.png";

export const Register = () => {
  return (
    <section className="register-wrapper">
      <div className="main-register">
        <div className="background-section">
          <div
            className="register-img-wrapper "
            style={{ width: "520px", height: "400px" }}
          >
            <img src={register} alt="" />
          </div>
        </div>
        <LoginSignup />
      </div>
      <div className="half-circle"></div>
    </section>
  );
};
