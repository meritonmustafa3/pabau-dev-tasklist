import { Booking } from "../api/getBookings";
import { SingleBooking } from "./SingleBooking";

export function Bookings({ bookings }: { bookings?: Booking[] }) {
  if (!bookings) {
    return (
      <div className="flex items-center justify-center ">
        No bookings found!
      </div>
    );
  }

  {
    return bookings?.map((item) => <SingleBooking key={item.id} {...item} />);
  }
}
