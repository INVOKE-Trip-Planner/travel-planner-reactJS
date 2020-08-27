import React from 'react';
import { Formik, Field, useField, Form, ErrorMessage, } from 'formik';
import * as Yup from 'yup';

import { Button } from "reactstrap";

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  
  // And now we can use these
  const SearchForm = () => {
    return (
      <>
        <h4>Explore what's out there</h4>
        <Formik
          initialValues={{
            destination: '',
          }}
          validationSchema={Yup.object({
            destination: Yup.string()
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <MyTextInput
              label="Destination"
              name="destination"
              type="text"
              placeholder="Type a destination here"
            />
  
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </>
    );
  };

  export default SearchForm;