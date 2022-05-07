import {Formik} from "formik";
import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import "../../assets/css/profile.css";
import {getter, poster} from "../../common/services";
import userProfileLayout from "../../hoc/userProfileLayout";

const userClass = [
  {
    value: "DOMESTIC_LABOR",
    text: "Người lao động Việt Nam",
  },
  {
    value: "FOREIGN_LABOR",
    text: "Người lao động nước ngoài",
  },
  {
    value: "OFFICER",
    text: "Cán bộ, công chức, viên chức",
  },
];

const ProfilePage = (props) => {
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    fullName: "",
    phoneNumber: "",
    insuranceCode: "",
  });
  const [classUser, setClassUser] = useState("DOMESTIC_LABOR");
  const [isEmployee, setIsEmployee] = useState(false);
  useEffect(() => {
    getter("/get-my-profile")
      .then((data) => {
        setProfileData(data);
        if (data?.isEmployee === null) {
          setIsEmployee(true);
        } else {
          setIsEmployee(data?.isEmployee);
        }
        setClassUser(data?.userClass || "DOMESTIC_LABOR");
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0 mb-3">Personal Info</h6>
        <Formik
          enableReinitialize={true}
          initialValues={profileData}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Bắt buộc";
            }
            if (!values.email) {
              errors.email = "Bắt buộc";
            }
            if (!values.fullName) {
              errors.fullName = "Bắt buộc";
            }
            if (!values.phoneNumber) {
              errors.phoneNumber = "Bắt buộc";
            }
            return errors;
          }}
          onSubmit={(values, {setSubmitting}) => {
            const params = {
              email: values.email,
              fullName: values.fullName,
              phoneNumber: values.phoneNumber,
              userClass: classUser,
              isEmployee,
            };
            poster("/update-profile", params)
              .then((data) => {
                alert("Success");
              })
              .catch((err) => {
                alert("Error");
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Tên người dùng
                  </label>
                  <div className="input-group mb-3">
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      placeholder="Tên người dùng"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <span className="input-group-text" id="basic-addon2">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <span style={{color: "red", fontSize: "12px"}}>
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>
                <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Địa chỉ email
                  </label>
                  <div className="mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Địa chỉ email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <span className="input-group-text" id="basic-addon2">
                        @
                      </span>
                    </div>
                    <span style={{color: "red", fontSize: "12px"}}>
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Số điện thoại
                  </label>
                  <div className="mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Số điện thoại"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="phoneNumber"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                      />
                      <span className="input-group-text" id="basic-addon2">
                        <i className="fa fa-mobile"></i>
                      </span>
                    </div>
                    <span style={{color: "red", fontSize: "12px"}}>
                      {errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber}
                    </span>
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Đối tượng người lao động
                  </label>
                  <div className="input-group mb-3">
                    <Form.Select
                      value={classUser}
                      aria-label="Default select example"
                      onChange={(e) => {
                        setClassUser(e.target.value);
                      }}
                    >
                      {userClass.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.text}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Mã bảo hiểm
                  </label>
                  <div className="mb-3">
                    <div className="input-group">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        placeholder="Mã bảo hiểm"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="insuranceCode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.insuranceCode}
                      />
                      <span className="input-group-text" id="basic-addon2">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <span style={{color: "red", fontSize: "12px"}}>
                      {errors.insuranceCode &&
                        touched.insuranceCode &&
                        errors.insuranceCode}
                    </span>
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Họ và tên
                  </label>
                  <div className="mb-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Họ và tên"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name="fullName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fullName}
                      />
                      <span className="input-group-text" id="basic-addon2">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <span style={{color: "red", fontSize: "12px"}}>
                      {errors.fullName && touched.fullName && errors.fullName}
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div key={`inline-radio`} className="mb-3">
                  <Form.Check
                    inline
                    label="Employee"
                    name="group1"
                    type="radio"
                    checked={isEmployee}
                    onClick={() => setIsEmployee(true)}
                    id={`inline-radio-1`}
                  />
                  <Form.Check
                    inline
                    label="Employer"
                    name="group1"
                    type="radio"
                    checked={!isEmployee}
                    onClick={() => setIsEmployee(false)}
                    id={`inline-radio-2`}
                  />
                </div>
              </div>

              <Button
                disabled={
                  isSubmitting ||
                  errors.email ||
                  errors.fullName ||
                  errors.phoneNumber
                }
                type="submit"
                className="btn btn-primary btn-lg"
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default userProfileLayout(ProfilePage);
