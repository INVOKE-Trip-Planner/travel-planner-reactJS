import React from 'react';
import { Formik, Field, useField, Form, ErrorMessage, FieldArray } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';

import { Button } from "reactstrap";

import ItinArrayForm from './itinArray.js'

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


const CreateItineraryForm = (props) => {

  return (
    <Formik
      initialValues={{
        destinationId: props.destinationId,
        day: '',
        body: [],
      }}

      validationSchema={Yup.object({
        destinationId: Yup.number()
          // .max(255, 'Must be 255 characters or less')
          .required('Required'),
        day: Yup.number()
          .min(0, 'Must be more than 0'),
        // body: 
        // transMode: Yup.string()
        //   .oneOf(
        //     ['FLIGHT', 'TRAIN', 'BUS', 'OTHER'],
        //     'Invalid Transportation Mode'
        //   )
        //   .required('Required'),
        // transOrigin: Yup.string()
        //   .required('Required'),
        // transDestination: Yup.string()
        //   .required('Required'),
        // transDepartureDate: Yup.date()
        //   .min(new Date(), "Date cannot be in the past"),
        // transDepartureHour: Yup.number()
        //   .positive('Must be a positive integer')
        //   .min(0, 'Must be more than 0')
        //   .max(23, 'Must be less than 23'),
        // transDepartureMin: Yup.number()
        //   .positive('Must be a positive integer')
        //   .min(0, 'Must be more than 0')
        //   .max(59, 'Must be less than 59'),
        // transArrivalDate: Yup.date()
        //   .min(Yup.ref('transDepartureDate'), 'Must be after Departure date'),
        // transArrivalHour: Yup.number()
        //   .positive('Must be a positive integer')
        //   .min(0, 'Must be more than 0')
        //   .max(23, 'Must be less than 23'),
        // transArrivalMin: Yup.number()
        //   .positive('Must be a positive integer')
        //   .min(0, 'Must be more than 0')
        //   .max(59, 'Must be less than 59'),
        // transCost: Yup.number()
        //     .min(0, 'Must be more than 0'),
        // transBookingID: Yup.string()
        //     .max(20, 'Must be 20 characters or less'),
        // transOperator: Yup.string()
        //     .max(100, 'Must be 100 characters or less')
      })}

      onSubmit={(values, { setSubmitting }) => {
        console.log(values);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
        props.onCreateTrans(values);
      }}
    >
      <Form >

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
          <option value="OTHER">OTHER</option>
        </MySelect>

        <ItinArrayForm />

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
  // getCreateAccData: Actions.getCreateAccData(store),
})

const mapDispatchToProps = {
  onCreateTrans: Actions.createTrans,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItineraryForm);