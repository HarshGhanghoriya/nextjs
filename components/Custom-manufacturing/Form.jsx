import { saveCustomSolutionDetails } from "@/redux/slices/CustomSolution";
import { customSolutionValidationSchema } from "@/utils/FormValidationSchemas";
import TextField from "@mui/material/TextField";
import { Formik, setFieldValue } from "formik";
import { useDispatch } from "react-redux";
import CustomErrorMessage from "../CustomErrorMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const dispatch = useDispatch();

  const formInitialValues = {
    industry_name: "",
    product_name: "",
    desc: "",
  };

  const saveDetails = async (details, resetForm) => {
    const res = await dispatch(saveCustomSolutionDetails(details));
    if (res?.payload?.status === 200) {
      toast.success("Data Saved");
      resetForm();
    } else {
      toast.success("Something Went Wrong ");
    }
  };
  return (
    <>
      <div className="mt-10">
        <ToastContainer />
        <div className="text-center">
          <h1>Get In Touch</h1>
          <p>Any question or remarks? just write us a message!</p>
        </div>
        <Formik
          initialValues={formInitialValues}
          onSubmit={(values, { resetForm }) => {
            saveDetails(values, resetForm);
          }}
          validationSchema={customSolutionValidationSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className=" flex justify-center  items-center mt-10 md:flex-row flex-col">
                <div className="flex flex-col md:w-[16%] w-[80%]">
                  <TextField
                    id="input-with-icon-textfield"
                    label="Industry"
                    placeholder="Industry Name"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <PersonIcon />
                    //     </InputAdornment>
                    //   ),
                    // }}
                    variant="standard"
                    name="industry_name"
                    value={values.industry_name}
                    onChange={handleChange}
                  />
                  <CustomErrorMessage name="industry_name" />
                </div>

                <div className="flex flex-col md:mt-0 mt-5 md:w-[16%] w-[80%]">
                  <TextField
                    id="input-with-icon-textfield"
                    label="Product Name"
                    placeholder="Product Name"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <EmailIcon />
                    //     </InputAdornment>
                    //   ),
                    // }}
                    variant="standard"
                    className="md:ml-10"
                    name="product_name"
                    value={values.product_name}
                    onChange={handleChange}
                  />
                  <div className="md:ml-10">
                    <CustomErrorMessage name="product_name" />
                  </div>
                </div>

                <div className="flex flex-col md:mt-0 md:w-[16%] mt-5 w-[80%]">
                  <TextField
                    id="input-with-icon-textfield"
                    label="Product Description"
                    placeholder="Product Description"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <LocalPhoneIcon />
                    //     </InputAdornment>
                    //   ),
                    // }}
                    variant="standard"
                    className="md:ml-10"
                    name="desc"
                    value={values.desc}
                    onChange={handleChange}
                  />
                  <div className="md:ml-10">
                    <CustomErrorMessage name="desc" />
                  </div>
                </div>
              </div>

              <button
                className="w-[100px] rounded-[8px] bg-[#505050]   h-[40px]  ml-[45%] mt-5"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Form;
