import { GetState, Request_Sample_FormDetails ,GetCity} from "@/api/Api";
import ContactUsModal from "../Modal/RequestSample";
import React, { useEffect, useRef } from "react";
import CustomInput from "../Input/input";
import { Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import DatePicker from "../DatePicker/DatePicker";
import Form from "../Form/Form";
import { useState } from "react";
import TermsConditionBtn from "../TermsConditionBtn";

// const { setFieldValue } = formik;

const time = {
  "00:00": "00:00",
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

const RequestSample = ({ Options = [] }) => {
    const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [selected, setSelected] = useState('none');
  const [selectedCity,setSelectedCity]=useState("none")
  const [isChecked, setIsChecked] = useState(false);

  const handleContactForm = async (values, resetForm) => {
    const res = await Request_Sample_FormDetails(values);
    try {
      const res = await Request_Sample_FormDetails(values);
    
      if (res.status == 200) {
        toast.success("Form submitted successfully");
        setIsChecked(false);
        resetForm("");
      } else {
        toast.info("Failed to submit contact form data");
      }
    } catch (error) {
      toast.error("Error submitting contact form data");
    }
  };
  const onstate = (e) => {
     setSelected(e.target.value)
  }
  const onCity = (e) => {
   setSelectedCity(e.target.value)
 }
  const checkedPolicy = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stateData = await GetState();
        setState(stateData);

        if (selected) {
          const city = await GetCity(selected)
          setCity(city);
        }

       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selected]); 

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
            CompanyName: "",
            address1: "",
            address2: "",
            city: selectedCity,
            state: selected,
            postalCode: "",
            requirements: "none",
            call_date: "",
            time: "none",
            info: "",
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
              <>
                <Grid
                  container
                  spacing={2}
                  rowSpacing={5}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <CustomInput
                      label="First Name *"
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
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <CustomInput
                      label="Last Name"
                      name="LastName"
                      onBlur={handleBlur}
                      value={values?.LastName}
                      handleChange={handleChange}
                      error={errors.LastName}
                      touched={touched.LastName}
                      helperText={
                        errors.LastName && touched.LastName
                          ? errors.LastName
                          : ""
                      }
                      placeholder="Last Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <CustomInput
                      label="EmailId *"
                      name="EmailId"
                      onBlur={handleBlur}
                      value={values?.EmailId}
                      handleChange={handleChange}
                      error={errors.EmailId}
                      touched={touched.EmailId}
                      helperText={
                        errors.EmailId && touched.EmailId ? errors.EmailId : ""
                      }
                      placeholder="Email Id "
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6} mt={"-0.4rem"}>
                    <InputLabel
                      htmlFor="MobilewithCountryCode"
                      sx={{
                        color: "#161616",
                        marginBottom: "8px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Phone No. *
                    </InputLabel>
                    <PhoneInput
                      country={"+91"}
                      name="MobilewithCountryCode"
                      value={values?.MobilewithCountryCode}
                      onChange={(value) => {
                        setFieldValue("MobilewithCountryCode", value);
                      }}
                      onBlur={handleBlur}
                      inputsx={{
                        height: "55px !important",
                        width: "100%",
                      }}
                      error={
                        errors.MobilewithCountryCode &&
                        touched.MobilewithCountryCode
                      }
                    />
                  </Grid>

                  <Grid item xs={12} lg={6} md={12} sm={12}>
                    <CustomInput
                      label="Company/Organization *"
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
                </Grid>

                <Grid
                  container
                  spacing={2}
                  rowSpacing={5}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item sm={12} md={12} lg={12} mt={"4rem"}>
                    <table className="w-full">
                      <tr>
                        <td className="w-[15%] font-bold text-[1.2rem]">
                          Address
                        </td>
                        <td className="w-[85%]">
                          <hr></hr>
                        </td>
                      </tr>
                    </table>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <CustomInput
                      label="Address"
                      name="address1"
                      onBlur={handleBlur}
                      value={values?.address1}
                      placeholder="Address line 1"
                      handleChange={handleChange}
                      error={errors.address1}
                      touched={touched.address1}
                      helperText={
                        errors.address1 && touched.address1
                          ? errors.address1
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} mt={"1.4rem"}>
                    <CustomInput
                      name="address2"
                      onBlur={handleBlur}
                      value={values?.address2}
                      handleChange={handleChange}
                      error={errors.address2}
                      touched={touched.address2}
                      helperText={
                        errors.address2 && touched.address2
                          ? errors.address2
                          : ""
                      }
                      placeholder="Address line 2"
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={4}>
                    <InputLabel
                      htmlFor="state"
                      sx={{
                        color: "#161616",
                        marginBottom: "8px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      State
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={values?.state}
                      onChange={onstate}
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
                      name="state"
                      error={errors.state && touched.state}
                      helperText={
                        errors.state && touched.state ? errors.state : ""
                      }
                    >
                      {console.log(values.state, "kjdkjdkjdj")}
                      <MenuItem disable value="none">
                        Select States
                      </MenuItem>
                      {state.map((item) => (
                        <MenuItem key={item.id} value={item?.iso2}>
                          {item.name}
                        </MenuItem>
                      ))}
                      {/* ;{state.map((e) => {})} */}
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4}>
                    <InputLabel
                      htmlFor="name"
                      sx={{
                        color: "#161616",
                        marginBottom: "8px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      City
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={values?.city}
                      onChange={onCity}
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
                      name="city"
                      placeholder="city"
                      error={errors.city && touched.city}
                      helperText={
                        errors.city && touched.city ? errors.city : ""
                      }
                    >
                      <MenuItem disable value="none">
                        Select City
                      </MenuItem>
                      {city.map((e) => {
                        return <MenuItem value={e?.name}>{e?.name}</MenuItem>;
                      })}
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} mt={"0.3rem"}>
                    <CustomInput
                      label="Postal Code"
                      name="postalCode"
                      onBlur={handleBlur}
                      value={values?.postalCode}
                      handleChange={handleChange}
                      error={errors.postalCode}
                      touched={touched.postalCode}
                      helperText={
                        errors.postalCode && touched.postalCode
                          ? errors.postalCode
                          : ""
                      }
                      placeholder="Postal Code"
                    />
                  </Grid>
                  <Grid item sm={12} md={12} lg={12} mt={"2rem"}>
                    <table className="w-full">
                      <tr>
                        <td className="w-[15%] font-bold text-[1.2rem]">
                          Requirement
                        </td>
                        <td className="w-[85%]">
                          <hr></hr>
                        </td>
                      </tr>
                    </table>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <InputLabel
                      htmlFor="name"
                      sx={{
                        color: "#161616",
                        marginBottom: "8px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Requirement *
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={values?.requirements}
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
                      name="requirements"
                      error={errors.requirements && touched.requirements}
                      helperText={
                        errors.requirements && touched.requirements
                          ? errors.requirements
                          : ""
                      }
                    >
                      <MenuItem disable value={"none"}>
                        Select Requirements
                      </MenuItem>
                      {Options.map((items) => (
                        <MenuItem key={items.value} value={items.value}>
                          {items.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <InputLabel
                      htmlFor="name"
                      sx={{
                        color: "#161616",
                        marginBottom: "8px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Preferred date and time for a call back
                    </InputLabel>
                    <DatePicker
                      onChange={(value) => setFieldValue("call_date", value)}
                      value={values?.call_date || null}
                      name="call_date"
                      label="Select call date"
                      showTimeInput={false}
                      error={errors.call_date && touched.call_date}
                      helperText={
                        errors.call_date && touched.call_date
                          ? errors.call_date
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <InputLabel
                      htmlFor="name"
                      sx={{
                        color: "#161616",
                        marginBottom: "8px",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      Select Time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={values?.time}
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
                      name="time"
                      error={errors.time && touched.time}
                      helperText={
                        errors.time && touched.time ? errors.time : ""
                      }
                    >
                      <MenuItem disabled value={"none"}>
                        Select time
                      </MenuItem>
                      {Object.entries(time).map(([timeValue, label]) => (
                        <MenuItem key={timeValue} value={timeValue}>
                          {label}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <InputLabel
                      htmlFor="Informations"
                      sx={{
                        color: "#161616",
                        marginBottom: "8px",
                        fontFamily: "Open Sans, sans-serif",
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
                      helperText={
                        errors.info && touched.info ? errors.info : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TermsConditionBtn
                      checkedPolicy={checkedPolicy}
                      isChecked={isChecked}
                    />
                  </Grid>
                  <Grid item xs={12} className="text-right">
                    <hr></hr>
                    <button
                      className={`w-[163px] text-[#FFFFFF] h-[48px] bg-[#EF4136] rounded-[4px]  mt-[5px] font-semibold text-[16px] ${
                        isChecked ? "bg-[#EF4136]" : "bg-[grey]"
                      }`}
                      type="submit"
                      disabled={!isChecked}
                    >
                      Submit
                    </button>
                  </Grid>
                </Grid>
              </>
            );
          }}
        </Form>
      </div>
    </>
  );
};

export default RequestSample;

const schema = Yup.object().shape({
  FirstName: Yup.string().trim().required("First Name is required"),
  LastName: Yup.string().trim().required("Last Name is required"),
  EmailId: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),

  MobilewithCountryCode: Yup.string()
    .typeError("That doesn't look like a phone number")
    .required(),
  CompanyName: Yup.string().trim().required("Company name is required"),
});
