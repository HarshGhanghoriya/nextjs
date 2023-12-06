import React from "react";
import SkewedBar from "../Common/SkewedBar";
import ElchemyCard from "./ElchemyCard";
import { Grid } from "@mui/material";
import threetesttubes from "../../public/images/threetesttubes.svg";
import qualityAssurance from "../../public/images/qualityAssurance.svg";
import processExpertise from "../../public/images/processExpertise.svg";
import costCompetitiveness from "../../public/images/costCompetitiveness.svg";
import technicalSupport from "../../public/images/technicalSupport.svg";

const ElchemyExperitse = () => {
  const elchemyData = [
    {
      logo: threetesttubes,
      title: "Customized Formulations",
      description:
        "We understand that one size does not fit all in the world of chemicals. That's why we excel at crafting bespoke chemical.",
    },
    {
      logo: qualityAssurance,
      title: "Quality Assurance",
      description:
        "We prioritize quality. Our unwavering commitment and rigorous quality control processes guarantee that every batch meets or exceeds industry standards and regulations.",
    },
    {
      logo: processExpertise,
      title: "Process Expertise",
      description:
        "Our team's expertise ensures a smooth, efficient, and cost-effective chemical manufacturing journey, with optimized processes for efficiency and quality.",
    },
    {
      logo: costCompetitiveness,
      title: "Cost Competitiveness",
      description:
        "Elchemy delivers cost-efficient solutions through advanced technology and supply chain management, ensuring quality without compromise.",
    },
    {
      logo: technicalSupport,
      title: "Technical Support",
      description:
        "Your project's success is paramount. Beyond delivering chemical solutions, our dedicated technical support team is ready to assist you every step of the way.",
    },
  ];

  return (
    <div className="">
      <div className="mb-8">
        <SkewedBar color="#F15B2A" subHeader="Elchemy Expertise" />
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {elchemyData?.map((item, index) => (
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <ElchemyCard
              logo={item.logo}
              title={item.title}
              description={item.description}
              index={index + 1}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ElchemyExperitse;
