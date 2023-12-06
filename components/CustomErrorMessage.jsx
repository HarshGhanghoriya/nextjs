import React from "react";
import { ErrorMessage } from "formik";
const CustomErrorMessage = ({ name }) => {
  return (
    <>
      <p className="text-red-400 ">
        <ErrorMessage name={name} />
      </p>
    </>
  );
};

export default CustomErrorMessage;
