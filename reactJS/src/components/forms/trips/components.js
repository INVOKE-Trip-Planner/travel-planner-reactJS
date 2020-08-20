import React from 'react';
// import styled from '@emotion/styled';
import { useField } from 'formik';

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

export const DestinationInput = ({ index, handleRemove, ...props }) => {
    // const [field, meta] = useField(props);
    console.log(props);

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