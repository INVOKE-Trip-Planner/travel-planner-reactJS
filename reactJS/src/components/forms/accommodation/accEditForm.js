import React from 'react';
import { Formik, Field, useField, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button } from "reactstrap";

import {REMOVESTRAP, FORMCONTAINER} from "common/styles/index.js";

// Redux
import { connect } from "react-redux";
import Actions from "actions";

const ReadOnlyTextInput = ({ label, ...props }) => {
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
            readOnly
          />
          {meta.touched && meta.error ? (
            <div className="error" style={styles.errorContainer}>{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

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

const MyCostInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);

  // console.log(...field);
  return (
    <>
      <div style={styles.inputContainer}>

      <div style={styles.inputStyle}>
        <label htmlFor={props.id || props.name}>{label}:</label>
        <input className="cost-input" step="0.01" {...field} {...props}
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


const AccEditForm = (props) => {

  return (
    <Formik
      initialValues={{
        accId: props.accId,
        accName: props.accName,
        accCheckInDate: props.accCheckInDate,
        accCheckInHour: props.accCheckInHour,
        accCheckInMin: props.accCheckInMin,
        accCheckOutDate: props.accCheckInDate,
        accCheckOutHour: props.accCheckOutHour,
        accCheckOutMin: props.accCheckOutMin,
        accCost: props.accCost,
        accBookingId: props.accBookingId,
      }}

      validationSchema={Yup.object({
        accId: Yup.number()
        // .max(255, 'Must be 255 characters or less')
        .required('Required'),
        accName: Yup.string()
          .max(100, 'Must be 100 characters or less')
          .required('Required'),
        accCheckInDate: Yup.date()
          .min(new Date(Date.now() - 8640000), "Date cannot be in the past"),
        accCheckInHour: Yup.number()
          .positive('Must be a positive integer')
          .min(0, 'Must be more than 0')
          .max(23, 'Must be less than 23'),
        accCheckInMin: Yup.number()
          .positive('Must be a positive integer')
          .min(0, 'Must be more than 0')
          .max(59, 'Must be less than 59'),
        accCheckOutDate: Yup.date()
          .min(Yup.ref('accCheckInDate'), 'Must be after Check In date'),
          // .min(Yup.ref('accCheckInDate').setDate(Yup.ref('accCheckInDate').getDate() - 1), 'Must be after Check In Date'),
        accCheckOutHour: Yup.number()
          .positive('Must be a positive integer')
          .min(0, 'Must be more than 0')
          .max(23, 'Must be less than 23'),
        accCheckOutMin: Yup.number()
          .positive('Must be a positive integer')
          .min(0, 'Must be more than 0')
          .max(59, 'Must be less than 59'),
        accCost: Yup.number()
            .positive('Must be a positive integer'),
        accBookingId: Yup.string()
            .max(20, 'Must be 20 characters or less')
      })}

      onSubmit={(values, { setSubmitting }) => {
        // console.log(values);

        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
        props.onEditAcc(values);
      }}
    >
      <div style={FORMCONTAINER}>
      <Form >

        <ReadOnlyTextInput
          label="Accommodation ID"
          name="accId"
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
          name="accCheckInDate"
          type="date"
          placeholder="Enter the check in date here"
        />

        
        <MyTextInput
          label="Check In Hour"
          name="accCheckInHour"
          type="number"
          placeholder="Enter the check in hour here"
        />
        <MyTextInput
          label="Check In Min"
          name="accCheckInMin"
          type="number"
          placeholder="Enter the check in minute here"
        />

        <MyTextInput
          label="Check Out Date"
          name="accCheckOutDate"
          type="date"
          placeholder="Enter the check out date here"
        />

        <MyTextInput
          label="Check Out Hour"
          name="accCheckOutHour"
          type="number"
          placeholder="Enter the check out hour here"
        />

        <MyTextInput
          label="Check Out Min"
          name="accCheckOutMin"
          type="number"
          placeholder="Enter the check out minute here"
        />

        <MyCostInput
          label="Cost"
          name="accCost"
          type="number"
          placeholder="Enter the cost here"
        />

        <MyTextInput
          label="Booking ID"
          name="accBookingId"
          type="text"
          placeholder="Enter the booking id here"
        />

        <div style={styles.buttonContainer}>
          <Button color="primary" type="submit" size="lg">Confirm</Button>
          {/* <button type="submit">Register</button> */}
        </div>
      </Form>
      </div>
    </Formik>
  );
};

const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
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
    width: "100%",

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
  // getCreateAccData: Actions.getCreateAccData(store),
})

const mapDispatchToProps = {
  onEditAcc: Actions.editAcc,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccEditForm);