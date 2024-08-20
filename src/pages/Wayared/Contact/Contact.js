import React from "react";
import dannyImage from "../../../assets/images/danny.jpg";
import jaredImage from "../../../assets/images/jared.png";
import ricardoImage from "../../../assets/images/ricardo.jpg";
import dannyQR from "assets/images/dannyQR.jpg";
import jaredQR from "assets/images/jareedQR.jpg";
import ricardoQR from "assets/images/ricardoQR.jpg";
const teamMembers = [
  {
    name: "Jared Castillo Chiang",
    role: "Student",
    email: "jarecast@espol.edu.ec",
    phone: "+593 993226877",
    imageUrl: jaredImage,
    qr: jaredQR,
  },
  {
    name: "Ricardo Molina Coronel",
    role: "Student",
    email: "ridumoli@espol.edu.ec",
    phone: "+593 988975302",
    imageUrl: ricardoImage,
    qr: ricardoQR,
  },
  {
    name: "Danny Burneo Espin",
    role: "Student",
    email: "djburneo@espol.edu.ec",
    phone: "+593 996894747",
    imageUrl: dannyImage,
    qr: dannyQR,
  },
];

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <h2 className="text-4xl font-bold text-center mb-24">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-xl"
          >
            <img
              src={member.imageUrl}
              alt={`${member.name}`}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-center mb-2">
              {member.name}
            </h3>
            <p className="text-center text-gray-400 mb-2">{member.role}</p>
            <p className="text-center text-gray-300">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${member.email}`} className="text-blue-400">
                {member.email}
              </a>
            </p>
            <p className="text-center text-gray-300">
              <strong>Phone:</strong>{" "}
              <a href={`tel:${member.phone}`} className="text-blue-400">
                {member.phone}
              </a>
            </p>
            <div>
              <img
                src={member.qr}
                alt="WhatsApp QR Code"
                className="w-32 h-32 mx-auto mb-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
