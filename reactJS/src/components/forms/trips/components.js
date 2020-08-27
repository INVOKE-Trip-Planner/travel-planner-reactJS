import React from 'react';
// import styled from '@emotion/styled';
import { useField } from 'formik';
import * as api from "../../../api";

const AVATAR_PREFIX = "http://localhost:8000/storage/avatars/"

export const MyTextInput = ({ label, placeholder, containerStyle, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <div 
        className={ `form-group` }
        style={{
            display: "flex", 
            flexDirection: "column",
            ...containerStyle,
        }}
      >
        <label 
            htmlFor={ props.id || props.name } 
            style={{ 
                textTransform: 'capitalize', 
            }}
        > 
            { label || props.name } 
        </label>
        <input 
            className="text-input" 
            placeholder={ placeholder || `Enter ${ label || props.name } here.` }
            {...field} 
            {...props} 
        />
        { meta.touched && meta.error ? 
        (
            <div 
                style={{
                    color: 'red',
                }}
            >
                { meta.error } 
            </div>
        ) : 
            null 
        }
      </div>
    );
};

export const MySelectInput = ({ label, placeholder, containerStyle, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <div 
        className={ `form-group` }
        style={{
            display: "flex", 
            flexDirection: "column",
            ...containerStyle,
        }}
      >
        <label 
            htmlFor={ props.id || props.name } 
            style={{ 
                textTransform: 'capitalize', 
            }}
        > 
            { label || props.name } 
        </label>

        <select 
            className="select-input" 
            // placeholder={ placeholder || `Enter ${ label || props.name } here.` }
            {...field} 
            {...props} 
        />
        { meta.touched && meta.error ? 
        (
            <div 
                style={{
                    color: 'red',
                }}
            >
                { meta.error } 
            </div>
        ) : 
            null 
        }
      </div>
    );
};

export const MyPhotoInput = ({ label, containerStyle, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    // console.log(props);
    // const [field, meta] = useField(props);
    const [{value, onChange, ...field}, meta] = useField(props);
    // console.log(field);
    // console.log(value);
    // console.log(onChange);
    // console.log(meta);
    // console.log(initialValue);

    const BANNER_PREFIX = 'http://localhost:8000/storage/trip_banners/';
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
        props.setFieldValue("trip_banner", e.currentTarget.files[0]);
        setPhotoName(e.target.value)
    }

    return (
      <div 
        className={ `form-group` }
        style={{
            display: "flex", 
            flexDirection: "column",
            ...containerStyle,
        }}
      >
        {photo && <div 
            // className="profile-header-container"
        >
            <div 
                // className="profile-header-img rounded-circle" 
                style={{ 
                    width: '100%', 
                    height: 200, 
                    overflow: 'hidden', 
                    position: 'relative', 
                    margin: 'auto', 
                }} >
                <img 
                    id='image-holder' 
                    src={ photo || placeholder } 
                    style={{ 
                        width: '100%', 
                        height: 200, 
                        objectFit: 'cover', 
                        objectPosition: 'center',
                    }} 
                    alt='customize your banner' 
                />
                {/* <div type='submit' onclick={ this.showFileUpload } id='uploadBtn'
                    style={{ width: '100%', zIndex: 2, background: 'black', color: 'white', position: 'absolute', bottom: 0, textAlign: 'center', padding: '0.5em', fontWeight: 'bold', }} >Upload</div> */}
            </div>
        </div> }
        <label 
            htmlFor={ props.id || props.name } 
            style={{ 
                textTransform: 'capitalize', 
            }}
        > 
            { label || props.name } 
        </label>
        <input 
            className="text-input" 
            type="file"
            placeholder={ placeholder || `Enter ${ label || props.name } here.` }
            onChange={ loadPhoto }
            {...field} 
            {...props} 
        />
        { meta.touched && meta.error ? 
        (
            <div 
                style={{
                    color: 'red',
                }}
            >
                { meta.error } 
            </div>
        ) : 
            null 
        }
      </div>
    );
};

export const SearchArticlesInput = (props) => {

    const [query, setQuery] = React.useState('');

    const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const {response, error} = await api.searchArticles(query);
        if (error) {
            alert(error);
            props.handleSubmit(null);
        } else {
            props.handleSubmit(response.data);
        }
    }
    
    return (
        <form
            style={{
                width: '100%',
                maxWidth: 400,
                margin: '0 auto',
                // height: 150,
                borderRadius: '1em',
                background: 'white',
                border: '1px solid black',
                // position: 'absolute',
                padding: '0.5em',
                top: 50,
                // left: (props.itemCount + 1) * 50,
            }}
            onSubmit={handleSubmit}
        >
            <input 
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a destination."
                autoComplete="off"
                style={{
                    // borderRadius: '1em',
                    border: 'none',
                    width: '100%',
                    outline: 'none',
                    // margin: '0.5em'
                }}    
            />
        </form>
    )
}

