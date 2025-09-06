import { Link } from '@tanstack/react-router';
import ScrollLink from './ScrollLink';

interface NavbarProps {
    variant: 'landing' | 'predict';
}

const Navbar: React.FC<NavbarProps> = ({ variant }) => {
    return (
        <nav className="sticky top-0 z-10 py-4 bg-[#6ebafe] shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-primary">
                    Caries Detection
                </Link>
                <ul className="flex space-x-6">
                    {variant === 'landing' && (
                        <>
                            <li>
                                <ScrollLink to="about" className="text-primary font-medium cursor-pointer">
                                    About
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="models" className="text-primary font-medium cursor-pointer">
                                    Models
                                </ScrollLink>
                            </li>
                        </>
                    )}
                    <li>
                        <Link
                            to="/predict"
                            className="bg-[#6ebafe] text-primary px-4 py-2 rounded font-medium hover:bg-[#64aae7]"
                        >
                            Detect
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;