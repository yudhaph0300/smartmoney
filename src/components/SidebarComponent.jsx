import React from "react";
import "../style/SidebarComponent.css";
import { BiHomeAlt, BiTransferAlt, BiUser } from "react-icons/bi";

function SidebarComponent() {
  return (
    <div className="sidebar">
      <h3 className="logo text-center">smartmoney</h3>
      <div className="nav-sidebar">
        <button className="btn-item active">
          <BiHomeAlt size={20} />
          <span className="ms-3">Dashboard</span>
        </button>
        <button className="btn-item ">
          <BiTransferAlt size={20} />
          <span className="ms-3">Transfer</span>
        </button>
        <button className="btn-item ">
          <BiUser size={20} />
          <span className="ms-3">Profile</span>
        </button>
      </div>
    </div>
  );
}

export default SidebarComponent;
