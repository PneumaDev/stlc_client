import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProductCard({ image, name, price, description }) {
  return (
    <Card className="lg/md:w-96 sm:w-full">
      <CardHeader
        shadow={false}
        floated={false}
        className="h-56 sm:h-80 md:h-80"
      >
        <img
          src={image}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </CardHeader>

      <CardBody>
        <div className="mb-2 flex flex-col sm:flex-row items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-medium text-sm sm:text-base md:text-lg font-yantramanav"
          >
            {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium text-sm sm:text-base md:text-lg font-yantramanav"
          >
            {price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal text-xs sm:text-sm md:text-base opacity-75 font-muktaVaani line-clamp-1"
        >
          {description}
        </Typography>
      </CardBody>

      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 font-imprima"
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
