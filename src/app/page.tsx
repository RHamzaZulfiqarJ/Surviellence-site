import CCard from "@/Utilities/Card";
import Form from "@/Utilities/Form";
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
            Upgrade your CCTV with our AI solution for smarter, real-time surveillance. Enjoy
            features like breach detection, parking management, and vehicle monitoring all in one
            easy-to-deploy device.
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center m-4">
        <CCard
          title="Seamless Integration"
          text="Upgrade your CCTV effortlessly with your plug-and-play AI device. No rewiring or camera replacements needed."
        />
        <CCard
          title="Edge AI Power"
          text="Enjoy real-time surveillance with our edge AI device. No need for cloud processing, ensuring privacy and security."
        />
        <CCard
          title="Smart Surveillance"
          text="Manage parking spaces, detect breaches, and monitor vehicles with our AI solution. All in one device."
        />
      </div>

      <div className="m-4">
        <div className="text-4xl text-white font-bold ml-4">Add a Feedback</div>
        <Form />
      </div>

    </div>
  );
};

export default page;
