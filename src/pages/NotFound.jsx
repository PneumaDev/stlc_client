import React from "react";
import NotFoundSVG from "../assets/404.svg";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will navigate the user back to the previous page
  };

  return (
    <div className="justify-center mx-4 items-center pt-5 gap-10 flex flex-col">
      <div className="sm:w-1/3">
        <img src={NotFoundSVG} alt="Not Found" />
      </div>
      <Button className="mt-8" onClick={handleGoBack}>
        Go Back
      </Button>
    </div>
  );
}
