import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-events";
import EventSummary from "@/components/event-detail/event-summary/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics/event-logistics";
import EventContent from "@/components/event-detail/event-content/event-content";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId: any = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <p> No event Found</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>{event.description}</EventContent>
    </>
  );
};
export default EventDetailPage;
