import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-[#FA5A00] lg:text-6xl">
              404
            </h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-[#A73C00]">Oops!</span> Page Not Found
            </h6>

            <p className="mb-4 text-center text-gray-500 md:text-lg">
              The page you are looking for does not exist.
            </p>

            <Link
              to="/homepage"
              className="px-5 py-2 rounded-md text-white bg-[#FA5A00] hover:bg-[#FB762B]"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
