import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    navigate("/users");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <img src="/assets/lendsqr-logo.svg" alt="" className={styles.logo} />
        </div>
        <div className={styles.illustrationContainer}>
          <img
            src="/assets/pablo-sign-in.svg"
            alt=""
            className={styles.illustration}
          />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles.subtitle}>Enter details to login.</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className={styles.showButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>

            <button type="submit" className={styles.submitButton}>
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
