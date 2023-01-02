import "./App.css";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Img from "./Assets/Frame.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreateIcon from "@mui/icons-material/Create";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AirSharpIcon from "@mui/icons-material/AirSharp";
import DeblurOutlinedIcon from "@mui/icons-material/DeblurOutlined";
import pic4 from "./Assets/pic4.png";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function App() {
  return (
    <div className="App">
      <div className="Nav__Left">
        <div>
          <span className="Nav__Left__span">
            <button className="btn">O</button>
            <h3 className="Nav__Left__Title">Ohara</h3>
          </span>
        </div>
        <div className="Nav__Left__btn">
          <button className="btn__Join">Join a Course</button>
        </div>
        <div className="d">
          <span className="Nav__Left__span">
            <GridViewRoundedIcon className="icons" />
            <h5 className="text__">Dashboard</h5>
          </span>
        </div>
        <div>
          <span className="Nav__Left__span">
            <LibraryBooksRoundedIcon className="icons" />
            <h5 className="text__">All course</h5>
          </span>
        </div>
        <div>
          <span className="Nav__Left__span">
            <FolderRoundedIcon className="icons" />
            <h5 className="text__">Resource</h5>
          </span>
        </div>
        <div>
          <span className="Nav__Left__span">
            <PersonOutlineOutlinedIcon className="icons" />
            <h5 className="text__">Friends</h5>
          </span>
        </div>
        <div>
          <span className="Nav__Left__span">
            <ChatBubbleOutlineOutlinedIcon className="icons" />
            <h5 className="text__">Chats</h5>
          </span>
        </div>
        <div>
          <span className="Nav__Left__span">
            <SettingsOutlinedIcon className="icons" />
            <h5 className="text__">Setting</h5>
          </span>
        </div>
        <div>
          <div className="Nav__Left__Bottom">
            <img src={Img} />
            <h6 className="">Upgrade to for more resources</h6>
            <button className="btn__Join__two">Upgrade</button>
          </div>
        </div>
      </div>

      {/* Nav middle ----------------------------->*/}

      <div className="Nav__middle">
        <div className="Nav__middle__header">
          <input type="text" placeholder=" Search.... " />

          <NotificationsNoneOutlinedIcon className="Nav__middle__header__icon" />
        </div>
        <div className="Nav__middle_course">
          <div>
            <h1 style={{ marginRight: "383px" }}>All courses</h1>
          </div>
          <div className="Nav__middle__Menu">
            <h5 className="Nav__middle__Menu__Ongoing">Ongoing</h5>
            <h5 className="Nav__middle__Menu__Favorite">Favorite</h5>
            <h5 className="Nav__middle__Menu__Complete">Complete</h5>
          </div>
        </div>
        {/* image---------------------> */}

        <div className="Nav__middle__img">
          <div className="Nav__middle__img__header">
            <div style={{ padding: "26px" }}>
              <h1>UI/UX Design</h1>
              <small>20 Lesson</small>
            </div>
            <div style={{ marginTop: "20px", marginLeft: "364px" }}>
              <small>2h 20 min</small>
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
                  backgroundColor: "#CCC",
                  marginLeft: "30px",
                  width: "35px",
                  height: "35px",
                  borderRadius: "9px",
                }}
              />
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                style={{
                  marginBottom: "-16px",
                  marginRight: "47px",
                  width: "35px",
                  height: "35px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="Nav__middle__img_Two">
          <div className="Nav__middle__img__two__one">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ padding: "20px" }}>
                <h3>Photography</h3>
                <small>20 Lesson</small>
              </div>
              <div style={{ marginTop: "10px" }}>
                <small>2h 20 min</small>
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
                      backgroundColor: "#CCC",
                      marginLeft: "30px",
                      width: "35px",
                      height: "35px",
                      borderRadius: "9px",
                    }}
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                    style={{
                      marginBottom: "-16px",
                      marginRight: "47px",
                      width: "35px",
                      height: "35px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Nav__middle__img__two__two">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ padding: "20px" }}>
                <h3>Animation</h3>
                <small>20 Lesson</small>
              </div>
              <div style={{ marginTop: "10px" }}>
                <small>2h 20 min</small>
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
                      backgroundColor: "#CCC",
                      marginLeft: "30px",
                      width: "35px",
                      height: "35px",
                      borderRadius: "9px",
                    }}
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                    style={{
                      marginBottom: "-16px",
                      marginRight: "47px",
                      width: "35px",
                      height: "35px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav right ----------------------> */}
      <div className="Nav__right">
        <div className="Nav__right__top">
          <img
            src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
            className="Nav__right__image"
          />
          <h6 className="Nav__right__name">Alexa Rogue</h6>
          <KeyboardArrowDownIcon className="Nav__right__name" />
        </div>
        <div className="Nav__right__Progress">
          <h3>Progress</h3>
          <div>
            <div className="Progress__menu">
              <span className="progress__menu__icon">
                <CreateIcon />
              </span>
              <span className="progress__menu__title">
                <h5>UI/UX Design</h5>
                <small>Advanced</small>
              </span>
              <span>
                <div className="progress__Loader__out">
                  <div className="progress__Loader__in"></div>
                </div>
              </span>
            </div>
          </div>
          <div className="Progress__menu">
            <span className="progress__menu__icon">
              <CameraAltIcon style={{ color: "pink" }} />
            </span>
            <span className="progress__menu__title">
              <h5>Photography</h5>
              <small>Intermediate</small>
            </span>
            <span>
              <div
                className="progress__Loader__out"
                style={{ backgroundColor: "#a99fa1" }}
              >
                <div
                  className="progress__Loader__in"
                  style={{ backgroundColor: "pink", width: "60px" }}
                ></div>
              </div>
            </span>
          </div>
          <div className="Progress__menu">
            <span className="progress__menu__icon">
              <AirSharpIcon style={{ color: "#ce9326" }} />
            </span>
            <span className="progress__menu__title">
              <h5>Animation UI</h5>
              <small>Advance</small>
            </span>
            <span>
              <div
                className="progress__Loader__out"
                style={{ backgroundColor: "#ce9326" }}
              >
                <div
                  className="progress__Loader__in"
                  style={{ backgroundColor: "#f5d59c", width: "20px" }}
                ></div>
              </div>
            </span>
          </div>
          {/* nav right footer ----------------------->*/}
          <div className="Upcoming__tasks">
            <h3>Upcoming Task</h3>
            <div className="Upcoming__task__one">
              <span>
                <ChatBubbleOutlineOutlinedIcon
                  style={{
                    backgroundColor: "lightBlue",
                    color: "blue",
                    width: "30px",
                  }}
                />
              </span>
              <span className="Upcoming__tasks__topic">
                <h5>UI/UX-Discussion </h5>
                <small>27 Oct 2022,Tuesday</small>
              </span>
            </div>
            <div className="Upcoming__task__one">
              <span>
                <DeblurOutlinedIcon
                  style={{
                    backgroundColor: "lightpink",
                    color: "red",
                    width: "30px",
                  }}
                />
              </span>
              <span className="Upcoming__tasks__topic">
                <h5>Animation -3D Animation </h5>
                <small>27 Oct 2022,Tuesday</small>
              </span>
            </div>
          </div>
          <div style={{}}>
            <img src={pic4} style={{ width: "100%", marginTop: "40px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
