import React from "react";
import eventObj from "@/models/eventObj";
import LogisticsItem from "@/components/event-detail/logistics-item/logistics-item";
import Calender from "@/components/UI/Icons/Calender";
import Location from "@/components/UI/Icons/location";

const EventLogistics: React.FC<{ event: eventObj }> = (props) => {
  const humanReadableDate = new Date(props.event.date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
  const addressText = props.event.location.replace(",", "\n");
  return (
    <section>
      <div>
        <img src={`/${props.event.image}`} alt={props.event.title} />
      </div>
      <ul>
        <LogisticsItem>
          <span>
            <Calender />
          </span>
          <span>
            <time>{humanReadableDate}</time>
          </span>
        </LogisticsItem>
        <LogisticsItem>
          <span>
            <Location />
          </span>
          <span>
            <address>{addressText}</address>
          </span>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
