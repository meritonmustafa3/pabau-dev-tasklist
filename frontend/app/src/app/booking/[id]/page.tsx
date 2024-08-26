import { getBookings } from "@/app/api/getBookings";
import { getSingleBooking } from "@/app/api/getSingleBooking";
import Link from "next/link";

// This Booking is with [doctor_name] For [service] and it ends on [end_time], You will also leave a Back button, allowing you to go back to the homepage.
async function SingleBooking({ params }: { params: { id: number } }) {
  const singleBooking = await getSingleBooking(params.id);

  console.log("Single Booking", singleBooking);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-3">
      <div>
        This Booking is with {singleBooking.doctor_name} For{" "}
        {singleBooking.service} and it ends on {singleBooking.end_time}
      </div>
      <button className="bg-white rounded-md px-2 py-1.5 text-black">
        <Link href="/">Go Back</Link>
      </button>
    </div>
  );
}

export default SingleBooking;
