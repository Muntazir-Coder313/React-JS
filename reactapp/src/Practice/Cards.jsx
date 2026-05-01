import React from 'react'

function Cards({ data }) {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-16 px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-white tracking-tight">
          Explore Pakistan 🇵🇰
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Discover the most beautiful destinations
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {data.map((tour) => (
          <div
            key={tour.id}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
          >
            {/* Image */}
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Glass Content */}
            <div className="absolute bottom-0 w-full p-5 backdrop-blur-md bg-white/10 border-t border-white/20">
              
              <p className="text-xs text-gray-300 tracking-wide">
                📍 {tour.location}
              </p>

              <h2 className="text-xl font-bold text-white mt-1">
                {tour.title}
              </h2>

              <button className="mt-3 w-full py-2 text-sm font-semibold bg-white text-black rounded-xl hover:bg-gray-200 transition duration-300">
                View Tour →
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
    </>
  )
}

export default Cards    