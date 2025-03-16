import { FaTicketAlt } from "react-icons/fa";
import { IoCalendarOutline, IoLocationOutline, IoTimeOutline } from "react-icons/io5";

export default function EventPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center p-6">
      <div className="bg-gray-100 w-full max-w-4xl">
        

        {/* Event Details */}
        <div className="p-6">
          <div className="bg-gray-300 h-48 flex items-center justify-center rounded-lg mb-4">
            <span className="text-gray-500 text-2xl">[Event Image]</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Title</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div className="flex items-center text-gray-700 mb-2 sm:mb-0">
              <IoCalendarOutline className="mr-2 text-xl" /> <span>Day, Date</span>
            </div>
            <div className="flex items-center text-gray-700 mb-2 sm:mb-0">
              <IoTimeOutline className="mr-2 text-xl" /> <span>Time</span>
            </div>
            <div className="flex items-center text-gray-700">
              <IoLocationOutline className="mr-2 text-xl" /> <span>Address</span>
            </div>
          </div>
          <a href="#" className="text-blue-600 hover:underline">+ Add to Calendar</a>
        </div>

        {/* Footer */}
        <div className="p-6 flex justify-between items-center border-t">
          <div>
            <h3 className="font-bold text-gray-700">Hosted by</h3>
            <p className="text-gray-600">Organizer Name</p>
          </div>
          <button className="bg-yellow-500 flex items-center px-6 py-2 rounded-lg text-black font-bold hover:bg-yellow-600 cursor-pointer">
            <FaTicketAlt className="mr-2" /> Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
