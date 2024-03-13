import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import logoutIcon from "../../assets/Images/navBar/logoutNav.png";
import myaccout from "../../assets/Images/control/octicon_feed-person-16.svg";
import plan from "../../assets/Images/control/solar_money-bag-bold.svg";
import resfresh from "../../assets/Images/navBar/shape.png";
import app from "../../assets/Images/control/ri_app-store-fill.svg";
import contact from "../../assets/Images/control/streamline_customer-support-1-solid.svg";
import signout from "../../assets/Images/control/humbleicons_logout.svg";

import { PiGear } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import avatar from "../../assets/Images/navBar/Avatar.png";

const Navbar = () => {
  const [navDroplist, setNavDroplist] = useState(false);

  //renewalDate For Api
  const [renewalDate, setRenewalDate] = useState("2024-01-01");
  //user's Words For Api
  const [wordsCount, setWordsCount] = useState(850);
  const [wordsUsed, setWordsUsed] = useState(300);
  const widthProgress = (wordsUsed / wordsCount) * 100;

  //Logout Nav For Api
  const navigate = useNavigate();

  const initialValues = {
    search: "",
  };

  const validationSchema = Yup.object({
    search: Yup.string(),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission if needed
    // You can perform additional actions here
    setSubmitting(false);
  };
  const searchFunction = (searchTerm) => {
    // Perform search logic with the searchTerm
    console.log(`Searching for: ${searchTerm}`);
    // Replace the console.log with your actual search implementation
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/signin");
  };

  const goToPlan = () => {
    navigate("/myplan");
  };
  const goToAccount = () => {
    navigate("/myaccount");
  };

  return (
    <div
      dir="rtl"
      className=" d-flex  nav-container .align-items-center gap-2 flex-row ">
      <div className=" nav-input-container flex-grow-1 "></div>
      <div className=" nav-icon-container position-relative  .align-items-center gap-2 d-flex bg-white px-2   flex-row">
        <button
          onClick={goToPlan}
          className="btn-upgrade  ms-3   rounded-3
        p-1 ps-4 pe-4">
          ترقية
        </button>

        <button
          onClick={() => setNavDroplist(!navDroplist)}
          className="nav-icon ">
          <img
            className="nav-icon "
            src={avatar}
          />
        </button>
        {navDroplist && (
          <div className=" position-absolute  user-list">
            <div>
              <div className=" d-flex gap-2 pt-3 flex-column">
                <button className=" button-user-list d-flex  align-items-center  gap-1">
                  <img
                    onClick={goToAccount}
                    src={myaccout}
                    alt="myaccout"
                    className="  droplist-sub-icon"
                  />
                  <div className="droplist-subtext">حسابي</div>
                </button>
                <button
                  onClick={goToPlan}
                  className=" button-user-list align-items-center d-flex gap-1 ">
                  <img
                    src={plan}
                    alt="myaccout"
                    className="  droplist-sub-icon"
                  />
                  <div className="droplist-subtext">الخطط و الاشتراكات </div>
                </button>
                <button className=" button-user-list align-items-center d-flex gap-1 ">
                  <img
                    src={app}
                    alt="myaccout"
                    className="  droplist-sub-icon"
                  />
                  <div className="droplist-subtext">تحميل التطبيق </div>
                </button>
                <button className=" button-user-list align-items-center d-flex gap-1 ">
                  <img
                    src={contact}
                    alt="myaccout"
                    className="  droplist-sub-icon"
                  />
                  <div className="droplist-subtext"> التواصل مع الدعم</div>
                </button>
              </div>
              <div className="" />

              <button
                onClick={handleLogout}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  outline: "none",
                }}
                className=" d-flex  pt-3  align-items-center gap-2">
                <img
                  src={logoutIcon}
                  style={{ maxWidth: "20px", maxHeight: "20px" }}
                  alt="logOut"
                />
                <div
                  style={{
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "600",
                  }}>
                  تسجيل الخروج
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
