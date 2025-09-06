import Navbar from '../ui/Navbar';
import Welcome from '../ui/Welcome';
import About from '../ui/About';
import Models from '../ui/Models';
import Footer from '../ui/Footer';

const LandingPage: React.FC = () => {
    return (
        <div className="bg-background text-primary min-h-screen scroll-smooth">
            <Navbar variant="landing" />
            <div className="container mx-auto px-4">
                <Welcome />
                <About />
                <Models />
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;