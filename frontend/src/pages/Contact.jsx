import React from "react";
import TeamCard from "../components/TeamCard";

const team = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Raj Kumar",
    role: "Content Creator",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  {
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Divyanshu Vats",
    role: "Content Writer",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Adarsh Chand",
    role: "Content Marketing",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Saurav Raj",
    role: "Content Marketing",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Ankit Raj",
    role: "Content Marketing",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Meet Our Team
      </h1>
      <div className="flex flex-wrap justify-center gap-6 items-stretch">
        {team.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Contact;