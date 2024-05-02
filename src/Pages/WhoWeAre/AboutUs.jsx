import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const AboutUs = () => {
  const [showOverlay, setShowOverlay] = React.useState(false);

  return (
    <div className="bg-black relative  ">
      {showOverlay && <div className="fixed inset-0 bg-black opacity-50 z-20"></div>}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <Navbar setShowOverlay={setShowOverlay} />
      </nav>

      <div className="max-w-[1400px] mx-auto">
        <div className="font-helvetica-neue text-white top-20 absolute inset-x-0 flex justify-center ">
          <div className="grid place-items-center text-[232px] tracking-tighter">Who we are</div>
        </div>
        <img src="/HeroAboutUs.png" alt="AboutUs" className="pt-20 " />
      </div>

      <div className="h-[126px]"></div>

      <div className="mx-15 text-white">
        <div className="flex justify-between">
          <div className="text-[232px] tracking-tighter font-helvetica-neue">2020</div>
          <div className="w-[700px] pt-5 text-[25px] font-thin tracking-normal leading-10 ">
            In a bold move, a humble point of sales and IT consulting company founded
          </div>
        </div>
        <div className="h-[120px6]"></div>
        <div className="flex justify-between">
          <div className="w-[700px] pt-5 text-[25px] font-thin tracking-normal leading-10 ">
            Our new identity marks a pivotal shift towards revolutionizing HR through the power of
            AI and Big Data, igniting a journey of transformation and innovation.
          </div>
          <div className="text-[232px] tracking-tighter font-helvetica-neue">2024</div>
        </div>
      </div>

      <div className="h-[263px]"></div>

      <div className="mx-15 text-white">
        <div className="text-center text-[18px] pb-6 font-medium">
          Experience the Impact of Our Collaborations
        </div>
        <div className="text-[52px] font-extralight text-center leading-tight">
          We invite you to explore the tangible outcomes of our client engagements. Each project in
          our portfolio exemplifies the depth of our expertise, the strength of our partnerships,
          and the transformative power of our solutions.
        </div>
      </div>

      <div className="h-[263px]"></div>

      <div className="mx-24 text-neutral-100">
        <div>
          <div className="text-center text-[76px] leading-none">
            Transforming the financial sector through our top-notch IT manpower
          </div>
          <div className="h-[138px]"></div>
          <div className="flex place-content-center ">
            <div>
              <img src="/clients/Mandiri.png" alt="" />
            </div>
            <div className="w-[1px] mx-4 bg-neutral-600 "></div>
            <div>
              <img src="/clients/KB Bukopin.png" alt="" />
            </div>
          </div>
          <div className="text-center text-[16px] pt-6 font-extralight">
            We are at the forefront, providing advanced technology solutions that ensure operational
            smoothness and enhance customer experiences.
          </div>
        </div>
        <div className="h-[300px]"></div>
        <div>
          <div className="text-center text-[76px] leading-none">
            Boosting efficiency and innovation in the online marketplace
          </div>
          <div className="h-[138px]"></div>
          <div className="flex place-content-center ">
            <div>
              <img src="/clients/Olx.png" alt="" />
            </div>
          </div>
          <div className="text-center text-[16px] pt-6 font-extralight">
            Together with OLX, we supply IT talents that help them remain the platform of choice for
            millions of users.
          </div>
        </div>
        <div className="h-[300px]"></div>
        <div>
          <div className="text-center text-[76px] leading-none">
            Strengthening the digital foundation of one of Indonesia's largest conglomerates
          </div>
          <div className="h-[138px]"></div>
          <div className="flex place-content-center ">
            <div>
              <img src="/clients/Astra International.png" alt="" />
            </div>
          </div>
          <div className="text-center text-[16px] pt-6 font-extralight">
            Our cooperation creates IT solutions that enable Astra International to continue leading
            in innovation and customer service.
          </div>
        </div>
      </div>

      <div className="h-[126px]"></div>

      <div className="relative mb-32">
        <img src="/ProductContent.png" alt="" />
        <div className="grid place-content-end absolute inset-0 bottom-52 mr-10">
          <div className="w-[512px] h-[108px] text-zinc-300">
            Designed to empower your organization with the tools and insights needed for effective
            human capital management. Let's leverage technology to transform your HR practices,
            driving success through strategic, data-driven human resource management
          </div>
          <div className="text-white mt-3">Discuss now</div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUs;
