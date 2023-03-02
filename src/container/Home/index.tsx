import ButtonPrimary from "components/Button/ButtonPrimary";
import Header from "components/Layout/Header";
import Footer from "container/Footer";
import React, { FC, useState } from "react";
import Marquee from "react-fast-marquee";
import PopupContent from "../../components/Popup/newsletter";
import Multiacc from "../../components/according/accordingpro";
export interface PageHomeProps {
  className?: string;
}

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup">
      <button
        onClick={togglePopup}
        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3  ttnc-ButtonPrimary disabled:bg-opacity-70 text-neutral-50 px-8 font-hellix-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
      >
        Subscribe
      </button>

      {isOpen && <PopupContent onClose={togglePopup} />}
    </div>
  );
}

const Home: FC<PageHomeProps> = ({ className }) => {
  return (
    <div
      style={{
        background:
          "#000 linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(16, 29, 66,0.3) 35%, rgba(49,36,77,0.2) 72%, rgba(0, 0, 0,1) 100%)",
      }}
      className={`nc-HomePage h-full ${className}`}
      data-nc-id="HomePage"
    >
      <div
        style={{
          background:
            "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(16, 29, 66,0.3) 35%, rgba(49,36,77,0.3) 65%, rgba(0, 0, 0,1) 100%)",
          backgroundPosition: "left",
          height: "100vh",
        }}
      >
        <Header />
        <div className="px-50 hero-banner relative">
          <div className="w-2/3">
            <h1 className="xl:text-6xl 2xl:text-7xl font-bold text-[#fff]">
              Compliance Solutions
            </h1>
            <h1 className="xl:text-6xl 2xl:text-7xl font-bold text-[#9B7Ae4] mb-3">
              Putting You in Control
            </h1>
            <p className='text-[#FFFFFF75] "' style={{ fontSize: "16px" }}>
              Advisionary is a compliance consultancy firm that helps businesses
              in the payments, e-money, and crypto sectors ensure compliance
              with relevant laws and regulations. Our team includes experienced
              consultants, entrepreneurs, lawyers, and former in-house
              compliance experts. We offer tailored, practical solutions to meet
              the unique needs of our clients and stay up-to-date with the
              latest developments in the compliance field. <br></br> Whether you
              are a start-up or an established business, we are here to listen
              to your ideas, ensure all your projects are complying with
              regulations, <br></br>and support you on your journey to success.
            </p>

            <ButtonPrimary className="mt-10 px-8 font-hellix-light">
              Get in touch
            </ButtonPrimary>
          </div>
          <img src="/images/bubble.svg" className="banner-bubble" />
          <img src="/images/purple.png" className="banner-grad" />
        </div>
      </div>
      <section
        className="what-we-do-section bg-black"
        style={{
          background:
            "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(16, 29, 66,0.3) 35%, rgba(49,36,77,0.3) 65%, rgba(0, 0, 0,1) 100%)",
        }}
      >
        <div className="px-32">
          <div className="flex w-full py-20 flex-wrap">
            <div className="w-96">
              <div className="pb-2">
                <span className="text-[#FFFFFF] font-hellix-light">
                  Our Approach
                </span>
              </div>
              <h2 className="text-[#FFFFFF] font-bold text-6xl">
                The Risk base approach
              </h2>
            </div>
            <div className="w-full flex mt-8">
              <div className="w-4/12">vsdfjsd</div>
              <div className="w-8/12">
                <Multiacc />
              </div>
            </div>
          </div>
        </div>
        <div className="what-we-do-bottom-bg-img-wrapper bg-[#eee] pt-[37px]">
          <Marquee gradient={false} speed={60} direction={"right"}>
            <div>
              <h1 className="text-white text-7xl text-[76px]">
                &nbsp;&nbsp;&nbsp; We help you to <span>work smarter</span>, not
                harder.
              </h1>
            </div>
          </Marquee>
          <Marquee gradient={false} speed={60} direction={"left"}>
            <div>
              <h1 className="text-white text-7xl text-[76px]">
                Welcome to compliance made easy.
              </h1>
            </div>
          </Marquee>
        </div>
      </section>
      {/* <section className='bg-images-case-studies bg-black pt-[110px]'>
        <div className='px-32 mb-10'>
          <div className='flex flex-row justify-between'>
            <div className='py-5'>
              <div className='pb-0.5 pt-3'>
                <h1 className='text-[#fff] font-bold text-6xl'>Case Studies</h1>
              </div>
              <div className='pt-0 pb-10'>
                <span className='text-[#ffffff75] font-hellix-light'>Compliance as a service</span>
              </div>
            </div>
            <div className={`inline-flex items-center text-sm xl:text-base font-normal text-white py-2 px-4 xl:px-5 rounded-full`}>
              <ButtonPrimary className="px-8 font-hellix-light">
                See All
              </ButtonPrimary>
            </div>
          </div>
          <div className='flex flex-row justify-content-between'>
            <div className='basis-1/3 pr-10'>
              <div className='flex justify-center w-[379px] h-[212px] mb-6'  >
                <div>
                  <img src="/images/microsoft.png" alt="microsoft" />
                </div>
              </div>
              <div className='flex flex-row justify-between items-center'>
              <div className='py-3'>
                <h2 className='font-bold text-lg tracking-wider text-[#FFFFFF] font-hellix-light text-[24px]'>Fintech</h2>
              </div>
              <div className='py-3'>
              <div className='date-box flex items-center'>
                <small className='text-[#5B9279] font-hellix-light text-[8.62px]'>May 12, 2022</small>
              </div>
              </div>
              </div>
              <div className='pb-4'>
                <p className='text-[#ffffff75] font-hellix-light'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...
                </p>
              </div>
            </div>
            <div className='basis-1/3 px-10'>
              <div className='flex justify-center w-[379px] h-[212px] mb-6'  >
                <div>
                  <img src="/images/microsoft.png" alt="microsoft" />
                </div>
              </div>
              <div className='flex flex-row justify-between items-center'>
              <div className='py-3'>
                <h2 className='font-bold text-lg tracking-wider text-[#FFFFFF] font-hellix-light text-[24px]'>Crypto Business</h2>
              </div>
              <div className='py-3'>
              <div className='date-box flex items-center'>
                <small className='text-[#5B9279] font-hellix-light text-[8.62px]'>May 12, 2022</small>
              </div>
              </div>
              </div>
              <div className='pb-4'>
                <p className='text-[#ffffff75] font-hellix-light'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...
                </p>
              </div>
            </div>
            <div className='basis-1/3 px-10'>
              <div className='flex justify-center w-[379px] h-[212px] mb-6'  >
                <div>
                  <img src="/images/microsoft.png" alt="microsoft" />
                </div>
              </div>
              <div className='flex flex-row justify-between items-center'>
              <div className='py-3'>
                <h2 className='font-bold text-lg tracking-wider text-[#FFFFFF] font-hellix-light text-[24px]'>Startup</h2>
              </div>
              <div className='py-3'>
              <div className='date-box flex items-center'>
                <small className='text-[#5B9279] font-hellix-light text-[8.62px]'>May 12, 2022</small>
              </div>
              </div>
              </div>
              <div className='pb-4'>
                <p className='text-[#ffffff75] font-hellix-light'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="linear-purple">
        <div className="p-24 px-32">
          <div className="flex justify-between">
            <div>
              <div className="pb-2">
                <span className="text-[#FFFFFF] font-hellix-light">
                  Contact Us
                </span>
              </div>
              <div>
                <h1 className="text-[#FFFFFF] font-bold text-6xl">
                  Make an <br /> Appointment
                </h1>
              </div>
            </div>
            <div style={{ width: "500px" }}>
              <form className="flex flex-col appointment-form">
                <div>
                  <input
                    className="placeholder-color"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    className="placeholder-color"
                    type="text"
                    placeholder="Your email"
                  />
                </div>
                <div className="flex flex-row justify-between"></div>
                <div>
                  <textarea
                    className="placeholder-color"
                    placeholder="Message"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md ml-[11px] font-hellix-light"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="p-20 px-32 flex items-center">
          <div className="w-1/2">
            <h2 className="text-[#fff] font-bold text-6xl">Newsletter</h2>
            <p className="text-white font-light mt-4 font-hellix-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
          <div className="w-1/2 text-right">
            <Popup />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
