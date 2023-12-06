import CustomTab from "@/components/CustomTab";
import React from "react";
import Head from "next/head";
import AnimatedTitleHeader from "@/components/TitleHeader/AnimatedTitleHeader";

const TermsAndConditions = () => {
  const navigateTop = () => {
    window.scrollTo(0, 0);
  };
  const KeyPoints = [
    {
      key: "1",
      text: "Summary of key points",
    },
    {
      key: "2",
      text: "What information do we have to collect?",
    },
    {
      key: "3",
      text: "How do we process your information?",
    },
    {
      key: "4",
      text: "What information do we have to collect?",
    },
    {
      key: "5",
      text: "What information do we have to collect?",
    },
  ];

  const Content = [
    {
      key: "1",
      data: [
        {
          heading: "Last updated September 19, 2022",
          text: (
            <div>
              This privacy notice for Bizinbiz Technologies Pvt Ltd (doing
              business as Elchemy) ("Elchemy," "we," "us," or "our"), describes
              how and why we might collect, store, use, and/or share ("process")
              your information when you use our services ("Services"), such as
              when you: Visit our website at http://www.elchemy.com, or any
              website of ours that links to this privacy notice Engage with us
              in other related ways, including any sales, marketing, or events
              Questions or concerns? Reading this privacy notice will help you
              understand your privacy rights and choices. If you do not agree
              with our policies and practices, please do not use our Services.
              If you still have any questions or concerns, please contact us at
              info@elchemy.com.
            </div>
          ),
        },
        {
          key: "2",
          heading: "SUMMARY OF KEY POINTS",
          text: (
            <div>
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our table of
              contents below to find the section you are looking for. You can
              also click here to go directly to our table of contents. What
              personal information do we process? When you visit, use, or
              navigate our Services, we may process personal information
              depending on how you interact with Elchemy and the Services, the
              choices you make, and the products and features you use. Click
              here to learn more. Do we process any sensitive personal
              information? We do not process sensitive personal information. Do
              we receive any information from third parties? We do not receive
              any information from third parties. How do we process your
              information? We process your information to provide, improve, and
              administer our Services, communicate with you, for security and
              fraud prevention, and comply with the law. We may also process
              your information for other purposes with your consent. We process
              your information only when we have a valid legal reason to do so.
              Click here to learn more. In what situations and with which
              parties do we share personal information? We may share information
              in specific situations and with specific third parties. Click here
              to learn more. How do we keep your information safe? We have
              organizational and technical processes and procedures in place to
              protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Click here to learn more. What are your rights? Depending on where
              you are located geographically, the applicable privacy law may
              mean you have certain rights regarding your personal information.
              Click here to learn more. How do you exercise your rights? The
              easiest way to exercise your rights is by filling out our data
              subject request form available here, or by contacting us. We will
              consider and act upon any request in accordance with applicable
              data protection laws. Want to learn more about what Elchemy does
              with any information we collect? Click here to review the notice
              in full.
            </div>
          ),
        },
        {
          key: "1",
          heading: "TABLE OF CONTENTS",
          text: (
            <div>
              1.WHAT INFORMATION DO WE COLLECT? 2. HOW DO WE PROCESS YOUR
              INFORMATION? 3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
              PERSONAL INFORMATION? 4. WHEN AND WITH WHOM DO WE SHARE YOUR
              PERSONAL INFORMATION? 5. DO WE USE COOKIES AND OTHER TRACKING
              TECHNOLOGIES? 6. HOW DO WE HANDLE YOUR SOCIAL LOGINS? 7. HOW LONG
              DO WE KEEP YOUR INFORMATION? 8. HOW DO WE KEEP YOUR INFORMATION
              SAFE? 9. DO WE COLLECT INFORMATION FROM MINORS? 10. WHAT ARE YOUR
              PRIVACY RIGHTS? 11. CONTROLS FOR DO-NOT-TRACK FEATURES 12. DO
              CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? 13. DO WE MAKE
              UPDATES TO THIS NOTICE? 14. HOW CAN YOU CONTACT US ABOUT THIS
              NOTICE? 15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
              COLLECT FROM YOU?
            </div>
          ),
        },
      ],
    },
    {
      key: "2",
      data: [
        {
          heading: "Last updated September 19, 2022",
          text: <div>Randome text will be here</div>,
        },
        {
          key: "2",
          heading: "SUMMARY OF KEY POINTS",
          text: (
            <div>
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our table of
              contents below to find the section you are looking for. You can
              also click here to go directly to our table of contents. What
              personal information do we process? When you visit, use, or
              navigate our Services, we may process personal information
              depending on how you interact with Elchemy and the Services, the
              choices you make, and the products and features you use. Click
              here to learn more. Do we process any sensitive personal
              information? We do not process sensitive personal information. Do
              we receive any information from third parties? We do not receive
              any information from third parties. How do we process your
              information? We process your information to provide, improve, and
              administer our Services, communicate with you, for security and
              fraud prevention, and comply with the law. We may also process
              your information for other purposes with your consent. We process
              your information only when we have a valid legal reason to do so.
              Click here to learn more. In what situations and with which
              parties do we share personal information? We may share information
              in specific situations and with specific third parties. Click here
              to learn more. How do we keep your information safe? We have
              organizational and technical processes and procedures in place to
              protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Click here to learn more. What are your rights? Depending on where
              you are located geographically, the applicable privacy law may
              mean you have certain rights regarding your personal information.
              Click here to learn more. How do you exercise your rights? The
              easiest way to exercise your rights is by filling out our data
              subject request form available here, or by contacting us. We will
              consider and act upon any request in accordance with applicable
              data protection laws. Want to learn more about what Elchemy does
              with any information we collect? Click here to review the notice
              in full.
            </div>
          ),
        },
        {
          key: "1",
          heading: "TABLE OF CONTENTS",
          text: (
            <div>
              1.WHAT INFORMATION DO WE COLLECT? 2. HOW DO WE PROCESS YOUR
              INFORMATION? 3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
              PERSONAL INFORMATION? 4. WHEN AND WITH WHOM DO WE SHARE YOUR
              PERSONAL INFORMATION? 5. DO WE USE COOKIES AND OTHER TRACKING
              TECHNOLOGIES? 6. HOW DO WE HANDLE YOUR SOCIAL LOGINS? 7. HOW LONG
              DO WE KEEP YOUR INFORMATION? 8. HOW DO WE KEEP YOUR INFORMATION
              SAFE? 9. DO WE COLLECT INFORMATION FROM MINORS? 10. WHAT ARE YOUR
              PRIVACY RIGHTS? 11. CONTROLS FOR DO-NOT-TRACK FEATURES 12. DO
              CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? 13. DO WE MAKE
              UPDATES TO THIS NOTICE? 14. HOW CAN YOU CONTACT US ABOUT THIS
              NOTICE? 15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
              COLLECT FROM YOU?
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Terms Of Service | Elchemy</title>
        <meta name="description" content="Terms Of Service" key="desc" />
      </Head>
      <div className="pt-[10vh] sm:pt-[12vh]">
        <AnimatedTitleHeader
          text={"Terms Of Use"}
          imgSrc={
            "https://elchemydev.s3.amazonaws.com/static/image'/2023-12-02/13:30:20.992690.png"
          }
        />
        <CustomTab Content={Content} KeyPoints={KeyPoints} />
      </div>
    </>
  );
};

export default TermsAndConditions;
