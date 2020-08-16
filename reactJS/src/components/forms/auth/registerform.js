import React from 'react';
import { Formik, Field, useField, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button } from "reactstrap";

// Redux
import { connect } from "react-redux";
import Actions from "../../../actions";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div style={styles.inputContainer}>
      <label htmlFor={props.id || props.name}>{label}:</label>

      <div style={styles.inputStyle}>
        <input className="text-input" {...field} {...props} 
          style={{
            outline: "none",
            width: "100%",
            height: 50,
            borderRadius: 5,
            padding: 10,
          }}
        />
        {meta.touched && meta.error ? (
          <div className="error" style={styles.errorContainer}>{meta.error}</div>
        ) : null}
      </div>
      </div>
    </>
  );
};


const SignupForm = (props) => {

  return (
    <Formik
      initialValues={{ username: '', name:'', email: '', password: '', password_confirmation: ''}}

      validationSchema={Yup.object({
        name: Yup.string()
          .max(255, 'Must be 255 characters or less')
          .required('Required'),
        username: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Required'),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password does not match above')
          .required('Required'),
      })}

      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
        props.onRegister(values);
      }}
    >
      <Form >

        <MyTextInput
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your name here"
        />

        <MyTextInput
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username here"
        />

        <MyTextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email here"
        />

        <MyTextInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password here"
        />

        <MyTextInput
          label="Confirm Password"
          name="password_confirmation"
          type="password"
          placeholder="Enter your confirm password here"
        />

        <div style={styles.buttonContainer}>
          <Button color="primary" type="submit" size="lg">Register</Button>
          {/* <button type="submit">Register</button> */}
        </div>
      </Form>

    </Formik>
  );
};

const styles = {
  buttonContainer: {
    // border: "1px solid black",
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    // margin: 20,
    // padding: 20,
  },

  inputContainer: {
    // border: "1px solid green",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 600,

    padding: 20,

  },

  inputStyle: {
    // border: "2px solid blue",
    width: 400,
    // height: 50,
    borderRadius: 10,
    // overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: 10,
  },

  errorContainer: {
    // border: "1px solid red",
    color: "red"
  },
}

const mapStateToProps = (store) => ({
  getRegisterData: Actions.getRegisterData(store),
})

const mapDispatchToProps = {
  onRegister: Actions.register,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);