import React from 'react';
import { Formik, Field, useField, Form, ErrorMessage, } from 'formik';
import styled from '@emotion/styled';
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

 // Styled components ....
 const StyledSelect = styled.select`
   color: black;
   border: 1px solid black;
   padding: 10px;
   width: 400px;
   border-radius: 5px;
   outline: none;

 `;
 
 const StyledErrorMessage = styled.div`
   color: black;
 `;
 
 const StyledLabel = styled.label`
  color: black;
 `;

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div style={styles.inputContainer}>
        <div style={styles.inputStyle}>
          <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
          <StyledSelect {...field} {...props} />
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


const TransForm = (props) => {

  return (
    <Formik
      initialValues={{
        destinationId: props.destinationId,
        transMode:'',
        transOrigin:'',
        transDestination: '',
        transDepartureDate: '',
        transDepartureHour: '',
        transDepartureMin: '',
        transArrivalDate: '',
        transArrivalHour: '',
        transArrivalMin: '',
        transCost: '',
        transBookingID: '',
        transOperator: ''
      }}

      validationSchema={Yup.object({
        destinationId: Yup.number()
          // .max(255, 'Must be 255 characters or less')
          .required('Required'),
        transMode: Yup.string()
          .oneOf(
            ['FLIGHT', 'TRAIN', 'BUS', 'FERRY', 'OTHER'],
            'Invalid Transportation Mode'
          )
          .required('Required'),
        transOrigin: Yup.string()
          .required('Required'),
        transDestination: Yup.string()
          .required('Required'),
        transDepartureDate: Yup.date()
          .min(new Date(), "Date cannot be in the past"),
        transDepartureHour: Yup.number()
          .positive('Must be a positive integer')
          .min(0, 'Must be more than 0')
          .max(23, 'Must be less than 23'),
        transDepartureMin: Yup.number()
          .positive('Must be a positive integer')
          .min(0, 'Must be more than 0')
          .max(59, 'Must be less than 59'),
        transArrivalDate: Yup.date()
          .min(Yup.ref('transDepartureDate'), 'Must be after Departure date'),
        transArrivalHour: Yup.number()
          .positive('Must be a positive integer')
          .min(0, 'Must be more than 0')
          .max(23, 'Must be less than 23'),
        transArrivalMin: Yup.number()
          .positive('Must be a positive integer')
          .min(0, 'Must be more than 0')
          .max(59, 'Must be less than 59'),
        transCost: Yup.number()
            .min(0, 'Must be more than 0'),
        transBookingID: Yup.string()
            .max(20, 'Must be 20 characters or less'),
        transOperator: Yup.string()
            .max(100, 'Must be 100 characters or less')
      })}

      onSubmit={(values, { setSubmitting }) => {
        // console.log(values);

        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
        props.onCreateTrans(values);
      }}
    >
      <div style={FORMCONTAINER}>

      <Form>

        <ReadOnlyTextInput
          label="Destination ID"
          name="destinationId"
          type="text"
          placeholder="Enter id here"
        />

        <MySelect label="Transport Mode" name="transMode">
          <option value="">Select a transportation mode</option>
          <option value="FLIGHT">FLIGHT</option>
          <option value="TRAIN">TRAIN</option>
          <option value="BUS">BUS</option>
          <option value="FERRY">FERRY</option>
          <option value="OTHER">OTHER</option>
        </MySelect>

        <MyTextInput
          label="Origin"
          name="transOrigin"
          type="text"
          placeholder="Enter your origin here"
        />

        <MyTextInput
          label="Destination"
          name="transDestination"
          type="text"
          placeholder="Enter your destination here"
        />

        <MyTextInput
          label="Departure Date"
          name="transDepartureDate"
          type="date"
          placeholder="Enter the departure date here"
        />

        
        <MyTextInput
          label="Departure Hour"
          name="transDepartureHour"
          type="number"
          placeholder="Enter the departure hour here"
        />
        <MyTextInput
          label="Departure Min"
          name="transDepartureMin"
          type="number"
          placeholder="Enter the departure minute here"
        />

        <MyTextInput
          label="Arrival Date"
          name="transArrivalDate"
          type="date"
          placeholder="Enter the arrival date here"
        />

        <MyTextInput
          label="Arrival Hour"
          name="transArrivalHour"
          type="number"
          placeholder="Enter the arrival hour here"
        />

        <MyTextInput
          label="Arrival Min"
          name="transArrivalMin"
          type="number"
          placeholder="Enter the arrival minute here"
        />

        <MyCostInput
          label="Cost"
          name="transCost"
          type="number"
          placeholder="Enter the transport cost here"
        />

        <MyTextInput
          label="Booking ID"
          name="transBookingID"
          type="text"
          placeholder="Enter the booking id here"
        />

        <MyTextInput
          label="Operator"
          name="transOperator"
          type="text"
          placeholder="Enter the operator here"
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
  onCreateTrans: Actions.createTrans,
}

export default connect(mapStateToProps, mapDispatchToProps)(TransForm);