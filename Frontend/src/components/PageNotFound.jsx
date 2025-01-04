import React from 'react';

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl font-semibold text-gray-800 mt-4">Page Not Found</p>
    </div>
  );
}

export default PageNotFound;
