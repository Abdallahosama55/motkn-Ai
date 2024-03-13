import React, { useEffect, useState } from "react";

import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import { Outlet, useLocation, useParams } from "react-router-dom";

import "./AppLayoutmot.css";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import openSideIcon from "../../assets/logo.png";
// import ChatSideBar from "./ChatSideBar";
// import ArtSideBar from "./ArtSideBar";

const AppLayoutmot = ({ chats, setChats, showChat, setShowChat }) => {
  const [openSideBar, setOpenSideBar] = useState(true);

  //Change between Chat and Main SideBar
  // const [sideBar, setSideBar] = useState(true);

  //Change between TwoChats
  const [switchSideBar, setSwitchSideBar] = useState(true);

  const [selectedSection, setSelectedSection] = useState("");

  const location = useLocation();
  const { id } = useParams();
  console.log(location.pathname);
  console.log("userId", id);
  console.log(
    "location.pathname === `/ChatRoutes/${userId}`",
    location.pathname === `/ChatRoutes/${id}`
  );

  //close when screen is mobile
  const [sideBar, setSideBar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setOpenSideBar(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-x-hidden    w-100 applayout   ">
      <div className={` overflow-auto  px-2 position-relative h-100    `}>
        <MdOutlineArrowForwardIos
          src={openSideIcon}
          style={
            !openSideBar
              ? {
                  rotate: "180deg",
                  transitionDuration: "500ms",
                }
              : { transitionDuration: "500ms" }
          }
          onClick={() => setOpenSideBar(!openSideBar)}
          alt=" OpenIcon"
          className=" position-absolute   openSideBarIcon "
        />
        <div>
          <header className=" headerLayout">
            <Navbar />
          </header>
        </div>
        <div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <div
        dir="rtl"
        className={`${
          openSideBar ? " media-close-sidebar " : " closeSideBar  "
        }`}>
        <Sidebar
          setOpenSideBar={setOpenSideBar}
          openSideBar={openSideBar}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      </div>
    </div>
  );
};

export default AppLayoutmot;