export const SearchUserInput = (props) => {

    const [query, setQuery] = React.useState('');
    const [users, setUsers] = React.useState(null);

    const handleSubmit = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const {response, error} = await api.searchUser(query);
        if (error) {
            alert(error);
            setUsers(null);
        } else {
            setUsers(response.data);
        }
    }
    
    return (
        <form
            style={{
                width: 200,
                // height: 150,
                borderRadius: '1em',
                background: 'white',
                border: '1px solid black',
                position: 'absolute',
                padding: '0.5em',
                top: 50,
                // left: (props.itemCount + 1) * 50,
            }}
            onSubmit={handleSubmit}
        >
            <input 
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter username/email."
                autoComplete="off"
                style={{
                    // borderRadius: '1em',
                    border: 'none',
                    width: '100%',
                    outline: 'none',
                    // margin: '0.5em'
                }}    
            />

            {
                (users && users.length > 0) && (
                    <div
                        style={{
                            maxHeight: 138,
                            overflow: 'scroll',
                        }}
                    >
                        { users.map((user) => {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => props.handleClick(user)}
                                > 
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
                                    <div>
                                        {user.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        </form>
    )
}

export const DestinationInput = ({ index, handleRemove, ...props }) => {
    // const [field, meta] = useField(props);
    // console.log(props);

    return (
        <div 
            style={{
                position: 'relative',
                padding: '1em',
                margin: '1em',
                border: '1px solid',
                borderRadius: '1em',
            }}
        >
            <ion-icon 
                name="close-outline"
                onClick={() => handleRemove(index)}
                size="large"
                style={{
                    position: 'absolute',
                    right: '0.5em',
                    top: '0.4em',
                }}
            ></ion-icon>
            <MyTextInput 
                name={`destinations.${index}.location`}
                label="location"
                {...props}
                // value={ formikProps.values[`destinations.${index}.location`] }
                // onChange={ formikProps.handleChange(`destinations.${index}.location`) }
                // onBlur={ formikProps.handleBlur(`destinations.${index}.location`) }
            />
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                }}
            >
                <MyTextInput 
                    name={`destinations.${index}.start_date`}
                    label="start date"
                    type="date"
                    containerStyle={{
                        flex: 1,
                    }}
                    {...props}
                />
                <MyTextInput 
                    name={`destinations.${index}.end_date`}
                    label="end date"
                    type="date"
                    containerStyle={{
                        flex: 1,
                    }}
                    {...props}
                />
            </div>
        </div>
    )
}

const FieldWrapper = ({ containerStyle, hideLabel, children, label, formikProps, formikKey, ...props }) => (
    <div 
        className={ `form-group` }
        style={{
            display: "flex", 
            flexDirection: "column",
            ...containerStyle,
        }}
    >
    {!hideLabel && <label 
        htmlFor={ props.id || formikKey } 
        style={{ 
            textTransform: 'capitalize', 
        }}
    > 
        { label || formikKey } 
    </label> }

    { children }

    { formikProps.touched[formikKey] &&
        (
            <div 
                style={{
                    color: 'red',
                }}
            >
                { formikProps.errors[formikKey] } 
            </div>
        )
    }
  </div>
)

export const CustomTextInput = ({ containerStyle, hideLabel, label, formikProps, formikKey, placeholder, secureTextEntry, ...rest}) => {
    const inputStyles = {
        borderRadius: 5,
        borderColor: 'navy',
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 15,
        // paddingVertical: 5,
        marginVertical: 10,
    }

    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderColor = 'red';
    }

    // const [hidePassword, setHidePassword] = React.useState( secureTextEntry )
    // if (secureTextEntry) {
    //     setHidePassword(true);
    // }

    return (
        <FieldWrapper 
            containerStyle={ containerStyle }
            hideLabel={ hideLabel || false } 
            label={ label } 
            formikKey={ formikKey } 
            formikProps={ formikProps }
        >
            {/* {console.log({...rest})} */}
            <input 
                style={ inputStyles }
                value={ {...rest}.value || formikProps.values[formikKey] }
                placeholder={ placeholder || `Enter your ${ label || formikKey } here.` }
                onChangeText={ formikProps.handleChange(formikKey) }
                onBlur={ formikProps.handleBlur(formikKey) }
                // secureTextEntry={ secureTextEntry }
                // secureTextEntry={ hidePassword }
                className="text-input" 
                { ...rest }
            />

        </FieldWrapper>
    )
}