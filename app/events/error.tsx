"use client"
import Link from 'next/link';

const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600">
        {statusCode ? `Error ${statusCode}` : 'An Error Occurred'}
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        {statusCode === 404
          ? 'Sorry, the page you are looking for could not be found.'
          : 'Something went wrong. Please try again later.'}
      </p>
      <Link href="/" legacyBehavior>
        <a className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Go back home
        </a>
      </Link>
    </div>
  );
};

export default ErrorPage;
