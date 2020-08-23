import React from "react";
// import ReactDOM from "react-dom";
import { Formik, useField, Field, Form, ErrorMessage, FieldArray } from "formik";

import { Button } from "reactstrap";

import * as Yup from 'yup';


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
  

const ItinArrayForm = (props) => (
  <div style={{display: "flex", flexDirection: "column",}}>
    {/* <h6>Edit schedule {console.log("itin data", props.itinScheduleData.map(itin => itin.title))}</h6> */}
    <Formik
      initialValues={
      // initialValues={props.itinScheduleData.map
        {
            itinId: props.itinId,
            day: props.itinDay,
            schedules: [
              props.itinScheduleData.map(itin => (
              {
                title: itin.title,
                description: itin.description,
                hour: itin.hour,
                minute: itin.minute,
                cost: itin.cost,
              }
              ))
            ]
        }
      }

      enableReinitialize={true}

        validationSchema={Yup.object({
            itinId: Yup.number()
              .max(255, 'Must be 255 characters or less'),
            //   .required('Required'),
            day: Yup.number()
              .min(0, 'Must be more than 0'),
            schedules: Yup.array()
                .of(
                    Yup.object().shape({
                        title: Yup.string().max(255, 'Characters must not be more than 255'),
                        description: Yup.string().max(255, 'Characters must not be more than 255'),
                        hour: Yup.number().min(0, 'Must be more than 0').max(23, 'Must be less than 23'),
                        minute: Yup.number().min(0, 'Must be more than 0').max(59, 'Must be less than 59'),
                        cost: Yup.number().positive('Must be more than 0'),
                    })
                )
            })}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => ( 
        <Form>

            <ReadOnlyTextInput
                label="Itinerary ID"
                name="itinId"
                type="text"
                placeholder="Enter id here"
            />

            <MyTextInput
                label="Itinerary Day"
                name="day"
                type="number"
                placeholder="Enter the day here"
            />      

          <FieldArray name="schedules">
            {({ insert, remove, push }) => (
              <div>
                {values.schedules.length > 0 &&
                  values.schedules.map((schedule, index) => (
                    <div className="row" key={index} style={styles.inputContainer}>

                    {/* -----------x BUTTON---------------- */}
                      <div className="col" style={{display:"flex", justifyContent: "flex-end"}}>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>

                        {/* ------------TITLE--------------- */}
                      <div className="col" style={styles.inputStyle}>
                        <label htmlFor={`schedule[${index}].title`}>Title</label>
                        <Field
                          name={`schedule[${index}].title`}
                          // name={console.log(schedule[index].title)}
                          placeholder="Enter title here"
                          type="text"
                        />
                        <div className="error" style={styles.errorContainer}>
                        <ErrorMessage
                          name={`schedules.${index}.title`}
                          component="div"
                          className="field-error"
                        />
                        </div>
                      </div>

                      {/* ------------DESC--------------- */}
                      <div className="col" style={styles.inputStyle}>
                        <label htmlFor={`schedules[${index}].desc`}>Description</label>
                        <Field
                          name={`schedule.description[${index}]`}
                          placeholder="Enter description"
                          type="text"
                        />
                        <div className="error" style={styles.errorContainer}>
                        <ErrorMessage
                          name={`schedules.${index}.desc`}
                          component="div"
                          className="field-error"
                        />
                        </div>
                      </div>

                      {/* ------------HOUR--------------- */}
                      <div className="col" style={styles.inputStyle}>
                        <label htmlFor={`schedules.${index}.hour`}>Hour</label>
                        <Field
                          name={`schedules.${index}.hour`}
                          placeholder="Enter hour here"
                          type="number"
                        />
                        <div className="error" style={styles.errorContainer}>
                        <ErrorMessage
                          name={`schedules.${index}.hour`}
                          component="div"
                          className="field-error"
                        />
                        </div>
                      </div>
                      {/* ------------MIN--------------- */}
                      <div className="col" style={styles.inputStyle}>
                      {/* <label htmlFor={`schedules.${index}.minute`}>Minute{console.log("values", values.schedules[0].map(schedule => schedule))}</label> */}
                        <label htmlFor={`schedules.${index}.minute`}>Minute{console.log("values", schedule)}</label>
                        <Field
                          name={`schedules.${index}.minute`}
                          placeholder="Enter minute here"
                          type="number"
                        />
                        <div className="error" style={styles.errorContainer}>
                        <ErrorMessage
                          name={`schedules.${index}.minute`}
                          component="div"
                          className="field-error"
                        />
                        </div>
                      </div>
                      {/* ------------COST--------------- */}
                      <div className="col" style={styles.inputStyle}>
                        <label htmlFor={`schedules.${index}.cost`}>Cost</label>
                        <Field
                          name={`schedules.${index}.cost`}
                          placeholder="Enter cost here"
                          type="number"
                        />
                        <div className="error" style={styles.errorContainer}>
                        <ErrorMessage
                          name={`schedules.${index}.cost`}
                          component="div"
                          className="field-error"
                        />
                        </div>
                      </div>

                    </div>
                  ))}

                  {/* -----------ADD ACTIVITY----------- */}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ title: "", description: "", hour: "", minute: "", cost: ""})}
                >
                  Add Activity
                </button>
              </div>
            )}
          </FieldArray>

          <div style={styles.buttonContainer}>
          <Button color="primary" type="submit" size="lg">Submit</Button>
          {/* <button type="submit">Register</button> */}
            </div>

          {/* <button type="submit">Invite</button> */}
        </Form>
      )}
    </Formik>
  </div>
);

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
      border: "1px solid green",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
    //   width: 600,
  
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

export default ItinArrayForm;