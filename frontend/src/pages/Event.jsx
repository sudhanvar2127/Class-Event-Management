import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import Eventlist from "../components/Eventlist";

const Event = () => {
  const { events } = useContext(EventContext);
  const [latestEvent, setLatestEvent] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setLatestEvent(events);
  }, [events]);

  const handleRegisterClick = (eventId) => {
    navigate(`/register/${eventId}`);
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        All Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {latestEvent.map((e, index) => (
          <Eventlist
            key={index}
            id={e.id}
            image={e.image}
            title={e.title}
            date={e.date}
            time={e.time}
            loc={e.loc}
            desc={e.description}
            eventType={e.eventType}
            participants={e.participants}
            registrationOpen={e.registrationOpen}
            onRegister={() => handleRegisterClick(e.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
