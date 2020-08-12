import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Redux
import { connect } from "react-redux";
import Actions from "../../../actions";

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
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
      <Form style={styles.formContainer}>

        <label htmlFor="name">Name</label>
        <Field name="name" id="name" type="text" />        
        <div style={styles.errorContainer}>
          <ErrorMessage name="name"/>
        </div>

        <label htmlFor="username">Username</label>
        <Field name="username" id="username" type="text" />        
        <div style={styles.errorContainer}>
          <ErrorMessage name="username"/>
        </div>

        <label htmlFor="email">Email Address</label>
        <Field name="email" id="email" type="email" />
        <div style={styles.errorContainer}>
          <ErrorMessage name="email" />         
        </div>

        <label htmlFor="password">Password</label>
        <Field name="password" id="password" type="password" />
        <div style={styles.errorContainer}>
          <ErrorMessage name="password" />         
        </div>

        <label htmlFor="password_confirmation">Confirm Password</label>
        <Field name="password_confirmation" id="password_confirmation" type="password" />
        <div style={styles.errorContainer}>
          <ErrorMessage name="password_confirmation" />         
        </div>

        <button type="submit">Register</button>
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
  getRegisterData: Actions.getRegisterData(store),
})

const mapDispatchToProps = {
  onRegister: Actions.register,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);