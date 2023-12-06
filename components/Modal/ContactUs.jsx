import React, { useState } from "react"
import * as Yup from "yup"
import "react-toastify/dist/ReactToastify.css"
import "react-phone-input-2/lib/style.css"
import crossIcon from "../../public/images/cancel.svg"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import ContactUsForm from "../Contact-us/ContactUsForm"
import Image from "next/image"

const ContactUsModalBtn = ({ heading, subHeading,children,classes,defaultValue='',options=[] }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
          <table>
            <tr>
              <td className="font-bold">
                <h4>{subHeading}</h4>
              </td>
              <td>
                <hr />
              </td>
            </tr>
          </table>
          <ContactUsForm options={options} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ContactUsModalBtn
