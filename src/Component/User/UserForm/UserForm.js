import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./styles.css";
import "./styles-custom.css";
// import PdfUpload from "./PdfUpload";

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
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
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nameExp = /^[aA-zZ\s]+$/;
// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledSelect {...field} {...props} />
            {meta.touched && meta.error ? (
                <StyledErrorMessage>{meta.error}</StyledErrorMessage>
            ) : null}
        </>
    );
};

// And now we can use these
const UserForm = () => {
    return (
        <>
            <h1>User Form!</h1>
            <Formik
                initialValues={{
                    customerName: "",
                    lastName: "",
                    email: "",
                    country: ""
                }}
                validationSchema={Yup.object({
                    customerName: Yup.string()
                        // .max(15, "Must be 15 characters or less")
                        .required("Required")
                        .matches(nameExp, "Only alphabets are allowed for this field "),
                    phoneNo: Yup.string()
                        .required("Input needed!")
                        .matches(phoneRegExp, "Enter a valid Mobile No"),
                    email: Yup.string()
                        .email("Invalid email address`")
                        .required("Required"),
                    country: Yup.string()
                        // specify the set of valid values for job type
                        // @see http://bit.ly/yup-mixed-oneOf
                        .oneOf(
                            ["ind", "usa", "sou", "new", "aus"],

                        )
                        .required("Required"),
                    additional: Yup.string()
                        .matches(
                            "/^[aA-zZ\s]+$/",
                            "Must Contain alphabet Number and one special case Character"
                        )
                        .required("Required"),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    await new Promise(r => setTimeout(r, 500));
                    setSubmitting(false);
                }}
            >
                <Form>
                    <MyTextInput
                        label="Customer Name"
                        name="customerName"
                        type="text"
                    // placeholder=""
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                    // placeholder="jane@formik.com"
                    />
                    <MyTextInput
                        label="Phone No."
                        name="phoneNo"
                        type="number"
                    // placeholder="9"
                    />
                    <MySelect label="Country" name="country">
                        <option value="ind">India</option>
                        <option value="usa">USA</option>
                        <option value="aus">Australia</option>
                        <option value="new">New Zealand</option>
                        <option value="sou">South Africa</option>
                    </MySelect>
                    <MyTextInput
                        label="Additional Info"
                        name="additional"
                        type="text"
                    // placeholder=""
                    />
{/* <PdfUpload/> */}
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};
export default UserForm;

