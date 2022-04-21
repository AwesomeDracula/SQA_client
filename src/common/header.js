import React from "react";
import {Dropdown} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const onGoToProfile = () => {
    navigate("/profile");
  }
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{left: "unset", right: "50px"}}
    >
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Hồ sơ
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={onGoToProfile}>Hồ sơ của tôi</Dropdown.Item>
          <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Header;
