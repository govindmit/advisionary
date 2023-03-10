import ButtonPrimary from "components/Button/ButtonPrimary";
import Header from "components/Layout/Header";
import Footer from "container/Footer";
import React, { FC, useState } from "react";
import Marquee from "react-fast-marquee";
import MailchimpForm from "../../components/Popup/newsletter";
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

      {isOpen && <MailchimpForm onClose={togglePopup} />}
    </div>
  );
}

const Home: FC<PageHomeProps> = ({ className }) => {
  return (
    <div
      style={{
        background: "url(/images/bg-inner.jpg) no-repeat 0 0 / 100% 100%",
      }}
      className={`nc-HomePage h-full ${className}`}
      data-nc-id="HomePage"
    >
      <div
        style={{
          background: "url(/images/banner-bg.png) no-repeat 0 0 / 100%",
          backgroundPosition: "left",
          height: "100vh",
        }}
      >
        <Header />
        <div className="px-50 hero-banner relative">
          <div className="w-full xl:w-2/3">
            <h1 className="xl:text-6xl 2xl:text-7xl font-bold text-[#fff]">
              Compliance Solutions
            </h1>
            <h1 className="xl:text-4xl 2xl:text-5xl font-bold text-[#702172] mb-3">
              Putting You in Control
            </h1>
            <p
              className='text-[#ccc] "'
              style={{ fontSize: "17px", lineHeight: "34px" }}
            >
              Advisionary is a compliance consultancy firm that helps businesses
              in the payments, e-money, and crypto sectors ensure compliance
              with relevant laws and regulations. Our team includes experienced
              consultants, entrepreneurs, lawyers, and former in-house
              compliance experts. We offer tailored, practical solutions to meet
              the unique needs of our clients and stay up-to-date with the
              latest developments in the compliance field. Whether you are a
              start-up or an established business, we are here to listen to your
              ideas, ensure all your projects are complying with regulations,
              and support you on your journey to success.
            </p>

            <ButtonPrimary className="mt-10 px-8 font-hellix-light">
              Get in touch
            </ButtonPrimary>
          </div>
          {/* <img src="/images/bubble.svg" className="banner-bubble opacity-40" />
          <img src="/images/purple.png" className="banner-grad" /> */}
        </div>
      </div>
      <section
        className="what-we-do-section bg-black"
        style={{
          background: "none",
        }}
      >
        <div className="xl:px-12 2xl:px-32 min-h-[100vh]">
          <div className="flex w-full  ">
            <div className="w-full mt-8">
              <div className="w-full relative">
                <div className="pb-2">
                  <span className="text-[#FFFFFF] font-hellix-light text-xl pb-4 inline-block mt-8">
                    Our Approach
                  </span>
                  <p className="text-[#ccc] text-lg font-hellix-light">
                    Advisionary is your go-to source for compliance solutions in
                    the payments, e-money, and crypto sectors. Our team of
                    experienced professionals includes consultants,
                    entrepreneurs, lawyers, and former in-house compliance
                    experts, and we offer a range of tailor-made tools and
                    services, as well as automated solutions, to help businesses
                    in these sectors ensure compliance with relevant laws and
                    regulations. With Advisionary, you can level up your
                    compliance efforts and protect your business from potential
                    risks.
                  </p>
                </div>
                <Multiacc />
                {/* <img
                  src="/images/purple.png"
                  className="banner-grad"
                  style={{ right: "-500px", top: "-200px", width: "90%" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="what-we-do-bottom-bg-img-wrapper linear-purple pt-[60px] mt-[80px]">
          <Marquee gradient={false} speed={60} direction={"right"}>
            <div>
              <h1 className="text-white text-4xl text-[76px]">
                &nbsp;&nbsp;&nbsp; We help you to <span>work smarter</span>, not
                harder.
              </h1>
            </div>
          </Marquee>
          {/* <Marquee gradient={false} speed={60} direction={"left"}>
            <div>
              <h1 className="text-white text-7xl text-[76px]">
                Welcome to compliance made easy.
              </h1>
            </div>
          </Marquee> */}
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
      {/* <section className=" contact-form">
        <div className="p-24 xl:px-12 2xl:px-32">
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
      </section> */}
      <section className="newsletter ">
        <div className="p-20 xl:px-12 2xl:px-32 flex items-center flex-wrap xl:flex-nowrap">
          <div className="w-1/2">
            <h2 className="text-[#fff] font-bold text-6xl">Newsletter</h2>
            <p className="text-white font-light mt-4 font-hellix-light">
              Subscribe to our newsletter for weekly exclusive content
            </p>
          </div>
          <div className=" mb-4 w-1/2 text-right">
            <Popup />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
