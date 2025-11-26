import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-green-50 px-4">
      <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-10 max-w-xl w-full transition-transform duration-300 ease-in-out transform hover:scale-[1.01]">
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="w-24 h-24 text-teal-600 drop-shadow-lg mb-6" />
          <h1 className="text-4xl font-extrabold text-teal-600 mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-700 text-center leading-relaxed max-w-md">
            Your appointment has been successfully booked. Our medical team will contact you soon to confirm the details.
          </p>

          <div className="w-full border-t mt-8 mb-4 border-gray-200"></div>

          <div className="text-sm text-gray-500 text-center mb-6">
            Need to make changes? Feel free to get in touch or revisit the appointment page.
          </div>

          <button
            onClick={() => navigate("/")}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
