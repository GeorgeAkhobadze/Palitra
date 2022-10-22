import React from "react";
import { Formik, Form, Field, yupToFormErrors } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  age: Yup.number("Field Must be a Number.")
    .typeError("Field Must be a Number.")
    .required("Field Is Required.")
    .positive()
    .integer("Field Must be a Number."),
  firstName: Yup.string()
    .min(2, "First Name Too Short.")
    .max(20, "First Name Too Long.")
    .required("Field Is Required."),
  lastName: Yup.string()
    .min(2, "Last Name Too Short.")
    .max(50, "Last Name Too Short.")
    .required("Field Is Required."),
  email: Yup.string()
    .email("Invalid email format")
    .required("Field Is Required."),
});

const SignUpPage = () => (
  <div>
    <h1 className="register-header">Register</h1>
    <Formik
      initialValues={{
        age: "",
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert("Registration Successful!");
      }}
    >
      {({ errors, touched }) => (
        <Form className="register-form-container">
          <div className="form-input-wrapper">
            First Name:
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div className="form-error-msg">{errors.firstName}</div>
            ) : null}
          </div>
          <div className="form-input-wrapper">
            Last Name:
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div className="form-error-msg">{errors.lastName}</div>
            ) : null}
          </div>

          <div className="form-input-wrapper">
            Email:
            <Field name="email" type="email" />
            {errors.email && touched.email ? (
              <div className="form-error-msg">{errors.email}</div>
            ) : null}
          </div>

          <div className="form-input-wrapper">
            Age:
            <Field name="age" />
            {errors.age && touched.age ? (
              <div className="form-error-msg">{errors.age}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignUpPage;
