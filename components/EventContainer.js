import { useRouter } from "next/router";
import React from "react";
import events_db from "../db/events.json";
import A from "./A";

const EventContainer = ({ children }) => {
  const { query } = useRouter();
  const event = events_db.data.find((e) => e.url === query?.url);

  return (
    <>
      <div className="navbar">
        <A href="/" text="На главную" />
        <A href={`/${event?.url}/course`} text="О трассе" />
        <A href={`/${event?.url}/volunteer`} text="Волонтерство" />
        <A href={`/results?eventName=${event?.url}`} text="Результаты" />
        <A href="/register" text="Регистрация" />
      </div>
      <div className="content-container">{children}</div>
      <style jsx>
        {`
          .navbar {
            background: #2b326d;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default EventContainer;
