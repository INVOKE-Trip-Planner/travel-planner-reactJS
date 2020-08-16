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

const LoginForm = (props) => {

  return (
    <Formik
      initialValues={{ username: '', password: ''}}

      validationSchema={Yup.object({
        username: Yup.string()
          .required('Required'),
        password: Yup.string()
          .required('Required'),
      })}

      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
        props.onLogin(values);
      }}
    >
      <Form >

        <MyTextInput
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username here"
        />

        <MyTextInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password here"
        />

        <div style={styles.buttonContainer}>
          <Button style={{border: "none", backgroundImage: "linear-gradient(to bottom right, #E74C3C, #B03A2E)"}} type="submit" size="lg">Login</Button>
          {/* <button type="submit">Register</button> */}
        </div>
      </Form>
    </Formik>
  );
};

const styles = {
  buttonContainer: {
    // border: "1px solid black",
    // width: 250,
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
  }
}

const mapStateToProps = (store) => ({
  getLoginData: Actions.getLoginData(store),
})

const mapDispatchToProps = {
  onLogin: Actions.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);