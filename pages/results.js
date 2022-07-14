import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";
import events_db from "../db/events.json";

const Results = () => {
  const { query } = useRouter();
  const event = events_db.data.find((e) => e.url === query?.eventName);

  return (
    <MainContainer>
      <Link href={`/${event?.url}`}>
        <a>На главную страницу парка</a>
      </Link>
      <h1>Результаты парка {event?.name}</h1>
    </MainContainer>
  );
};

export default Results;
