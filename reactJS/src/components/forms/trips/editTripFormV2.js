import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'reactstrap';
import { MyTextInput, CustomTextInput, SearchUserInput } from './components';

const AVATAR_PREFIX = "http://localhost:8000/storage/avatars/"

const EditTripFormV2 = props => {

    const { id, trip_name, origin, start_date, end_date, group_type, trip_type, trip_banner, users } = props.tripData

    const [ showSearchUser, setShowSearchUser ] = React.useState(false)

    const postProcessValue = (values) => {
        const fields = ['trip_name', 'trip_banner']
        
        fields.forEach(field => {
            if (values[field] == props.tripData[field]) {
                delete values[field];
            }
        })

        return values;
    }

    const formikProps = useFormik({
        initialValues: {
            id: id || '',
            trip_name: trip_name || '',
            origin: origin || '',
            start_date: start_date || '',
            end_date: end_date || '',
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
          },
        //   validationSchema: Yup.object({
        //     trip_name: Yup.string(),
        //     //   .required('Required'),
        //     origin: Yup.string(),
        //     //   .required('Required'),
        //     start_date: Yup.date()
        //     //   .required('Required')
        //       .min(new Date(), "Date cannot be in the past"),
        //     end_date: Yup.date()
        //     //   .required('Required')
        //       .min(Yup.ref('start_date'), 'Must be after start date'),
        //     users: Yup
        //       .array()
        //       .of(Yup.number())
        //     //   .required(),
        //   }),
          onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
            //   values = postProcessValue(values);
              alert(JSON.stringify(values, null, 2));
            //   props.onUpdateTrip(values);
            //   setSubmitting(false);
            }, 400);
          }
    })

    console.log(formikProps)

    return (
        <form
            onSubmit={formikProps.handleSubmit}
        >
            <CustomTextInput 
                formikKey="trip_name"
                label="trip name"
                formikProps = { formikProps }
            />

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
                <div>
                { users.length > 0 &&
                users.map((user, index) => ( 
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
                    {/* <ErrorMessage name="users" /> */}
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
                { showSearchUser && <SearchUserInput />}
                </div>
            </div>

            <div style={styles.buttonContainer}>
                <Button 
                    type="submit"
                    color="primary"
                    disabled={formikProps.isSubmitting}
                >
                    Save
                </Button>
            </div>
        </form>
    )
}

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

export default EditTripFormV2;