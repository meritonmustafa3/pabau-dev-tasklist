import { Booking } from "../api/getBookings";

export function SingleBooking({ id, service, start_time, date }: Booking) {
  return (
    <div className="underline text-md hover:text-blue-500 active:text-purple-500 cursor-pointer">
      {service} on {date} starting at {start_time}
    </div>
  );
}
