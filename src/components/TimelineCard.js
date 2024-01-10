import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";

export default function TimelineCard(details) {
  return (
    <Card className="py-4 lg:w-[20rem] w-[14rem]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{details.time}</p>
        <small className="text-default-500">{details.date}</small>
        <h4 className="font-bold text-large">{details.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={details.image}
          width={270}
        />
        <Button color="primary" size="sm">hi</Button>
      </CardBody>
    </Card>
  );
}
