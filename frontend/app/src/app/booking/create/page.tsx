"use client";

import { createBooking } from "@/app/api/createBooking";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-white px-2 py-1.5 text-black rounded-md"
      type="submit"
      aria-disabled={pending}
    >
      Add
    </button>
  );
}

function CreateBookingForm() {
  return (
    <div className="flex h-screen w-full items-center justify-center m-auto">
      <form
        className="flex flex-col gap-3 items-center justify-center"
        action={createBooking}
      >
        <label htmlFor="todo">Enter Booking Details!</label>

        <div className="flex flex-col items-start">
          <p>Service name</p>
          <input
            className="text-black"
            type="text"
            id="service"
            name="service"
            required
          />
        </div>

        <div className="flex flex-col items-start">
          <p>Doctor name</p>
          <input
            className="text-black"
            type="text"
            id="doctor_name"
            name="doctor_name"
            required
          />
        </div>
        <div className="flex flex-col items-start">
          <p>Start time</p>
          <input
            className="text-black"
            type="time"
            id="start_time"
            name="start_time"
            required
          />
        </div>

        <div className="flex flex-col items-start">
          <p>End time</p>
          <input
            className="text-black"
            type="time"
            id="end_time"
            name="end_time"
            required
          />
        </div>

        <div className="flex flex-col items-start">
          <p>Date</p>
          <input
            className="text-black"
            type="date"
            id="date"
            name="date"
            required
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}

export default CreateBookingForm;
