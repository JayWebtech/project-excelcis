import React, { useState } from "react";
import AnimatedItem from "./AnimatedItem";
import Image from "next/image";

const Profile = ({ setShowProfileModal }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${
        showModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div>
        <p>This is a Test Div</p>
      </div>
    </div>
  );
};

export default Profile;
