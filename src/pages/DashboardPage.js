import React from "react";
import Tabs from "../components/Tabs";
import adminLayout from "../hoc/adminLayout";

const DashboardPage = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-info-circle"></i>
              </div>
              <div className="mr-5">
                Quy định mức đóng BHXH bắt buộc vào Quỹ bảo hiểm TNLĐ, BNN!
              </div>
            </div>
            <a
              className="card-footer text-white clearfix small z-1"
              href="/detail"
            >
              <span className="float-left">Xem chi tiết</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-info-circle"></i>
              </div>
              <div className="mr-5">Dịch vụ công trực tuyến</div>
            </div>
            <a
              className="card-footer text-white clearfix small z-1"
              href="/detail"
            >
              <span className="float-left">Xem chi tiết</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-info-circle"></i>
              </div>
              <div className="mr-5">Dịch vụ công trực tuyến</div>
            </div>
            <a
              className="card-footer text-white clearfix small z-1"
              href="/detail"
            >
              <span className="float-left">Xem chi tiết</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-danger o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-info-circle"></i>
              </div>
              <div className="mr-5">Dịch vụ công trực tuyến</div>
            </div>
            <a
              className="card-footer text-white clearfix small z-1"
              href="/detail"
            >
              <span className="float-left">Xem chi tiết</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <Tabs />
    </>
  );
};

export default adminLayout(DashboardPage);
