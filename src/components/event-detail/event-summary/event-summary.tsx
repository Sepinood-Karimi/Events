import React from "react";

const EventSummary: React.FC<{ title: string }> = (props) => {
  return (
    <section>
      <h1>{props.title}</h1>
    </section>
  );
};
export default EventSummary;
