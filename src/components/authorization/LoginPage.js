import React from "react";
import { Formik, Form, Field, yupToFormErrors } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Field Is Required."),
  password: Yup.string().required("Incorrect Password"),
});

const LoginPage = () => (
  <div>
    <h1 className="register-header">Login</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        alert("Login Successful!");
      }}
    >
      {({ errors, touched }) => (
        <Form className="register-form-container">
          <div className="form-input-wrapper">
            Email:
            <Field name="email" type="email" />
            {errors.email && touched.email ? (
              <div className="form-error-msg">{errors.email}</div>
            ) : null}
          </div>

          <div className="form-input-wrapper">
            Password:
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div className="form-error-msg">{errors.password}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginPage;
