import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "edwardvincent@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <p>CONTACT INFORMATION</p>
      <div>
        <p>Email id:</p>
        <p>{userData.email}</p>
        <p>Phone:</p>
        {isEdit ? (
          <input
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        ) : (
          <p>{userData.phone}</p>
        )}
        <p>Address:</p>
        {isEdit ? (
          <p>
            <input onChange={(e) =>
              setUserData((prev) => ({ ...prev, address: {...prev.address,line1:e.target.value} }))
            } value={userData.address.line1} type="text" />
            <br />
            <input onChange={(e) =>
              setUserData((prev) => ({ ...prev, address: {...prev.address,line2:e.target.value} }))
            } value={userData.address.line2} type="text" />
          </p>
        ) : (
          <p>
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
