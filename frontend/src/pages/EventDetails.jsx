import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";

const EventDetails = () => {
  const { eventId } = useParams();
  const { events } = useContext(EventContext);
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundEvent = events.find((e) => e.id === parseInt(eventId));
    setEvent(foundEvent);
  }, [eventId, events]);

  if (!event) {
    return (
      <div className="text-center mt-10 text-red-600">
        Event not found or loading...
      </div>
    );
  }

  const handleRegister = () => {
    navigate(`/register/${eventId}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <p className="text-3xl font-bold text-center text-blue-800 mb-8">
        Event Details
      </p>
      <img
        src={event.image}
        alt={event.title}
        className="w-full rounded mb-4"
      />
      <h2 className="text-3xl font-bold mb-2 text-blue-800">{event.title}</h2>

      <p className="text-gray-700 mb-2">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Time:</strong> {event.time}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Location:</strong> {event.location}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Event Type:</strong> {event.eventType}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Participants:</strong> {event.participants}
      </p>

      <p className="text-gray-800 mt-4">
        <strong>Description:</strong>
        <br />
        {event.description}
      </p>

      {event.registrationOpen && (
        <button
          onClick={handleRegister}
          className="mt-6 px-6 py-2 bg-gray-600 text-white rounded hover:bg-black transition"
        >
          Register Now
        </button>
      )}
    </div>
  );
};

export default EventDetails;