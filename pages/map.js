import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Events = ({ events }) => {
  return (
    <MainContainer>
      <h1>Список мероприятий</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/${event.url}`}>
              <a>{event.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Events;

export async function getStaticProps(context) {
  const response = await fetch(
    "https://nrms.5verst.ru/api/v1/website/event/list",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sort_by_city: false }),
    }
  );

  const data = await response.json();
  const events = data.result.data;
  return {
    props: { events },
  };
}
