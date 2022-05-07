import React from "react";
import "../../assets/css/login.css";
import {Link, Navigate, useNavigate} from "react-router-dom";
import authLayout from "../../hoc/authLayout";
import {getToken} from "../../common/utils";
import {poster} from "../../common/services";
import {Formik} from "formik";
import {Button} from "react-bootstrap";

const RegisterPage = () => {
  const navigate = useNavigate();
  if (getToken()) return <Navigate to="/" />;
  return (
    <>
      <Formik
        initialValues={{
          insuranceCode: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.insuranceCode) {
            errors.insuranceCode = "Vui lòng nhập trường này";
          }
          if (!values.password) {
            errors.password = "Vui lòng nhập trường này";
          } else if (values.password.length < 8) {
            errors.password = "Password must not be longer than 8 characters";
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = "Vui lòng nhập trường này";
          } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords must match";
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
          fetch("http://localhost:8080/register", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(() => {
              alert("Registration successful! Please login");
              navigate("/login");
            })
            .catch((err) => {
              console.log(err);
              alert("Register failed! Please try again!");
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
          <form onSubmit={handleSubmit} className="login-form">
            <div className="d-flex align-items-center my-4">
              <h1 className="text-center fw-normal mb-0 me-3">Đăng ký</h1>
            </div>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Mã bảo hiểm
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Nhập mã bảo hiểm"
                name="insuranceCode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.insuranceCode}
              />
              <span style={{color: "red", fontSize: "12px"}}>
                {errors.insuranceCode &&
                  touched.insuranceCode &&
                  errors.insuranceCode}
              </span>
            </div>

            {/* <!-- Username input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Nhập tên đăng nhập"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <span style={{color: "red", fontSize: "12px"}}>
                {errors.username &&
                  touched.username &&
                  errors.username}
              </span>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example4">
                Mật khẩu
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Nhập mật khẩu"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span style={{color: "red", fontSize: "12px"}}>
                {errors.password && touched.password && errors.password}
              </span>
            </div>

            {/* <!-- Confirm password input --> */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="form3Example4">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Nhập xác nhận mật khẩu"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <span style={{color: "red", fontSize: "12px"}}>
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </span>
            </div>

            <div className="text-center mt-4 pt-2">
              <Button
                className="btn btn-primary btn-lg"
                style={{width: "50%", margin: "auto"}}
                disabled={
                  isSubmitting ||
                  errors.insuranceCode ||
                  errors.password ||
                  errors.confirmPassword
                }
                type="submit"
              >
                Đăng ký
              </Button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Đã có tài khoản?{" "}
                <a href="login" className="link-danger">
                  Đăng nhập
                </a>
              </p>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default authLayout(RegisterPage);
