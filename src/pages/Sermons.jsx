import { Typography } from "@material-tailwind/react";
import React from "react";
import { CardDefault } from "../components/Card";
import ReactPlayer from "react-player";

export default function Sermons() {
  const details = [
    {
      title: "Watch the latest videos on youtube",
      imageUrl: "https://i.ibb.co/N6MkX51/Bshp.jpg",
      detail:
        "Watch the most recent videos from our youtube channel AD FREE. You can also request specific videos or audios which can be downloaded directly.",
      link: "./youtube",
    },
    {
      title: "Dowload Sessions as Videos or Audio",
      imageUrl: "https://i.ibb.co/N6MkX51/Bshp.jpg",
      detail:
        "Download praise and worship sessions, prayer sessions and, music videos and sermons by our dear man of God John CW as either audio or video.",
      link: "./audio",
    },
    // {
    //   title: "Dowload Sessions as Audio",
    //   imageUrl:
    //     "https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/447292134_760270262981521_4532582200526424505_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHToRnGEjxH4MNx9bKNcvZ4CYX660aGp8EJhfrrRoanwT5Ofk7U4Js7pXfijj5pT23UTe7fWL61ibQ-sLRlMwVz&_nc_ohc=AyaJFgXFmGMQ7kNvgH_kOaL&_nc_ht=scontent.fnbo17-1.fna&oh=00_AYCUqmNk72rnEfQYbyBGSg4-SWluI5nipKgR4mvs_t7ouA&oe=666AFE3E",
    //   detail: "Youths and Children for Christ",
    //   link: "",
    // },
  ];

  return (
    <div className="my-8 mx-4">
      <div className="max-w-4xl mx-auto px-2 sm:px-2 lg:px-8">
        <div className="bg-amber-50 shadow-2xl rounded-lg overflow-hidden flex flex-col ">
          <div className="lg:px-2 pt-4 lg:pb-2">
            <Typography
              variant="h2"
              component="h2"
              className="text-2xl md:text-3xl font-bold text-center mb-4"
              color="purple"
            >
              Spirit TV Live
            </Typography>
            <div className="h-[30vh] lg:h-[65vh]">
              <ReactPlayer
                url="https://www.youtube.com/live/9mHhQQEVtro?feature=shared"
                width="100%"
                height="100%"
                controls={true}
                className="relative bg-black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mt-6 border-t-2 border-cyan-200 flex-col lg/md:flex-row pt-2 flex items-center text-center gap-8 justify-items-center">
          {details.map((item, index) => (
            <div className="max-w-96 pt-4 ">
              <CardDefault
                detail={item}
                key={index}
                className="pt-5"
                button={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
