import React from "react";
import EventsPageHeader from "../../components/eventsPage/Header";
import EventsSection from "../../components/eventsPage/Cards";

const Page = async () => {
  const res = await fetch("https://www.eventogy.com/api/events.json");
  const { data } = await res.json();

  return (
    <div>
      <EventsPageHeader />
      <EventsSection data={data} />
    </div>
  );
};

export default Page;
