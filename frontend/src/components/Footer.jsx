import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40 text-sm">
        {/* --------- Left Section --------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis animi a, nesciunt illum amet accusamus aspernatur
            inventore optio reiciendis deserunt!
          </p>
        </div>

        {/* --------- Center Section --------- */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* --------- Right Section --------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+94-76-680-4086</li>
            <li>mhdmusharraf.edu@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* --------- Copyright Text --------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
