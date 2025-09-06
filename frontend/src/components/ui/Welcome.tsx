import dentalAnimation from '../../assets/isometric-dental-care-concept.png';

const Welcome: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center mb-36">
            <div className="md:w-1/2 my-5">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Caries Detection App
                </h1>
                <p className="mt-4 text-xl">
                    Using advanced AI with YOLO for tooth detection and CNN for caries classification, identify tooth decay types accurately and efficiently.
                </p>
                <a
                    href="/predict"
                    className="mt-4 inline-block bg-[#6ebafe] text-primary px-6 py-3 rounded hover:bg-[#64aae7]"
                >
                    Get Started
                </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img src={dentalAnimation} alt="Welcome" className="max-w-128 h-auto" />
            </div>
        </div>
    );
};

export default Welcome;