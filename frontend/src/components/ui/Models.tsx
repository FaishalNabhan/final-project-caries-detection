import yolo from '../../assets/yolo_detection.jpg';
import cnn from '../../assets/cnn_classification.png';

const Models: React.FC = () => {
    return (
        <div id="models" className="text-center mb-36">
            <h1 className="mt-5 mb-3 flex items-center justify-center gap-2 text-secondary font-medium">
                Our Detection Process
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">YOLO + CNN Pipeline</h1>
            <p className="my-4 max-w-3xl mx-auto text-lg">
                Our system uses YOLO for precise tooth detection and bounding box generation, followed by cropping the detected regions. Then, a CNN model classifies the caries condition in each cropped tooth image. This two-stage approach ensures accurate localization and classification of dental caries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <h3 className="text-2xl font-semibold mb-4">Step 1: YOLO Detection</h3>
                    <p className="text-gray-600 mb-4">YOLO detects teeth in the panoramic radiograph and generates bounding boxes.</p>
                    <img src={yolo} alt="YOLO Detection" className="max-w-full h-auto rounded" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <h3 className="text-2xl font-semibold mb-4">Step 2: CNN Classification</h3>
                    <p className="text-gray-600 mb-4">Cropped tooth images are fed into CNN for caries type classification.</p>
                    <img src={cnn} alt="CNN Classification" className="max-w-full h-auto rounded" />
                </div>
            </div>
            <p className="mt-6 text-lg">This pipeline achieves high accuracy in detecting and classifying dental caries, outperforming traditional methods.</p>
        </div>
    );
};

export default Models;