import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCard() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="font-muktaVaani"
        >
          Where are we located?
        </AccordionHeader>
        <AccordionBody>
          <p>
            We're located along the Thika - Murang'a Highway between Kabati and
            Kenol next to Ola Petrol Station. In case you'd love to talk to one
            of our admins for further directions, kindly contact:
            <a href="tel:+2547123456789" className="underline ml-1 mr-1">
              07123456789
            </a>
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="font-muktaVaani"
        >
          What are our weekly services?
        </AccordionHeader>
        <AccordionBody>
          <p>Our weekly schedule is as follows:</p>
          <ul className="font-imprima">
            <li>1. Tuesday Fellowship (5pm)</li>
            <li>2. Friday Fellowship (8pm)</li>
            <li>3. Praying Generation (1st Weekend of the month)</li>
            <li>4. Prayer Hour (Every Sunday from 8am-10am)</li>
            <li>5. Main Service (Every Sunday from 10am)</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="font-muktaVaani"
        >
          How can I be a member of STLC?
        </AccordionHeader>
        <AccordionBody>
          <p>
            We are glad you've decided to join us. We bless the Lord together
            with you for what He is about to do with your life to the glory of
            His name. To become a member of STLC, you need to be a believer in
            Our Lord and Savior Jesus Christ and confess Him as the one true
            God. That's just about it. If you are yet to accept the salvation
            that comes from God through Jesus Christ, kindly reach out to us via
            our{" "}
            <a href="./contact" className="underline">
              Contact Page
            </a>{" "}
            and we will be glad to help.
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}
