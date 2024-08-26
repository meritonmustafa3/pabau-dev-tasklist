import { Booking } from "../api/getBookings";
import Link from "next/link";
export function SingleBooking({ id, service, start_time, date }: Booking) {
  const utcDate = new Date(date);

  const formattedDate = utcDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Link
      href={`booking/${id}`}
      className="underline text-md hover:text-blue-500 active:text-purple-500 cursor-pointer"
    >
      {service} on {formattedDate} starting at {start_time}
    </Link>
  );
}
