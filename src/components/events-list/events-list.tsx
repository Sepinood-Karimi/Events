import EventItem from "@/components/event-item/event-item";
import React from "react";
import eventObj from "@/models/eventObj";
import { getFeaturedEvents } from "../../../dummy-events";
import classnames from "classnames";
import classes from "./events-list.module.css";
const EventsList = () => {
  const featuredEvents: eventObj[] = getFeaturedEvents();
  return (
    <ul className={classnames(classes.list)}>
      {featuredEvents.map((eventItem) => (
        <EventItem eventItem={eventItem} key={eventItem.id} />
      ))}
    </ul>
  );
};
export default EventsList;
