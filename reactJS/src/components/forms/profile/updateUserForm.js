import React, { useEffect } from 'react';
import { Formik, Field, useField, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import QRCode from "react-qr-code";

import { Button } from "reactstrap";

// Redux
import { connect } from "react-redux";
import Actions from "../../../actions";

function usePrevious(value) {
  const ref = React.useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const UpdateUserForm = (props) => {

  // console.log(props);
  const prevGetUpdateUserData = usePrevious(props.getUpdateUserData)

  const { id, name, username, email, phone, gender, birth_date, avatar } = props.getUpdateUserData.data

  const postProcessValue = (values) => {
    const fields = ['username', 'email', 'phone', 'avatar']
    
    fields.forEach(field => {
        if (values[field] == props.getUpdateUserData.data[field]) {
            delete values[field];
        }
    })

    return values;
  }

  useEffect(() => {
    if (prevGetUpdateUserData 
      && prevGetUpdateUserData.isLoading 
      && !props.getUpdateUserData.isLoading) {
        if (!props.getUpdateUserData.error) {
          alert('Your profile has been successfully updated.')
        }
    }
  }, [props.getUpdateUserData])

  return (
    <Formik
      initialValues={{ 
        username: username || '', 
        name: name || '', 
        email: email || '', 
        phone: phone || '',
        password: '', 
        password_confirmation: '',
        gender: gender || '',
        birth_date: birth_date || '',
        avatar: avatar || '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required')
          .max(255, 'Must be 255 characters or less'),
        username: Yup.string()
          .required('Required')
          .max(25, 'Must be 25 characters or less'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more'),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password does not match above'),
      })}

      onSubmit={(values, { setSubmitting }) => {
        values = postProcessValue(values);
        // console.log(values);
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
        props.onUpdateUser(values);
      }}
    >
      {({ values, isSubmitting, ...formikProps }) => (
        <Form 
          style={{
            // margin: 'auto'
            // border: '1px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <QRCode value={
              `{
                "id": ${id},
                "name": "${name}",
                "avatar": "${avatar}"
              }`
            } 
          />

          <MyPhotoInput 
            name="avatar"
            {...formikProps}
          />

          <MyTextInput
            label="name"
            name="name"
            // type="text"
            // placeholder="Enter your name here"
          />

          <MyTextInput
            name="username"
          />

          <MyTextInput
            label="email address"
            name="email"
          />

          <MyTextInput
            label="phone"
            name="phone"
          />

          <MyTextInput
            label="password"
            name="password"
            type="password"
            // placeholder="Enter your password here"
          />

          <MyTextInput
            label="confirm password"
            name="password_confirmation"
            type="password"
            // placeholder="Enter your confirm password here"
          />

          <MyTextInput
            label="birth date"
            name="birth_date"
            type="date"
          />

          <MySelectInput
            name="gender"
          >
            <option value=''>Select a gender</option>
            <option value='MALE'>Male</option>
            <option value='FEMALE'>Female</option>
            <option value='OTHER'>Other</option>
          </MySelectInput>

          <div style={styles.buttonContainer}>
            <Button 
              color="primary" 
              type="submit" 
              size="lg"
            >
                Save
            </Button>
            {/* <button type="submit">Register</button> */}
          </div>
        </Form>
      )}
    </Formik>
  );
};

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <div style={styles.inputContainer}>
      <label 
        style={{ 
            textTransform: 'capitalize', 
        }}
        htmlFor={props.id || props.name}
      >
        { label || props.name }:
      </label>

      <div style={styles.inputStyle}>
        <input 
          className="text-input"
          placeholder={ props.placeholder || `Enter ${ label || props.name } here.` }
          {...field} 
          {...props} 
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

const MyPhotoInput = ({ label, containerStyle, ...props }) => {
  const [{value, onChange, ...field}, meta] = useField(props);

  const BANNER_PREFIX = 'http://localhost:8000/storage/avatars/';
  const [photo, setPhoto] = React.useState(meta.initialValue ? BANNER_PREFIX + meta.initialValue : null);
  const [photoName, setPhotoName] = React.useState('');

  // console.log(photo);

  const placeholder = 'http://localhost:8000/storage/avatars/placeholder.png';

  const loadPhoto = (e) => {
      // let imgHolder = document.getElementById('image-holder');
      // imgHolder.src = URL.createObjectURL(e.target.files[0]);
      // imgHolder.onload = () => {
      //     URL.revokeObjectURL(imgHolder.src)
      // }
      // this.setState({ avatar: e.target.files[0] })
      setPhoto(URL.createObjectURL(e.target.files[0]));
      props.setFieldValue(props.name, e.currentTarget.files[0]);
      setPhotoName(e.target.value)
  }

  return (
    <>
        {/* {photo &&  */}
        <div 
            className="profile-header-container"
        >
            <div 
                className="profile-header-img rounded-circle" 
                style={{ 
                    width: 200, 
                    height: 200, 
                    overflow: 'hidden', 
                    position: 'relative', 
                    margin: 'auto', 
                }} >
                <img 
                    id='image-holder' 
                    src={ photo || placeholder } 
                    style={{ 
                        width: 200, 
                        height: 200, 
                        objectFit: 'cover', 
                        objectPosition: 'center',
                    }} 
                    alt='customize your banner' 
                />
                {/* <div type='submit' onclick={ this.showFileUpload } id='uploadBtn'
                    style={{ width: '100%', zIndex: 2, background: 'black', color: 'white', position: 'absolute', bottom: 0, textAlign: 'center', padding: '0.5em', fontWeight: 'bold', }} >Upload</div> */}
            </div>
        </div> 
      {/* } */}
      <div 
        className={ `form-group` }
        style={ styles.inputContainer }
        // style={{
        //     display: "flex", 
        //     flexDirection: "column",
        //     ...containerStyle,
        // }}
      >
        <label 
            htmlFor={ props.id || props.name } 
            style={{ 
                textTransform: 'capitalize', 
            }}
        > 
            { label || props.name }: 
        </label>

        <div style={ styles.inputStyle }>
          <input 
              className="text-input" 
              type="file"
              // placeholder={ placeholder || `Enter ${ label || props.name } here.` }
              onChange={ loadPhoto }
              {...field} 
              {...props} 
              style={{
                outline: "none",
                width: "100%",
                height: 50,
                borderRadius: 5,
                padding: 10,
              }}
          />
          { meta.touched && meta.error ? 
          (
              <div 
                className="error" 
                style={styles.errorContainer}
                  // style={{
                  //     color: 'red',
                  // }}
              >
                  { meta.error } 
              </div>
          ) : 
              null 
          }
        </div>
      </div>
    </>
  );
};

export const MySelectInput = ({ label, placeholder, containerStyle, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div 
      className={ `form-group` }
      style={styles.inputContainer}
      // style={{
      //     display: "flex", 
      //     flexDirection: "column",
      //     ...containerStyle,
      // }}
    >
      <label 
          htmlFor={ props.id || props.name } 
          style={{ 
              textTransform: 'capitalize', 
          }}
      > 
          { label || props.name }: 
      </label>

      <div style={styles.inputStyle}>
        <select 
            className="text-input" 
            style={{
              outline: "none",
              width: "100%",
              height: 50,
              borderRadius: 5,
              padding: 10,
            }}
            // placeholder={ placeholder || `Enter ${ label || props.name } here.` }
            {...field} 
            {...props} 
        />
        { meta.touched && meta.error ? 
        (
            <div 
                style={styles.errorContainer}
                // style={{
                //     color: 'red',
                // }}
            >
                { meta.error } 
            </div>
        ) : 
            null 
        }
      </div>
    </div>
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
  getUpdateUserData: Actions.getUpdateUserData(store),
})

const mapDispatchToProps = {
  onUpdateUser: Actions.updateUser,
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(UpdateUserForm);