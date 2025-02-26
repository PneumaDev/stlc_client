import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";

export function TestimonialCard() {
  return (
    <Fade>
      <div className="">
        <Card
          color="transparent"
          shadow={false}
          className="w-auto bg-amber-50 p-3 mt-4 lg:mx-8 justify-center items-center max-w-[26rem]"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={true}
            className="mx-0 flex items-center gap-4 pt-0 mb-4"
          >
            <Avatar
              size="lg"
              variant="square"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
            />
          </CardHeader>
          <CardBody className="mb-6 text-center p-0 ">
            <Typography className="font-imprima">
              &quot;My life was headed down a dark path. I was lost, making poor
              choices, and allowing sin to consume me. But by the grace of God,
              I was found. When I hit rock bottom, I cried out to Jesus, and He
              heard my prayers. I am forever grateful for God's saving grace and
              the blessing of eternal life through His son. Though I am
              imperfect, I strive to honor Him each day and share the good news
              of the gospel with others.&quot;
            </Typography>
          </CardBody>
        </Card>
      </div>
    </Fade>
  );
}
