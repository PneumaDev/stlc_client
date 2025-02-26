import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export function CardDefault({ detail, floating = true, className="", button = false}) {
  return (
    <div className="mt-4">
      <Fade direction="bottom">
        <div className="flex flex-col">
          <Typography
            variant="h3"
            component="h2"
            className="text-lg lg:text-xl font-semibold text-gray-600 font-muktaVaani pb-5 line-clamp-1"
            color="gray"
          >
            {detail.title}
          </Typography>
        </div>
        <Card className={`w-full ${className}`}>
          <CardHeader color="blue-gray" className="" floated={!!floating}>
            <img
              src={detail.imageUrl}
              alt="card-image"
              className="w-full h-56 object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-muktaVaani line-clamp-1"
            >
              {detail.description}
            </Typography>
            <Typography
              className={`${button ? "" : "mb-5"} font-imprima line-clamp-4`}
            >
              {detail.detail}
            </Typography>
          </CardBody>

          {button && (
            <CardFooter className="mb-2 p-3">
              {detail.link === "wolap&mop" ? (
                <a
                  href="https://wolap.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-purple-300 text-black font-muktaVaani">
                    Explore
                  </Button>
                </a>
              ) : (
                <Link to={detail.link}>
                  <Button className="bg-purple-300 text-black font-muktaVaani">
                    Explore
                  </Button>
                </Link>
              )}
            </CardFooter>
          )}
        </Card>
      </Fade>
    </div>
  );
}
