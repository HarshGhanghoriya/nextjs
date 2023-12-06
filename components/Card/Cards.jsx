import Image from "next/image";
import Grid from "@mui/material/Grid";
const Cards = ({ heading, description, img }) => {
  return (
    <>
      <div className="pl-4 sm:pl-14 ">
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div className="w-[100%] h-60 bg-[#FCFCFC] p-6 mt-10">
            <div className=" w-60  flex flex-col gap-4">
              <span className="font-mukta text-[#161616] text-xl">
                {heading}
              </span>
              <p className="text-[14px]">{description}</p>
            </div>
          </div>
          <div className="  bg-[#F1F2F2] w-[100%] h-50 ">
            <div className="pt-4 pl-6">
              <Image src={img} alt="me" width="300" height="40" />
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
};
export default Cards;
