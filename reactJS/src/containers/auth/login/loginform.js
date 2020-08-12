import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Redux
import { connect } from "react-redux";
import Actions from "../../../actions";

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
      <Form style={styles.formContainer}>

        <label htmlFor="username">Username</label>
        <Field name="username" id="username" type="text" />        
        <div style={styles.errorContainer}>
          <ErrorMessage name="username"/>
        </div>

        <label htmlFor="password">Password</label>
        <Field name="password" id="password" type="password" />
        <div style={styles.errorContainer}>
          <ErrorMessage name="password" />         
        </div>

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

const styles = {
  formContainer: {
    // border: "1px solid black",
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    margin: 20,
    padding: 20,
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