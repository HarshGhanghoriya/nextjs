import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailRounded from "@mui/icons-material/EmailRounded";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import ReachUs from "../Contact-us/ReachUs";

const CardComponent = () => {
  const [selectedTab, setSelectedTab] = useState("1");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };


  const renderContent = () => {
    switch (selectedTab) {
      case "1":
        return (
          <div className="mt-[-2rem] sm:mt-[0]">
            <Stack mb="1rem" direction="row" gap="1rem">
              <LocationOnIcon className="text-white" />
              <p className="font-normal text-base text-white">
               A-448 Pocket 2 Sector 8 Rohini New Delhi 110085 
              </p>
            </Stack>
            <Stack mb={"1rem"} direction={"row"} gap={"1rem"}>
              <EmailRounded className="text-white" />
              <p className="font-normal text-base text-white">
                info@elchemy.com
              </p>
            </Stack>
            <Stack mb={"1rem"} direction={"row"} gap={"1rem"}>
              <WifiCalling3Icon className="text-white" />
              <p className="font-normal text-base text-white">+919867099519</p>
            </Stack>
            {/* Add other details for New Delhi */}
          </div>
        );
      case "2":
        return (
          <div className="mt-[-2rem] sm:mt-[0]">
            <Stack mb="1rem" direction="row" gap="1rem">
              <LocationOnIcon className="text-white" />
              <p className="font-normal text-base text-white">
                C-618 Atrium 215 Courtyard Marriott MV Road Chakala Andheri East
                Mumbai -400093
              </p>
            </Stack>

            <Stack mb={"1rem"} direction={"row"} gap={"1rem"}>
              <EmailRounded className="text-white" />
              <p className="font-normal text-base text-white">
                info@elchemy.com
              </p>
            </Stack>
            <Stack mb={"1rem"} direction={"row"} gap={"1rem"}>
              <WifiCalling3Icon className="text-white" />
              <p className="font-normal text-base text-white">+919867099519</p>
            </Stack>
            {/* Add other details for Mumbai */}
          </div>
        );
      case "3":
        return (
          <div className="mt-[-2rem] sm:mt-[0]">
            <Stack mb="1rem" direction="row" gap="1rem">
              <LocationOnIcon className="text-white" />
              <p className="font-normal text-base text-white">
                Elchemy ,CIIE IIMA Vastrapur, Ahmedabad,Gujarat 380015
              </p>
            </Stack>
            <Stack mb={"1rem"} direction={"row"} gap={"1rem"}>
              <EmailRounded className="text-white" />
              <p className="font-normal text-base text-white">
                info@elchemy.com
              </p>
            </Stack>
            <Stack mb={"1rem"} direction={"row"} gap={"1rem"}>
              <WifiCalling3Icon className="text-white" />
              <p className="font-normal text-base text-white">+919867099519</p>
            </Stack>
            {/* Add other details for Ahmedabad */}
          </div>
        );
      case "4":
        return (
          <div className="mt-[-2rem] sm:mt-[0]">
            <Stack mb="1rem" direction="row" gap="1rem">
              <LocationOnIcon className="text-white" />
              <p className="font-normal text-base text-white">
              16192 Coastal Highway Lewes,DE 19958
              </p>
            </Stack>
            <Stack mb={"1rem"} direction={"row"} gap={"1rem"}>
              <EmailRounded className="text-white" />
              <p className="font-normal text-base text-white">info@elchemy.com</p>
            </Stack>
            <Stack mb={"1rem"} direction={"row"} gap={"1rem"}>
              <WifiCalling3Icon className="text-white" />
              <p className="font-normal text-base text-white">+1(908) 663-8750</p>
            </Stack>
            {/* Add other details for USA */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Box className="absolute top-0 left-[6rem]">
        <Card
          className=" w-[22.8rem] md:mt-[-2rem] mt-[-4rem] sm:mt-[0]    ml-[-100px] sm:ml-[0]  md:w-[40rem] h-[15rem]"
          style={{
            backgroundColor: "#EF4136",
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            TabIndicatorProps={{
              sx: {
                display: "none",
              },
            }}
            aria-label="full width tabs example"
            sx={{
              bgcolor: "#D83D33",
              width: "100%",
            }}
          >
            <Tab
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#EF4136",
                  color: "#fff",
                },
                "@media (max-width: 600px)": {
                  fontSize: "12px", // Adjust the font size for small screens
                },

                textTransform: "none",
              }}
              value="1"
              className="p-4 w-[25%]  text-white font-normal"
              label="New Delhi"
            />
            <Tab
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#EF4136",
                  color: "#fff",
                },
                "@media (max-width: 600px)": {
                  fontSize: "12px", // Adjust the font size for small screens
                },
                textTransform: "none",
              }}
              value="2"
              className="p-4 w-[25%] text-white font-normal"
              label="Mumbai"
            />
            <Tab
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#EF4136",
                  color: "#fff",
                },
                "@media (max-width: 600px)": {
                  fontSize: "12px", // Adjust the font size for small screens
                },
                textTransform: "none",
              }}
              value="3"
              className="p-4 w-[25%] text-white font-normal"
              label="Ahmedabad"
            />
            <Tab
              sx={{
                "&.Mui-selected": {
                  bgcolor: "#EF4136",
                  color: "#fff",
                },
                "@media (max-width: 600px)": {
                  fontSize: "12px", // Adjust the font size for small screens
                },
                textTransform: "none",
              }}
              value="4"
              className="p-4 w-[25%] text-white font-medium"
              label="USA"
            />
          </Tabs>
          <div className="m-[3rem]">{renderContent()}</div>
        </Card>
      </Box>
      <ReachUs selectedTab={selectedTab} />
    </>
  );
};

export default CardComponent;
