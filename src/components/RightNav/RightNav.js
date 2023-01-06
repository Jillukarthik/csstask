import React from "react";
import "./RightNav.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AirSharpIcon from "@mui/icons-material/AirSharp";
import DeblurOutlinedIcon from "@mui/icons-material/DeblurOutlined";
import pic4 from "./pic4.png";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateIcon from "@mui/icons-material/Create";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function RightNav() {
  return (
    <div className="rightnav">
      <div className="rightnav__profile">
        <img
          src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
          className="rightnav__profile--image"
        />
        <h6 className="rightnav__profile--name">Alexa Rogue</h6>
        <KeyboardArrowDownIcon className="rightnav__icon" />
      </div>
      <div className="rightnav__progress">
        <h4 className="upcoming__tasks--title">Progress</h4>
        <div>
          <div className="Progress__menu">
            <span className="progress__menu--icon">
              <CreateIcon />
            </span>
            <span className="progress__menu--title">
              <h5>UI/UX Design</h5>
              <small>Advanced</small>
            </span>
            <span>
              <div className="progress__Loader--out">
                <div className="progress__Loader--in"></div>
              </div>
            </span>
          </div>
        </div>
        <div className="Progress__menu">
          <span className="progress__menu--icon">
            <CameraAltIcon style={{ color: "pink" }} />
          </span>
          <span className="progress__menu--title">
            <h5>Photography</h5>
            <small>Intermediate</small>
          </span>
          <span>
            <div
              className="progress__Loader--out"
              style={{ backgroundColor: "#a99fa1" }}
            >
              <div
                className="progress__Loader--in"
                style={{ backgroundColor: "pink", width: "60px" }}
              ></div>
            </div>
          </span>
        </div>
        <div className="Progress__menu">
          <span className="progress__menu--icon">
            <AirSharpIcon style={{ color: "#ce9326" }} />
          </span>
          <span className="progress__menu--title">
            <h5>Animation UI</h5>
            <small>Advance</small>
          </span>
          <span>
            <div
              className="progress__Loader--out"
              style={{ backgroundColor: "#ce9326" }}
            >
              <div
                className="progress__Loader--in"
                style={{ backgroundColor: "#f5d59c", width: "20px" }}
              ></div>
            </div>
          </span>
        </div>

        {/* nav right footer ----------------------->*/}
        <div className="upcoming__tasks">
          <h4 className="upcoming__tasks--title">Upcoming Task</h4>
          <div className="upcoming__taskone">
            <span>
              <ChatBubbleOutlineOutlinedIcon
                style={{
                  backgroundColor: "lightBlue",
                  color: "blue",
                  width: "30px",
                }}
              />
            </span>
            <span className="upcoming__taskstopic">
              <h5>UI/UX-Discussion </h5>
              <small>27 Oct 2022,Tuesday</small>
            </span>
          </div>
          <div className="upcoming__taskone">
            <span>
              <DeblurOutlinedIcon
                style={{
                  backgroundColor: "lightpink",
                  color: "red",
                  width: "30px",
                }}
              />
            </span>
            <span className="upcoming__taskstopic">
              <h5>Animation -3D Animation </h5>
              <small>27 Oct 2022,Tuesday</small>
            </span>
          </div>
        </div>
        <div>
          <img src={pic4} style={{ width: "100%", marginTop: "40px" }} />
        </div>
      </div>
    </div>
  );
}

export default RightNav;
