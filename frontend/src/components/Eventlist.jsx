import React from "react";
import { Link } from "react-router-dom";

const Eventlist = ({
  id,
  image,
  title,
  desc,
  date,
  time,
  loc,
  eventType,
  participants,
  onRegister,
  registrationOpen,
}) => {
  return (
    <div className="text-gray-700 border rounded-lg shadow-md overflow-hidden p-4">
      <div className="overflow-hidden mb-3">
        <Link to={`/event/${id}`}>
          <img
            src={image}
            className="hover:scale-110 transition-transform duration-300 ease-in-out w-full h-40 object-cover rounded"
            alt={title}
          />
        </Link>
      </div>

      <Link to={`/event/${id}`}>
        <p className="text-xl font-semibold hover:underline">{title}</p>
      </Link>

      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-sm text-gray-500">{time}</p>
      <p className="text-sm text-gray-500">{loc}</p>
      <p className="text-sm text-gray-500">{eventType}</p>
      <p className="text-sm text-gray-500">Participants: {participants}</p>
      <p className="text-gray-500 my-2">{desc}</p>

      {registrationOpen && onRegister && (
        <button
          onClick={onRegister}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-black transition mt-3"
        >
          Register
        </button>
      )}
    </div>
  );
};

export default Eventlist;