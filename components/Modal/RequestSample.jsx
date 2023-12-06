import React, { useState } from "react";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import crossIcon from "../../public/images/cancel.svg";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Image from "next/image";
import RequestSample from "../Contact-us/RequestSample";

const RequestSampleModalBtn = ({
  Options = [],
  heading,
  subHeading,
  children,
  classes,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className={classes} onClick={handleClickOpen}>
        {children}
      </button>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <div className="flex justify-between">
            <h2 className="font-bold pt-5 pb-5">{heading}</h2>
            <Image
              src={crossIcon}
              alt="image"
              width={25}
              height={5}
              onClick={handleClose}
              className="cursor-pointer"
            />
          </div>
          <hr />
        </DialogTitle>
        <DialogContent>
          <table className="w-full my-7">
            <tr>
              <td className="w-[15%]">
                <h4 className="font-bold">{subHeading}</h4>
              </td>
              <td className="w-[70%]">
                <hr></hr>
              </td>
            </tr>
          </table>
          <RequestSample Options={Options} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RequestSampleModalBtn;
