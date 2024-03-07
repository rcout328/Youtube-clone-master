
import { Link } from 'react-router-dom';
import { SignInButton } from '@clerk/clerk-react';
const Navbar1 = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 shadow-lg">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        {/* Logo and Home Link */}
        <Link to="/" className="text-4xl font-bold text-white hover:text-gray-300">
          YouTube Clone
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link to="/search" className="text-white hover:text-gray-300">Search</Link></li>
            <li><Link to="/games" className="text-white hover:text-gray-300">Games</Link></li>
            <li><Link to="/music" className="text-white hover:text-gray-300">Music</Link></li>
            <li><Link to="/sports" className="text-white hover:text-gray-300">Sports</Link></li>
            <SignInButton />
            {/* Add additional categories as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar1;
