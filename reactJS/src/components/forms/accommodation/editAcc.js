import React from 'react';
import { Formik, Field, useField, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button } from "reactstrap";

// Redux
import { connect } from "react-redux";
import Actions from "actions";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div style={styles.inputContainer}>

      <div style={styles.inputStyle}>
        <label htmlFor={props.id || props.name}>{label}:</label>
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


const EditAccForm = (props) => {

  return (
    <Formik
      initialValues={{ accID: '', accName:'', accCheckIn: '', accCheckOut: '', accCost: '', accBookingID: ''}}

      validationSchema={Yup.object({
        accID: Yup.string()
          .max(255, 'Must be 255 characters or less')
          .required('Required'),
        accName: Yup.string()
          .max(100, 'Must be 100 characters or less')
          .required('Required'),
        accCheckIn: Yup.date()
            .min(new Date(), "Date cannot be in the past"),
        accCheckOut: Yup.date()
          .min(Yup.ref('accCheckIn'), 'Must be after Check In date'),
        accCost: Yup.number()
            .positive('Must be a positive integer'),
        accBookingID: Yup.string()
            .max(20, 'Must be 20 characters or less')
      })}

      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
        // props.onRegister(values);
      }}
    >
      <Form >

        <MyTextInput
          label="Accommodation ID"
          name="accID"
          type="text"
          placeholder="Enter id here"
        />

        <MyTextInput
          label="Accommodation Name"
          name="accName"
          type="text"
          placeholder="Enter your accommodation name here"
        />

        <MyTextInput
          label="Check In Date"
          name="accCheckIn"
          type="date"
          placeholder="Enter the check in date here"
        />

        <MyTextInput
          label="Check Out Date"
          name="accCheckOut"
          type="date"
          placeholder="Enter the check out date here"
        />

        <MyTextInput
          label="Cost"
          name="accCost"
          type="text"
          placeholder="Enter the cost here"
        />

        <MyTextInput
          label="Booking ID"
          name="accBookingID"
          type="text"
          placeholder="Enter the booking id here"
        />

        <div style={styles.buttonContainer}>
          <Button color="primary" type="submit" size="lg">Confirm</Button>
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
//   getRegisterData: Actions.getRegisterData(store),
})

const mapDispatchToProps = {
//   onRegister: Actions.register,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccForm);