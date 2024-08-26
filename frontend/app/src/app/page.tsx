import Link from "next/link";
import { getBookings } from "./api/getBookings";
import { SingleBooking } from "./components/SingleBooking";

const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen w-full">
      <h1 className="flex items-center justify-center text-xl mt-2">
        Bookings
      </h1>
      {bookings?.map((item) => (
        <SingleBooking key={item.id} {...item} />
      ))}

      <Link
        href="/booking/create"
        className="mt-5 bg-white rounded-md px-2 py-1.5 text-sm text-black"
      >
        Create Booking
      </Link>
    </div>
  );
};

export default Home;
