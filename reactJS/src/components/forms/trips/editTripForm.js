import React, { useEffect } from 'react';
import { Formik, Form, FieldArray, ErrorMessage } from 'formik';
import { MyTextInput, DestinationInput, MySelectInput, MyPhotoInput, SearchUserInput } from './components';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Actions from "actions";
import { Button } from 'reactstrap';

const AVATAR_PREFIX = "http://localhost:8000/storage/avatars/"

const EditTripForm = props => {

    // console.log('editTripForm', props.tripData);
    const { id, trip_name, origin, start_date, end_date, group_type, trip_type, trip_banner, users } = props.tripData

    const [ showSearchUser, setShowSearchUser ] = React.useState(false);

    const postProcessValue = (values) => {
        const fields = ['trip_name', 'trip_banner']
        
        fields.forEach(field => {
            if (values[field] == props.tripData[field]) {
                delete values[field];
            }
        })

        // values.users = values.users.map(user => user.id)

        return values;
    }

    return (
      <>
        <Formik
          initialValues={{
            id: id || '',
            trip_name: trip_name || '',
            origin: origin || '',
            // start_date: start_date || '',
            // end_date: end_date || '',
            group_type: group_type || '',
            trip_type: trip_type || '',
            trip_banner: trip_banner || '',
            users: users || [],
            // destinations: [
            //   {
            //     location: '',
            //     start_date: '',
            //     end_date: '',
            //   }
            // ], 
          }}
          validationSchema={Yup.object({
            trip_name: Yup.string(),
            //   .required('Required'),
            origin: Yup.string(),
            //   .required('Required'),
            // start_date: Yup.date()
            //   .required('Required')
              // .min(new Date(), "Date cannot be in the past"),
            // end_date: Yup.date()
            //   .required('Required')
              // .min(Yup.ref('start_date'), 'Must be after start date'),
            users: Yup
              .array()
              // .of(Yup.number())
            //   .required(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // values = postProcessValue(values);
              // alert(JSON.stringify(values, null, 2));
              props.onUpdateTrip( postProcessValue(values));
              setSubmitting(false);
            }, 400);
          }}
        >
          {/* {(formikProps) => ( */}
          {({ values, isSubmitting, ...formikProps }) => (
              <Form>

                <MyPhotoInput 
                    label="trip banner"
                    name="trip_banner"
                    { ...formikProps }
                    // onChange={(e) => formikProps.setFieldValue('trip_banner', e.currentTarget.files[0])}
                />

                <FieldArray name="users">
                  {({ insert, remove, push }) => {

                    const handleClick = (selectedUser) => {
                      const alreadyIn = values.users.some((user) => user.id === selectedUser.id)

                      if (alreadyIn) {
                        // alert(values.users.findIndex(user => user.id === selectedUser.id))
                        remove(values.users.findIndex(user => user.id === selectedUser.id))
                      } else {
                        push(selectedUser)
                      }

                      setShowSearchUser(false);
                      // alert(JSON.stringify(values.users));
                    }

                    return (
                      <div
                        // style={{
                        //   display: 'flex',
                        //   flexDirection: 'column',
                        //   alignItems: 'center',
                        // }}
                      >
                        <label 
                            htmlFor="users" 
                            style={{ 
                                textTransform: 'capitalize', 
                            }}
                        > 
                            users 
                        </label>
                        <div
                          style={{
                            width: '100%',
                            position: 'relative',
                          }}
                        >
                          { values.users.length > 0 &&
                          values.users.map((user, index) => ( 
                            <img
                              src={`${AVATAR_PREFIX}${user.avatar}`}
                              style={{
                                width: 40,
                                height: 40,
                                borderRadius: 40,
                                background: 'lightgrey',
                                display: 'inline-block',
                                verticalAlign: 'inherit',
                              }}
                            >
                            </img>
                          )) }
                          {typeof formikProps.errors.users === 'string' && (<div
                            style={{
                              color: 'red',
                            }}
                          >
                            <ErrorMessage name="users" />
                          </div>)}
                          <ion-icon 
                              name="add-outline"
                              onClick={() => setShowSearchUser(!showSearchUser)}
                              // size="large"
                              style={{
                                  // position: 'absolute',
                                  // right: '0.5em',
                                  // top: '0.4em',
                                  background: 'lightgrey',
                                  width: 40,
                                  height: 40,
                                  borderRadius: 40,
                                  cursor: 'pointer',
                                  display: 'inline-block',
                              }}
                          ></ion-icon>
                          { showSearchUser && 
                            <SearchUserInput 
                              itemCount={values.users.length}
                              handleClick={handleClick}
                            />
                          }
                        </div>
                      </div>
                  )}}
                </FieldArray>

                <MyTextInput
                  label="trip name"
                  name="trip_name"
                />
                
                <MyTextInput
                  label="origin"
                  name="origin"
                //   type="text"
                //   placeholder="Enter origin here"
                />
                {/* <MyTextInput
                  label="start date"
                  name="start_date"
                  type="date"
                //   placeholder="Enter start date here"
                />
                <MyTextInput
                  label="end date"
                  name="end_date"
                  type="date"
                //   placeholder="Enter end date here"
                /> */}
                <MySelectInput
                  label="group type"
                  name="group_type"
                >
                    <option value=''>Who are you traveling with?</option>
                    <option value='SOLO'>Wandering solo</option>
                    <option value='COUPLE'>Holidaying as a couple</option>
                    <option value='FAMILY'>Vacationing with family</option>
                    <option value='FRIENDS'>Traveling with friends</option>
                </MySelectInput>
                <MySelectInput
                  label="trip type"
                  name="trip_type"
                >
                    <option value=''>What's the purpose of the trip?</option>
                    <option value='WORK'>For work</option>
                    <option value='LEISURE'>For leisure</option>
                </MySelectInput>
                <div style={styles.buttonContainer}>
                    <Button 
                        type="submit"
                        color="primary"
                        disabled={isSubmitting}
                    >
                        Save
                    </Button>
                </div>
              </Form>
          )}
        </Formik>
      </>
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

export default EditTripForm;