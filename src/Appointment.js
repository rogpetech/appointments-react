import React from "react";

const appoimentTimeOfDay = startsAt => {
  const [hour, minute] = new Date(startsAt)
    .toTimeString()
    .split(":");

    return `${hour}:${minute}`;
}

export const Appointment = ({ customer }) => (
  <div>{customer.firstName}</div>
);

export const AppointmentsDayView = (
  { appointments }
 ) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appointment) => (
        <li key={appointment.startsAt}>
          { appoimentTimeOfDay(appointment.startsAt) }
        </li>
      ))}
    </ol>
  </div>
)