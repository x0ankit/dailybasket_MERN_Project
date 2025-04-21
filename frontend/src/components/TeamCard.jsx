import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ image, name, role, bio }) => {
  return (
    <div className="group flex flex-col items-center justify-between p-6 text-center bg-white border border-gray-200 rounded-2xl shadow-sm w-72 h-96 transition-all duration-300 hover:bg-primary hover:border-primary-dull">
      {/* Image */}
      <img
        className="w-24 h-24 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
        src={image}
        alt={name}
      />

      {/* Name & Role */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-white mt-4">{name}</h2>
        <p className="text-sm text-gray-500 group-hover:text-white/90">{role}</p>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-400 group-hover:text-white/70 px-4 mt-2 flex-grow">
        {bio}
      </p>

      {/* Social Icons */}
      <div className="flex items-center justify-center space-x-4 mt-4 text-gray-400 group-hover:text-white text-lg transition-colors duration-300">
        <FaLinkedin  className="hover:text-blue-300 cursor-pointer" />
        <FaTwitter className="hover:text-blue-300 cursor-pointer" />
        <FaEnvelope className="hover:text-blue-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default TeamCard;