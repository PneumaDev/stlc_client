import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function DefaultCard() {
  return (
    <Card className="w-96 bg-blue-gray-100">
      <CardHeader floated={false} className="h-60">
        <img
          src="https://pbs.twimg.com/media/F203jm-W8AA9uVn?format=jpg&name=small"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center pb-3">
        <Typography variant="h5" color="blue-gray" className="font-yantramanav">
          Ap. Arome and Rev. Dinna Osayi
        </Typography>
        <Typography
          color="blue-gray"
          className="font-medium font-imprima"
          textGradient
        >
          Setmen, RCN Global
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-0">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
