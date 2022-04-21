import React from "react";
import "../../assets/css/login.css";
import authLayout from "../../hoc/authLayout";
import {Formik} from "formik";
import {Button} from "react-bootstrap";
import {poster} from "../../common/services";
import {addToken, getToken} from "../../common/utils";
import {Navigate, useNavigate} from "react-router-dom";

const LoginPage = (props) => {
  const navigate = useNavigate();
  if (getToken()) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Formik
        initialValues={{insuranceCode: "", password: ""}}
        validate={(values) => {
          const errors = {};
          if (!values.insuranceCode) {
            errors.insuranceCode = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Password must not be longer than 8 characters";
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
          poster("/login", values)
            .then((data) => {
              addToken(data.token);
              navigate("/");
            })
            .catch((err) => {
              alert("Login failed! Please try again!");
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
              <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
            </div>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form3Example3">
                Insurance Code
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter insurance code"
                name="insuranceCode"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.insuranceCode}
              />
              <span style={{color: "red", fontSize: "12px"}}>
                {errors.insuranceCode && touched.insuranceCode && errors.insuranceCode}
              </span>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span style={{color: "red", fontSize: "12px"}}>
                {errors.password && touched.password && errors.password}
              </span>
            </div>

            <div className="text-center mt-4 pt-2">
              <Button
                className="btn btn-primary btn-lg"
                style={{width: "50%", margin: "auto"}}
                disabled={isSubmitting || errors.insuranceCode || errors.password}
                type="submit"
              >
                Login
              </Button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <a href="register" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default authLayout(LoginPage);
