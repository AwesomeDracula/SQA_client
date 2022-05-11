import React from "react";
import "./../assets/css/profile.css";
import {NavLink} from "react-router-dom";

const userProfileLayout = (ChildComponent) => {
  class UserProfilePageHoc extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    render() {
      return (
        <>
          <div className="container">
            <div className="row profile">
              <div className="col-md-3">
                <div className="profile-sidebar">
                  <div className="my-3 p-3 bg-body rounded shadow-sm">
                    {/* <!-- SIDEBAR USERPIC --> */}
                    <div className="profile-userpic">
                      <img
                        src={require("../assets/images/profile.jpg")}
                        className="img-responsive profile-img-center"
                        alt=""
                      />
                    </div>
                    <div className="profile-usertitle">
                      <div className="profile-usertitle-name">Nhóm 13</div>
                      <div className="profile-usertitle-job">
                        Đảm bảo chất lượng phần mềm
                      </div>
                    </div>
                    <hr />
                    <div>
                      <div className="bd-example">
                        <div className="list-group">
                          <NavLink
                            to="/profile"
                            className={({isActive}) =>
                              `list-group-item list-group-item-action ${
                                isActive ? "active" : ""
                              }`
                            }
                          >
                            Thông tin cá nhân
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="profile-content">
                  <ChildComponent {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return UserProfilePageHoc;
};

export default userProfileLayout;
