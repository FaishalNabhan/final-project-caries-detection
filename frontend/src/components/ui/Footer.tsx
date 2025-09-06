import { Link } from '@tanstack/react-router';
import ScrollLink from './ScrollLink';

const Footer: React.FC = () => {
    return (
        <footer className="mt-24 bg-primary text-primary py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h5 className="text-lg font-bold mb-4">Navigation</h5>
                    <div className="flex flex-col gap-2">
                        <ScrollLink to="models" className="cursor-pointer">
                            Detection Process
                        </ScrollLink>
                        <ScrollLink to="about" className="cursor-pointer">
                            About
                        </ScrollLink>
                        <Link
                            to="/predict"
                            className="inline-block bg-[#6ebafe] text-primary px-4 py-2 rounded hover:bg-[#64aae7]"
                        >
                            Detect
                        </Link>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div>
                    <h5 className="text-lg font-bold mb-4">Contact</h5>
                    <div>
                        <p className="mb-1">+62 812 2528 5929</p>
                        <p>faishalnabhan28@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;