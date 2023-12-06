"use client";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import CustomInput from "../Input/input";
import { Contact_Us_FormDetails } from "@/api/Api";
import { Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import DatePicker from "../DatePicker/DatePicker";
import Form from "../Form/Form";
import TermsConditionBtn from "../TermsConditionBtn";

// const { setFieldValue } = formikz
const time = {
  "12:00": "12:00AM",
  "01:00": "1:00 AM",
  "02:00": "2:00 AM",
  "03:00": "3:00 AM",
  "04:00": "4:00 AM",
  "05:00": "5:00 AM",
  "06:00": "6:00 AM",
  "07:00": "7:00 AM",
  "08:00": "8:00 AM",
  "09:00": "9:00 AM",
  "10:00": "10:00 AM",
  "11:00": "11:00 AM",
  "12:00": "12:00 PM",
  "13:00": "1:00 PM",
  "14:00": "2:00 PM",
  "15:00": "3:00 PM",
  "16:00": "4:00 PM",
  "17:00": "5:00 PM",
  "18:00": "6:00 PM",
  "19:00": "7:00 PM",
  "20:00": "8:00 PM",
  "21:00": "9:00 PM",
  "22:00": "10:00 PM",
  "23:00": "11:00 PM",
};

const ContactUsForm = ({ options = [] }) => {
  const [RecaptchToken, setRecaptchaToken] = useState();
  // const saveContactDetails = async (contactDetails, resetForm) => {
  //   contactDetails.phonenumber = phone;
  //   if (phone.length < 12) {
  //     return setPhoneError("Enter 10 digit");
  //   }

  //   const res = await dispatch(saveContact(contactDetails));
  //   if (res?.payload?.Status === 201) {
  //     toast.success("Contact Saved");
  //     resetForm();
  //   } else {
  //     toast.error("Something Went Wrong");
  //   }
  // };

  const [isChecked, setIsChecked] = useState(false);
  const checkedPolicy = () => {
    setIsChecked(!isChecked);
  };
  const handleContactForm = async (values, resetForm) => {
    try {
      const res = await Contact_Us_FormDetails({
        ...values,
        recaptcha: values.recaptcha,
      });
      if (res.status == 200) {
        toast.success("Contact form submitted successfully");
        // resetForm();
        setIsChecked(false);
        window?.grecaptcha?.reset();
        resetForm("");
      } else {
        toast.info("Failed to submit contact form data");
      }
    } catch (error) {
      toast.error("Error submitting contact form data");
    }
  };

  return (
    <>
      <div>
        <Form
          handleSubmit={handleContactForm}
          initialValues={{
            FirstName: "",
            LastName: "",
            EmailId: "",
            MobilewithCountryCode: "",
            Services: "none",
            call_date: "",
            timezone: "none",
            call_time: "none",
            CompanyName: "",
            info: "",
            recaptcha: null,
          }}
          validationSchema={schema}
        >
          {(formik) => {
            const {
              values,
              errors,
              handleChange,
              setFieldValue,
              handleBlur,
              resetForm,
              touched,
            } = formik;

            return (
              <Grid container spacing={2} mt={"2rem"}>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                  <CustomInput
                    label="First Name "
                    name="FirstName"
                    onBlur={handleBlur}
                    value={values?.FirstName}
                    handleChange={handleChange}
                    error={errors.FirstName}
                    touched={touched.FirstName}
                    helperText={
                      errors.FirstName && touched.FirstName
                        ? errors.FirstName
                        : ""
                    }
                    placeholder="First Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                  <CustomInput
                    label="Last Name"
                    name="LastName"
                    onBlur={handleBlur}
                    value={values?.LastName}
                    handleChange={handleChange}
                    error={errors.LastName}
                    touched={touched.LastName}
                    helperText={
                      errors.LastName && touched.LastName ? errors.LastName : ""
                    }
                    placeholder="Last Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                  <CustomInput
                    label="Email Id "
                    name="EmailId"
                    onBlur={handleBlur}
                    value={values?.EmailId}
                    handleChange={handleChange}
                    error={errors.EmailId}
                    touched={touched.EmailId}
                    helperText={
                      errors.EmailId && touched.EmailId ? errors.EmailId : ""
                    }
                    placeholder="Email Id"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                  <InputLabel
                    htmlFor="MobilewithCountryCode"
                    sx={{
                      color: "#161616",
                      marginBottom: "4px",
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: 400, // Font weight 400 is normal
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    Phone No{" "}
                  </InputLabel>
                  <PhoneInput
                    country={"+91"}
                    name="MobilewithCountryCode"
                    value={values?.MobilewithCountryCode}
                    onChange={(value) => {
                      setFieldValue("MobilewithCountryCode", value);
                    }}
                    onBlur={handleBlur}
                    sx={{
                      height: "55px",
                      width: "100%",
                      paddingTop: "10px", // Set width explicitly to 100%
                      boxSizing: "border-box",
                    }}
                    error={
                      errors.MobilewithCountryCode &&
                      touched.MobilewithCountryCode
                    }
                  />
                </Grid>

                <Grid item xs={12} lg={6} sm={6}>
                  <CustomInput
                    label="Company/Organization "
                    name="CompanyName"
                    onBlur={handleBlur}
                    value={values?.CompanyName}
                    handleChange={handleChange}
                    error={errors.CompanyName}
                    touched={touched.CompanyName}
                    helperText={
                      errors.CompanyName && touched.CompanyName
                        ? errors.CompanyName
                        : ""
                    }
                    placeholder="Company/Organization"
                  />
                </Grid>

                <Grid item xs={12} lg={6} sm={6}>
                  <InputLabel
                    htmlFor="Services"
                    sx={{
                      color: "#161616",
                      marginBottom: "4px",
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: 400, // Font weight 400 is normal
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    Services looking for
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={values?.Services}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      width: "100%",
                      // color: "green",
                      paddingTop: "5px",
                      ".MuiSelect-select": {
                        color: "#808080",
                      },
                      ".MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #B3B3B3",
                      },
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          border: "1px solid #B3B3B3",
                        },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          border: "1px solid #808080",
                        },
                    }}
                    name="Services"
                    error={errors.Services && touched.Services}
                    helperText={
                      errors.Services && touched.Services ? errors.Services : ""
                    }
                  >
                    <MenuItem value="none">
                      <em
                        style={{
                          color: "#8080805e",
                          fontStyle: "normal",
                          fontWeight: "normal",
                        }}
                      >
                        Service looking for
                      </em>
                    </MenuItem>
                    {options.map((items) => (
                      <MenuItem value={items?.label}>{items?.label}</MenuItem>
                    ))}
                  </Select>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <InputLabel
                    htmlFor="name"
                    sx={{
                      color: "#161616",
                      marginBottom: "8px",
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: 400, // Font weight 400 is normal
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    Preferred date and time for a call back
                  </InputLabel>
                  <DatePicker
                    onChange={(value) => setFieldValue("call_date", value)}
                    value={values?.call_date || null}
                    name="call_date"
                    showTimeInput={false}
                    label="Select call date"
                    error={errors.call_date && touched.call_date}
                    sx={{
                      ".MuiInputLabel-root.MuiInputLabel-formControl": {
                        color: "#8080805e",
                      },
                    }}
                    helperText={
                      errors.call_date && touched.call_date
                        ? errors.call_date
                        : ""
                    }
                    cla
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  mt={{ xs: 0, sm: 3, md: 3.6, lg: 3.6 }}
                >
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={values?.timezone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      width: "100%",
                      boxShadow: "none",
                      ".MuiSelect-select": {
                        color: "#808080",
                      },
                      ".MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #B3B3B3",
                      },
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          border: "1px solid #161616",
                        },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          border: "1px solid #161616",
                        },
                    }}
                    name="timezone"
                    error={errors.timezone && touched.timezone}
                    helperText={
                      errors.timezone && touched.timezone ? errors.timezone : ""
                    }
                  >
                    <MenuItem value={"none"}>
                      <em style={{ color: "#8080805e", fontStyle: "normal" }}>
                        Time Zone
                      </em>
                    </MenuItem>
                    <MenuItem value={"In"}>India</MenuItem>
                    <MenuItem value={"Us"}>United State</MenuItem>
                  </Select>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  mt={{ md: 3.6, lg: 3.6 }}
                >
                  <Select
                    value={values?.call_time}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{
                      "aria-label": "Without label",
                      sx: { color: "#FF0000" },
                    }}
                    sx={{
                      width: "100%",
                      boxShadow: "none",
                      ".MuiSelect-select": {
                        color: "#808080",
                      },
                      ".MuiOutlinedInput-notchedOutline": {
                        border: "1px solid  #B3B3B3",
                      },
                      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          border: "1px solid #161616",
                        },
                      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          border: "1px solid #161616",
                        },
                    }}
                    name="call_time"
                    error={errors.call_time && touched.call_time}
                    helperText={
                      errors.call_time && touched.call_time
                        ? errors.call_time
                        : ""
                    }
                  >
                    <MenuItem disabled value={"none"}>
                      <em style={{ color: "#8080805e", fontStyle: "normal" }}>
                        {" "}
                        Select Time
                      </em>
                    </MenuItem>
                    {Object.entries(time).map(([timeValue, label]) => (
                      <MenuItem key={timeValue} value={timeValue}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>

                <Grid item xs={12} md={12} lg={12} mt={{ xs: 0 }}>
                  <InputLabel
                    htmlFor="Informations"
                    sx={{
                      color: "#161616",
                      marginBottom: "8px",
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: 400, // Font weight 400 is normal
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    Additional information that will help us connect better
                  </InputLabel>
                  <TextField
                    placeholder="Type here..."
                    name="info"
                    onBlur={handleBlur}
                    multiline
                    rows={3}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#B3B3B3",
                        },
                      },
                    }}
                    value={values?.info}
                    onChange={handleChange}
                    error={errors.info && touched.info}
                    helperText={errors.info && touched.info ? errors.info : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TermsConditionBtn
                    checkedPolicy={checkedPolicy}
                    isChecked={isChecked}
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <ReCAPTCHA
                    style={{
                      transform: " scale(0.77)",
                      transformOrigin: "0 0",
                    }}
                    name="recaptcha"
                    isChecked={isChecked}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={(value) => {
                      setFieldValue("recaptcha", value);
                    }}
                    size="normal"
                  />
                </Grid>

                <Grid item xs={12}>
                  <button
                    className={`w-[163px] text-[#FFFFFF] h-[48px] bg-[#EF4136] rounded-[4px] font-semibold text-[16px] ${
                      isChecked ? "bg-[#EF4136]" : "bg-[grey]"
                    }`}
                    type="submit"
                    disabled={!isChecked && values?.recaptcha}
                  >
                    Submit
                  </button>
                </Grid>
              </Grid>
            );
          }}
        </Form>
      </div>
    </>
  );
};

export default ContactUsForm;

const schema = Yup.object().shape({
  FirstName: Yup.string().trim().required("First Name is required"),
  LastName: Yup.string().trim().required("Last Name is required"),
  EmailId: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),

  MobilewithCountryCode: Yup.string()
    .typeError("That doesn't look like a phone number")
    .required(),
  Services: Yup.string()
    .required("Service is required")
    .notOneOf(["none"], "Please Select the value"),
  // time: Yup.string()
  //   .required("Time is required")
  //   .notOneOf(["none"], "Please Select the value"),
  call_date: Yup.date()
    .required("Date is required")
    .typeError("Date should be a selected"),
  call_time: Yup.string()
    .required("Call time is required")
    .notOneOf(["none"], "Please Select the value"),
  CompanyName: Yup.string().trim().required("Company name is required"),
  info: Yup.string().trim().required("Information is required"),
});
