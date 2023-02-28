import ButtonPrimary from "components/Button/ButtonPrimary";
import Header from "components/Layout/Header";
import Footer from "container/Footer";
import React, { FC, useState } from "react";
import Marquee from "react-fast-marquee";
import PopupContent from "../../components/Popup/newsletter";

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
      style={{ backgroundImage: "url(/bg.png)" }}
      className={`nc-HomePage h-full ${className}`}
      data-nc-id="HomePage"
    >
      <div
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundPosition: "left",
          height: "669px",
        }}
      >
        <Header />
        <div className="px-50 hero-banner relative">
          <div>
            <h1 className="text-7xl font-bold text-[#fff]">
              Compliance Solutions
            </h1>
            <h1 className="text-7xl font-bold text-[#4B8CCB] mb-3">
              Putting You in Control
            </h1>
            <p className='text-[#FFFFFF75] "' style={{ fontSize: "16px" }}>
              Advisionary is a compliance consultancy firm that helps businesses
              in the payments, e-money, and crypto sectors ensure compliance
            </p>
            <p className='text-[#FFFFFF75] "' style={{ fontSize: "16px" }}>
              with relevant laws and regulations. Our team includes experienced
              consultants, entrepreneurs, lawyers, and former in-house
              compliance experts.
            </p>
            <p className='text-[#FFFFFF75] "' style={{ fontSize: "16px" }}>
              We offer tailored, practical solutions to meet the unique needs of
              our clients and stay up-to-date with the latest developments in
              the compliance field. <br></br> Whether you are a start-up or an
              established business, we are here to listen to your ideas, ensure
              all your projects are complying with regulations, <br></br>and
              support you on your journey to success.
            </p>
            <ButtonPrimary className="mt-10 px-8 font-hellix-light">
              Get in touch
            </ButtonPrimary>
          </div>
          <img src="/images/bubble.svg" className="banner-bubble" />
        </div>
      </div>
      <section className="what-we-do-section bg-black">
        <div className="px-32">
          <div className="py-5">
            <div className="pb-0.5 pt-3">
              <h1 className="text-[#fff] font-bold text-6xl">What We Do</h1>
            </div>
            <div className="pt-0 pb-10">
              <span className="text-[#FFFFFF75] font-hellix-light">
                Compliance as a service
              </span>
            </div>
          </div>

          <div className="mt-12 flex justify-between ">
            <div className="flex flex-col pr-16">
              <div className="logo_sm mb-4">
                <img src="/images/compliance-service.png" alt="service" />
              </div>
              <div className="mb-4">
                <span className="text-[1.375rem] font-medium text-[#fff] font-hellix-light">
                  Automated compliance solution{" "}
                </span>
              </div>
              <div>
                <span className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light">
                  Unintentionally turned from an entrepreneur to a compliance
                  expert? We take over your AML special department or the whole
                  risk & compliance department.
                </span>
              </div>
            </div>
            <div className="flex flex-col pr-16">
              <div className="logo_sm mb-4">
                <img src="/images/compliance-platform.png" alt="compliance" />
              </div>
              <div className="mb-4">
                <span className="text-[1.375rem] font-medium text-[#fff] font-hellix-light">
                  Compliance shop
                </span>
              </div>
              <div>
                <span className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light">
                  What if drafting your policies becomes as easy as one click?
                  Directly redirection to our shop
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="what-we-do-bottom-bg-img-wrapper">
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
      <section className="linear-blue">
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
