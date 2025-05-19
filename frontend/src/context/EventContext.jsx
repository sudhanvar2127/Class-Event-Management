import React from "react";
import { createContext, useState } from "react";
import { eventsData } from "../assets/assets"; // import your events array

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(eventsData);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};
