import EventItem from "@/components/event-item";
import React from "react";
import eventObj from "@/models/eventObj";
import { getFeaturedEvents } from "../../dummy-events";

const EventsList = () => {
  const featuredEvents: eventObj[] = getFeaturedEvents();
  return (
    <ul>
      {featuredEvents.map((eventItem) => (
        <EventItem eventItem={eventItem} key={eventItem.id} />
      ))}
    </ul>
  );
};
export default EventsList;
