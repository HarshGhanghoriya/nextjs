import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "path-to-your-image-component"; // replace with the actual path

const CustomCard = ({ heading, subheading, id, img }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#FFFFFF",
      }}
    >
      <CardContent>
            <div className="p-2 flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <span className="font-bold">{heading}</span>
                <p>{subheading}</p>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold text-[4rem] text-[#FFC0CB]">0{id}</h1>
                <Image src={img} alt="me" width="80" height="64" />
              </div>
            </div>
            
      </CardContent>
    </Card>
  );
};

export default CustomCard;
