import React from "react";
import eventObj from "@/models/eventObj";
import Link from "next/link";

const EventItem: React.FC<{ eventItem: eventObj }> = (props) => {
  const humanReadableDate = new Date(props.eventItem.date).toLocaleDateString(
    "en-Us",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
  const formattedAddress = props.eventItem.location.replace(",", "/n");
  const exploreLink = `/events/${props.eventItem.id}`;
  return (
    <li>
      <img src={"/" + props.eventItem.image} alt={props.eventItem.title} />
      <div>
        <div>
          <h2>{props.eventItem.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
