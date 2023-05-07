import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeContent() {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-green-700 ">
        <Link to="/aboutus">
      <img src="./R3Plastics.png" alt="R3Plastics logo" className="h-[45rem] rounded-full cursor-pointer duration-300 hover:h-[47rem]"  />
      </Link>
    </div>
  );
}
