import React from "react";
import eventObj from "@/models/eventObj";
import classnames from "classnames";
import classes from "./event-item.module.css";
import Button from "@/components/UI/Button/button";
import Location from "@/components/UI/Icons/location";
import Calender from "@/components/UI/Icons/Calender";
import RightArrow from "@/components/UI/Icons/right-arrow";

const EventItem: React.FC<{ eventItem: eventObj }> = (props) => {
  const humanReadableDate = new Date(props.eventItem.date).toLocaleDateString(
    "en-Us",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
  const formattedAddress = props.eventItem.location.replace(",", "\n");
  const exploreLink = `/events/${props.eventItem.id}`;
  return (
    <li className={classnames(classes["list-item"])}>
      <img src={"/" + props.eventItem.image} alt={props.eventItem.title} />
      <div className={classnames(classes["content"])}>
        <div className={classnames(classes.title)}>
          <h2>{props.eventItem.title}</h2>
          <div className={classnames(classes.date)}>
            <Calender />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classnames(classes.address)}>
            <Location />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classnames(classes.link)}>
          <Button link={exploreLink}>
            <span> Explore Event </span>
            <RightArrow />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
