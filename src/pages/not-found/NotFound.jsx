import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-500 max-w-md">
          The page you are looking for doesn't exist
          or has been moved to another location.
        </p>

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all"
        >
          <FiArrowLeft />
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
};

export default NotFound;