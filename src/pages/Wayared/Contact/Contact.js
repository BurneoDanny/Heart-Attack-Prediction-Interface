import React from "react";

const teamMembers = [
    {
        name: "Jared Castillo Chiang",
        role: "Student",
        email: "jarecast@espol.edu.ec",
        phone: "+593 993226877",
        imageUrl: "path_to_john_image.jpg",
    },
    {
        name: "Ricardo Molina Coronel",
        role: "Student",
        email: "ridumoli@espol.edu.ec",
        phone: "+593 988975302",
        imageUrl: "path_to_jane_image.jpg",
    },
    {
        name: "Danny Burneo Espin",
        role: "Student",
        email: "djburneo@espol.edu.ec",
        phone: "+593 996894747",
        imageUrl: "path_to_jane_image.jpg",
    },
    
];

function Contact() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-12">
            <h2 className="text-4xl font-bold text-center mb-10">Our Team</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-xs">
                        <img
                            src={member.imageUrl}
                            alt={`${member.name}'s photo`}
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-center mb-2">{member.name}</h3>
                        <p className="text-center text-gray-400 mb-2">{member.role}</p>
                        <p className="text-center text-gray-300">
                            <strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-blue-400">{member.email}</a>
                        </p>
                        <p className="text-center text-gray-300">
                            <strong>Phone:</strong> <a href={`tel:${member.phone}`} className="text-blue-400">{member.phone}</a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;
