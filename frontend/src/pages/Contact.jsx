import React from "react";
import TeamCard from "../components/TeamCard";
import manImage from '../assets/man.png'

const team = [
  {
    image: manImage,
    name: "Raj Kumar",
    role: "Content Creator",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  {
    image: manImage,
    name: "Divyanshu Vats",
    role: "Content Writer",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  {
    image: manImage,
    name: "Adarsh Chand",
    role: "Content Marketing",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  {
    image: manImage,
    name: "Saurav Raj",
    role: "Content Marketing",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  {
    image: manImage,
    name: "Ankit Raj",
    role: "Content Marketing",
    bio: "Lorem Ipsum is simply dummy text of the printing"
  },
  
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Meet Our Team  <span className="text-primary cursor-pointer" > DEMON_RANGERS</span>
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