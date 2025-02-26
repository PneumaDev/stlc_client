import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import Bshp from "../assets/images/Bshp.jpg";

export function ProfileCard() {
  return (
    <Fade>
      <Card className="w-auto mb-9 mt-4 mx-4">
        <CardHeader floated={false} className="h-full">
          <img src={Bshp} alt="profile-picture" className="w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 font-yantramanav"
          >
            Tr. John CW
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium font-imprima"
            textGradient
          >
            Senior Pastor, STLC
          </Typography>
        </CardBody>
      </Card>
    </Fade>
  );
}
