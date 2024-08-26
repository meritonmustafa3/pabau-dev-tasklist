import { Booking } from "./getBookings";

export async function getSingleBooking(
  id?: number
): Promise<Booking | undefined> {
  const res = await fetch(
    `http://host.docker.internal:5000/api/bookings/${id}`,
    {
      cache: "no-store",
      mode: "no-cors",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
