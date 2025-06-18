"use client";

import React from "react";

const MapEmbed = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/hcPikRvgvmPpzkQs7";

  return (
    <div className="max-w-full mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-[300px] md:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8273918132513!2d85.3469978744447!3d27.72261517617374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19007864ed9d%3A0x30c92e404adb48eb!2sKhushi%20Education%20Center!5e0!3m2!1sen!2snp!4v1750063680347!5m2!1sen!2snp"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Khushi Education Center Location"
          className="border-0"
        />
      </div>

      <div className="p-4 text-center bg-white">
        <p className="mb-4 text-gray-700 font-medium">
          Visit Khushi Education Center at this location.
        </p>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-sky-700 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default MapEmbed;
