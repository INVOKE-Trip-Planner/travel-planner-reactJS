import React from 'react';
import { Formik, Field, useField, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button } from "reactstrap";

import { PRIMARY_COLOR } from "common/styles/index.js";

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
              height: 40,
              borderRadius: 5,
              padding: 10,
              // border: "1px solid black"
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
      // initialValues={{ name: 'test', username:'aizat', email: 'test@gmail.com', password: '1234abcd', password_confirmation: '1234abcd'}}

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
        // console.log(values);
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
        props.onRegister(values);
      }}
    >
      <Form style={{minHeight: "100vh"}}>

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
          <Button style={PRIMARY_COLOR} color="primary" type="submit" size="lg">Register</Button>
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "2vh",
    width: "100%",

    padding: 10,

  },

  inputStyle: {
    // border: "2px solid blue",
    minWidth: 300,
    maxWidth: 375,
    // height: 50,
    borderRadius: 10,
    // overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: 10,
  },

  errorContainer: {
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