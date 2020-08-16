import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div style={{display: "flex", flexDirection: "column"}}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      </div>
    </>
  );
};

// And now we can use these
const AddTripForm = () => {
  return (
    <>
      <h1>Add Trip Details below</h1>
      <Formik
        initialValues={{
          tripName: '',
          tripOrigin: '',
          startDate: '',
          endDate: '',
          tripCost: '',
          groupType: '',
          tripType: '',
        }}
        validationSchema={Yup.object({
          tripName: Yup.string()
            .required('Required'),
          tripOrigin: Yup.string()
            .required('Required'),
          startDate: Yup.date()
            .min(new Date(), "Date cannot be in the past")
            .required('Required'),
          endDate: Yup.date()
            .required('Required')
            .min(Yup.ref('startDate'), 'Must be after start date'),
          tripCost: Yup.number()
            .positive('Must be a positive integer')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Trip Name"
            name="tripName"
            type="text"
            placeholder="Enter trip name here"
          />
          <MyTextInput
            label="Origin"
            name="tripOrigin"
            type="text"
            placeholder="Enter origin here"
          />
          <MyTextInput
            label="Start Date"
            name="startDate"
            type="date"
            placeholder="Enter start date here"
          />
          <MyTextInput
            label="End Date"
            name="endDate"
            type="date"
            placeholder="Enter end date here"
          />
          <MyTextInput
            label="Trip Cost"
            name="tripCost"
            type="text"
            placeholder="Enter trip cost here"
          />
          <MyTextInput
            label="Group Type"
            name="groupType"
            type="text"
            placeholder="Enter group type here"
          />
          <MyTextInput
            label="Trip Type"
            name="tripType"
            type="text"
            placeholder="Enter trip type here"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddTripForm;