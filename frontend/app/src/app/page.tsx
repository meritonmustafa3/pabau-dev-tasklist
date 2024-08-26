import { getBookings } from "./api/getBookings";
import { getSingleBooking } from "./api/getSingleBooking";
import { Bookings } from "./components/Bookings";
import { SingleBooking } from "./components/SingleBooking";

// Task 1: (read)
// Create a component that will list all of bookings as separate links - showing like:
// A Booking on [date] starting at [start_time]
// These links, if clicked, they should lead to another page example: /booking/[id]: and inside this page you will display the information:
// This Booking is with [doctor_name] For [service] and it ends on [end_time], You will also leave a Back button, allowing you to go back to the homepage.

// Task 2: (write)
// Create a page that will allow the user to use a form to make a POST request to the endpoint /api/bookings;
// You can derive the required input forms from your backend folder where your endpoint is expecting the parameters to
// successfully insert a row into the bookings table.

// If booking is inserted successfully then redirect back to the main page where all bookings are listed from Task 1.
// If booking is not inserted due to errors, display all relevant errors in human readable format.

// TypeScript strictness is set to false, but if you complete tasks fully type safe you will get maximum points for task completion.

// Any UI and/or Design implementations will be counted as bonus points for your frontend skills.

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
    </div>
  );
};

export default Home;
