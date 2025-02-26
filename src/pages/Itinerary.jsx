import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Schedule, Place, Event } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

export default function Itinerary() {
  const itineraryData = [
    {
      date: "2024-09-19",
      time: "10:00 AM",
      event: "Welcome Ceremony",
      location: "St. John’s Cathedral",
    },
    {
      date: "2024-09-20",
      time: "2:00 PM",
      event: "Charity Outreach",
      location: "Community Center",
    },
    {
      date: "2024-09-21",
      time: "9:00 AM",
      event: "Youth Conference",
      location: "Church Auditorium",
    },
    {
      date: "2024-09-22",
      time: "11:00 AM",
      event: "Closing Mass",
      location: "Main Chapel",
    },
  ];

  const location = useLocation();

  // Scroll to top on every render
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  })

  return (
    <div className="flex justify-center items-center min-h-screen mx-auto p-4 mt-4">
      <div className="max-w-4xl w-full bg-cyan-100 px-4 rounded-lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="mb-6 text-blue-600 "
        >
          <div className="font-muktaVaani my-3 pb-3 border-blue-gray-400 border-b-2">
            Itinerary
          </div>
        </Typography>

        {itineraryData.map((item, index) => (
          <Card key={index} className="mb-6 hover:shadow-xl">
            <CardContent>
              <Typography
                variant="h6"
                className="flex items-center mb-2 text-gray-700"
              >
                <Event className="mr-2 text-blue-500" />
                <div className="font-yantramanav">{item.event}</div>
              </Typography>

              <Divider className="mb-4" />

              <List>
                <ListItem>
                  <Schedule className="mr-2 text-green-500" />
                  <ListItemText
                    primary={<div className="font-imprima">{item.time}</div>}
                  />
                </ListItem>

                <ListItem>
                  <Event className="mr-2 text-purple-500" />
                  <ListItemText
                    primary={<div className="font-imprima">{item.date}</div>}
                  />
                </ListItem>

                <ListItem>
                  <Place className="mr-2 text-red-500" />
                  <ListItemText
                    primary={
                      <div className="font-imprima">{item.location}</div>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
