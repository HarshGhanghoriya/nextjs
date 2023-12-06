import Image from "next/image";

const ReachUs = ({ selectedTab }) => {
  const getImagePath = () => {
    // Define the image paths based on the selected tab
    switch (selectedTab) {
      case "1":
        return "./images/Rectangle 6026.svg"; // Replace with the actual path for New Delhi
      case "2":
        return "./images/Rectangle 6026.svg"; // Replace with the actual path for Mumbai
      case "3":
        return "./images/Rectangle 6026.svg"; // Replace with the actual path for Ahmedabad
      case "4":
        return "./images/Rectangle 6026.svg"; // Replace with the actual path for USA
      default:
        return "./images/Rectangle 6026.svg"; // Replace with a default image path
    }
  };

  return (
    <div className=" flex flex-col sm:ml-[0] ml-[-42rem] md:py-20 px-0 sm:mt-[0]">
      <Image

        src={getImagePath()}
    
        alt="logo"
        width={1500}
        height={100}
      
      />
    </div>
  );
};

export default ReachUs;
