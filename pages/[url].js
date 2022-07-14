import { useRouter } from "next/router";
import events_db from "../db/events.json";
import EventContainer from "../components/EventContainer";

export default function () {
  const { query } = useRouter();
  const event = events_db.data.find((e) => e.url === query?.url);

  return (
    <EventContainer>
      <h1>Парк {event?.name || null}</h1>
    </EventContainer>
  );
}
