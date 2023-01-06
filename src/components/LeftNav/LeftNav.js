import React from "react";
import "./LeftNav.css";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Img from "./Frame.png";

function LeftNav() {
  const arr = [
    {
      icon: <GridViewRoundedIcon />,
      topic: "Dashboard",
    },
    {
      icon: <LibraryBooksRoundedIcon />,
      topic: "All course",
    },
    {
      icon: <FolderRoundedIcon />,
      topic: "Resource",
    },
    {
      icon: <PersonOutlineOutlinedIcon />,
      topic: "Friends",
    },
    {
      icon: <ChatBubbleOutlineOutlinedIcon />,
      topic: "Chats",
    },
    {
      icon: <SettingsOutlinedIcon />,
      topic: "Settings",
    },
  ];
  return (
    <div className="leftnav">
      <div>
        <span className="leftnav__title">
          <button className="leftnav__button--fname">O</button>
          <h3 className="leftnav__title__name">Ohara</h3>
        </span>
      </div>
      <div className="leftnav__button">
        <button className="button leftnav__button--joincourse">
          Join a Course
        </button>
      </div>
      {/* ARRAYS */}

      {arr.map((x) => (
        <div className="leftnav__menu">
          <div className="leftnav__menu__combine">
            <div className="leftnav__menu--icon">{x.icon} </div>
            <h5 className="leftnav__menu--topic">{x.topic}</h5>
          </div>
        </div>
      ))}

      <div className="leftnav__card">
        <img className="leftnav__card__image" src={Img} alt="logo" />
        <h6 className="leftnav__card__description">
          Upgrade to for more resources
        </h6>
        <button className="card__button--upgrade">Upgrade</button>
      </div>
    </div>
  );
}

export default LeftNav;
