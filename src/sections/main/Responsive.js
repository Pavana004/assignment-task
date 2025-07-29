import React from "react";

const ResponsivePage = () => {
  return (
    <div className="min-h-screen bg-red-100">
      {/* Container that changes width based on screen size */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        {/* Content that centers on small screens */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-2rem)]">
          <div
            className="w-full bg-white rounded-lg shadow-md p-6 
                         md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-full"
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:text-3xl md:text-4xl">
              Responsive Page
            </h1>
            <p className="text-gray-600 mb-6">
              This content will be full width on large screens and centered on
              small screens.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-blue-100 p-4 rounded-lg">
                  <h2 className="font-semibold text-blue-800">Item {item}</h2>
                  <p className="text-blue-600">Responsive content</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivePage;
