import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../context/EventContext";

const Register = () => {
  const { eventId } = useParams();
  const { events } = useContext(EventContext);
  const [event, setEvent] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const foundEvent = events.find((e) => String(e.id) === eventId);
    if (foundEvent) {
      setEvent(foundEvent);
      const initialParticipants = Array.from({ length: foundEvent.participants }).map(() => ({
        name: "",
        usn: "",
        phone: ""
      }));
      setParticipants(initialParticipants);
    }
  }, [eventId, events]);

  const handleChange = (index, field, value) => {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      teamName,
      participants
    };
    console.log("Registration Data:", finalData);
    alert("Registration submitted successfully!");
  };

  if (!event) {
    return <div className="text-center mt-10 text-red-600">Event not found or loading...</div>;
  }

  return (
    <div>
      <p className="text-3xl font-bold text-center text-blue-800 mb-8">Registration Page</p>
      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden p-6">
        {/* Event Preview */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <img src={event.image} alt={event.title} className="w-64 h-40 object-cover rounded" />
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-blue-700">{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium">Team Name</label>
            <input
              type="text"
              required
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter team name"
            />
          </div>

          {participants.map((participant, index) => (
            <div key={index} className="border p-4 rounded-lg bg-gray-50 shadow">
              <p className="font-semibold text-gray-700 mb-2">Participant {index + 1}</p>

              <div className="mb-2">
                <label className="block font-medium">Student Name</label>
                <input
                  type="text"
                  required
                  value={participant.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
                  placeholder="Enter student name"
                />
              </div>

              <div className="mb-2">
                <label className="block font-medium">USN</label>
                <input
                  type="text"
                  required
                  value={participant.usn}
                  onChange={(e) => handleChange(index, "usn", e.target.value)}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
                  placeholder="Enter USN"
                />
              </div>

              <div className="mb-2">
                <label className="block font-medium">Mobile Number</label>
                <input
                  type="tel"
                  required
                  value={participant.phone}
                  onChange={(e) => handleChange(index, "phone", e.target.value)}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;