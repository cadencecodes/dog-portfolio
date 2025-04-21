import { Link } from 'react-router-dom';
import pawIcon from '../assets/paw-icon.png';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#FFB6B9]">
      <img src={pawIcon} alt="paw" className="h-10" />
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
