import CCard from "@/Utilities/Card";
import Form from "../../Utilities/Form";
import TypewriterEffect from "@/Utilities/Typing";

const page = () => {
  return (
    <div>
      <div className="relative h-screen w-full">
        <img
          className="h-screen w-full object-cover opacity-50"
          src="homepage_background.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-4xl font-bold">AI For Enhanced</div>
          <div className="text-xl mt-4">
            <TypewriterEffect />
          </div>
          <div className="m-10 flex justify-evenly">
            Upgrade your CCTV with our AI solution for smarter, real-time
            surveillance. Enjoy features like breach detection, parking
            management, and vehicle monitoring all in one easy-to-deploy device.
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <img
                src="/cameras.png"
                alt="Camera"
                className="w-12 h-10 object-contain"
              />
              <span className="text-white mt-2">Plug and Play</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/edgeComputing.png"
                alt="AI Power"
                className="w-12 h-10 object-contain"
              />
              <span className="text-white mt-2">
                Edge Computing for Privacy
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/scan.png"
                alt="Smart Monitoring"
                className="w-12 h-10 object-contain"
              />
              <span className="text-white mt-2">Real-time Insights</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/multipleIcon.png"
                alt="Surveillance"
                className="w-12 h-10 object-contain"
              />
              <span className="text-white mt-2">Versatile Applications</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-white pt-8">
        <h2 className="border-2 border-blue-500 rounded-full p-4">
          AI Solutions
        </h2>
      </div>

      <div className="flex flex-wrap justify-center m-4">
        <CCard
          // className={styles.card}
          title="Effortless System Compatibility"
          text="Our solution seamlessly integrates with your existing CCTV infrastructure, eliminating the need for expensive hardware replacements or system overhauls. By leveraging plug-and-play technology, we ensure quick deployment with no disruption to your operations."
        />
        <CCard
          title="Enhanced Privacy with Local Processing"
          text="With all AI computations processed locally using edge computing, your sensitive data never leaves your premises. This approach not only protects your privacy but also ensures faster, more secure operations without relying on external cloud servers."
        />
        <CCard
          title="Instant Intelligence from Live Data"
          text="Our AI transforms live video streams into actionable insights, enabling instant responses to critical events. From detecting safety violations to monitoring production lines, our solution helps you make informed decisions in real-time, improving efficiency and safety."
        />
        <CCard
          title="Wide-Ranging Use Cases"
          text="Our AI is designed to address a wide range of challenges, from monitoring workplace compliance and machinery performance to site inspections. Whether it’s quality control, security, or operational analytics, our system adapts to meet your specific needs."
        />
      </div>

      <div className="m-4">
        <div className="flex items-center justify-center p-4">
          <div className="text-4xl text-white font-bold ml-4">
            Add a Feedback
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default page;
