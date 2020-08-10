import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: ''}}

      validationSchema={Yup.object({
        username: Yup.string()
          .min(5, 'Must be 5 characters or more')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
      })}

      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form style={styles.formContainer}>
        <label htmlFor="username">Username</label>
        <Field name="username" id="username" type="text" />        
        <div style={styles.errorUsername}>
          <ErrorMessage name="username"/>
        </div>

        <label htmlFor="email">Email Address</label>
        <Field name="email" id="email" type="email" />
        <div style={styles.errorUsername}>
          <ErrorMessage name="email" />         
        </div>

        <label htmlFor="password">Password</label>
        <Field name="password" id="password" type="password" />
        <div style={styles.errorUsername}>
          <ErrorMessage name="password" />         
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

// import React, {setState} from 'react';
// import { Formik } from 'formik';

// const SignupForm = () => {

//   return(
//     <div style={styles.formContainer}>

//       <Formik 
//         initialValues={{ username: '', email: '', password: ''}}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {(formikProps) => (
//           <div>
//             <input
//               type="text"
//               placeholder="username"
//               onChange={formikProps.handleChange('username')}
//               value={formikProps.values.username}
//             />

//             <input
//               type="text"
//               placeholder="email"
//               onChange={formikProps.handleChange('email')}
//               value={formikProps.values.email}
//             />

//             <input
//               type="password"
//               placeholder="password"
//               onChange={formikProps.handleChange('password')}
//               value={formikProps.values.password}
//             />

//             <button onClick={formikProps.handleSubmit}>Submit</button>
//           </div>
//         )}
//       </Formik>
//     </div>
//   )
// }

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

  errorUsername: {
    // border: "1px solid red",
    color: "red"
  }
}

export default SignupForm;