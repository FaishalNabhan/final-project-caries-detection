import enamel from '../../assets/enamel.png';
import dentin from '../../assets/dentin.png';
import pulp from '../../assets/pulp.png';

const About: React.FC = () => {
    return (
        <div id="about" className="text-center mb-36">
            <h1 className="text-4xl md:text-5xl font-bold">Understanding Dental Caries</h1>
            <p className="my-4 max-w-3xl mx-auto text-lg">
                Dental caries, commonly known as tooth decay, is a prevalent oral health issue affecting people of all ages. It occurs when bacteria in the mouth produce acids that erode tooth enamel. Early detection is crucial to prevent progression to more severe stages. Our AI-powered tool uses cutting-edge technology to identify caries types accurately.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <img src={enamel} alt="Enamel" className="w-48 h-48 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Enamel Decay</h3>
                    <p className="mt-2 text-gray-600">Initial stage affecting the outer layer of the tooth.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <img src={dentin} alt="Dentin" className="w-48 h-48 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Dentin Decay</h3>
                    <p className="mt-2 text-gray-600">Progresses to the softer layer beneath the enamel.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                    <img src={pulp} alt="Pulp" className="w-48 h-48 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Pulp Decay</h3>
                    <p className="mt-2 text-gray-600">Advanced stage reaching the tooth's nerve center.</p>
                </div>
            </div>
        </div>
    );
};

export default About;