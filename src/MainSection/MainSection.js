import { useState } from "react";
import EmailModal from "./EmailModal/EmailModal";
import "./MainSection.css";
import PasswordModal from "./PasswordModal/PasswordModal";
const MainSection = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="main-section">
      {showPasswordModal ? (
        <PasswordModal
          data={data}
          setData={setData}
          setShowPasswordModal={setShowPasswordModal}
        />
      ) : (
        <EmailModal
          data={data}
          setData={setData}
          showPasswordModal={showPasswordModal}
          setShowPasswordModal={setShowPasswordModal}
        />
      )}
    </div>
  );
};

export default MainSection;
