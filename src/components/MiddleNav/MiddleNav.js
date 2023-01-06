import React from "react";
import "./MiddleNav.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function MiddleNav() {
  return (
    <div className="middlenav">
      <div className="middlenav__header">
        <input type="text" placeholder=" Search " />

        <NotificationsNoneOutlinedIcon className="middlenav__header--icon" />
      </div>
      <div className="middlenav__bar">
        <div>
          <h1
            style={{
              marginRight: "414px",
              fontSize: "28px",
              lineHeight: "33px",
              color: "#011F3B",
            }}
          >
            All courses
          </h1>
        </div>
        <div className="middlenav__bar--menu">
          <h5 className="menu__ongoing">Ongoing</h5>
          <h5 className="menu__favorite">Favorite</h5>
          <h5 className="menu__complete">Complete</h5>
        </div>
      </div>
      {/* image---------------------> */}

      <div className="middlenav__image">
        <div className="middlenav__image--header">
          <div style={{ padding: "26px" }}>
            <h1>UI/UX Design</h1>
            <small>20 Lesson</small>
          </div>
          <div>
            <small className="middlenav__image--small1">2h 20 min</small>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "100px",
          }}
        >
          <div>
            <SkipNextIcon
              style={{
                marginLeft: "30px",
                width: "35px",
                height: "35px",
                borderRadius: "9px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "#FFFFFF",
              }}
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="pic"
              style={{
                marginBottom: "-16px",
                marginRight: "47px",
                width: "35px",
                height: "35px",
                borderRadius: "100%",
                color: "#FFFFFF",
              }}
            />
          </div>
        </div>
      </div>
      <div className="middlenav__image--body">
        <div className="middlenav__image--ele1">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ padding: "20px" }}>
              <h3>Photography</h3>
              <small>20 Lesson</small>
            </div>
            <div>
              <small className="middlenav__image--time">2h 20 min</small>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "100px",
              }}
            >
              <div>
                <SkipNextIcon
                  style={{
                    marginLeft: "30px",
                    width: "35px",
                    height: "35px",
                    borderRadius: "9px",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    color: "#FFFFFF",
                  }}
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="img2"
                  style={{
                    marginBottom: "-16px",
                    marginRight: "47px",
                    width: "35px",
                    height: "35px",
                    borderRadius: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="middlenav__image--ele2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#FFFFFF",
            }}
          >
            <div style={{ padding: "20px" }}>
              <h3>Animation</h3>
              <small>20 Lesson</small>
            </div>
            <div>
              <small className="middlenav__image--time">2h 20 min</small>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "100px",
                color: "#FFFFFF",
              }}
            >
              <div>
                <SkipNextIcon
                  style={{
                    marginLeft: "30px",
                    width: "35px",
                    height: "35px",
                    borderRadius: "9px",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    color: "#FFFFFF",
                  }}
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="img2"
                  style={{
                    marginBottom: "-16px",
                    marginRight: "47px",
                    width: "35px",
                    height: "35px",
                    borderRadius: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleNav;
