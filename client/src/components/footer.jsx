import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-700 p-1 fixed bottom-0 w-full flex flex-row justify-center space-x-7 text-sm items-center">
      <p>&copy; 2023 R3Plastic. All rights reserved.</p>
      <nav className="my-4">
        <ul className="flex flex-row space-x-4">
          <li>
            <a href="/terms"  className='hover:underline text-white'>Terms of Service</a>
          </li>
          <li>
            <a href="/privacy"  className='hover:underline text-white'>Privacy Policy</a>
          </li>
          <li>
            <a href="https://github.com/towel-cool/R3Plastic"  className='hover:underline text-white'> GitHub</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
