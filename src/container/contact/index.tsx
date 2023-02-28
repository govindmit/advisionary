import ButtonPrimary from "components/Button/ButtonPrimary";
import Header from "components/Layout/Header";
import Footer from "container/Footer";
import React, { FC, useState } from "react";
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
const Contact: FC<PageHomeProps> = ({ className }) => {
  return (
    <div
      style={{ backgroundImage: "url(/bg.png)" }}
      className={`nc-ContactPage h-full ${className}`}
      data-nc-id="ContactPage"
    >
      <Header />
      <section>
        {/* style={{ height: "50vh" }} */}
        <div className="px-[7.875rem] py-[50px] relative overflow-hidden">
          <div className="flex mt-12">
            <div>
              <h1 className="text-7xl font-bold text-[#fff]">Let's Speak</h1>
              <h1 className="text-7xl font-bold text-[#4B8CCB]">Together</h1>
            </div>
          </div>
          <img src="/images/bubble.svg" className="banner-bubble_ser" />
        </div>
      </section>
      <section className="mb-16">
        <div className="container px-[7.875rem] py-[50px]">
          <div className="flex justify-between">
            <div className="basis-[60%]">
              <p className="text-[#fff] text-xl font-normal font-hellix mb-4 ml-[10px]">
                If you want to optimise or outsource your compliance department,
                you’re in the right place.
              </p>
              <form className="appointment-form">
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
                <div>
                  <input
                    className="placeholder-color"
                    type="text"
                    placeholder="Company"
                  />
                </div>
                <div>
                  <textarea
                    className="placeholder-color"
                    placeholder="Message"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md ml-[11px] contact_submit_btn"
                  style={{ color: "#ffffff" }}
                >
                  Book Appointment
                </button>
              </form>
            </div>
            <div>
              <div className="pb-2">
                <span className="text-[#FFFFFFA1] font-normal font-hellix">
                  Address :
                </span>
              </div>
              <div>
                <span className="text-[#FFFFFF] font-bold font-hellix">
                  128 city road EC1V 2NX, London, UK
                </span>
              </div>
              {/* <div className='pb-2 pt-12'>
                <span className='text-[#FFFFFFA1] font-normal font-hellix'>Contact :</span>
              </div>
              <div>
                <span className='text-[#FFFFFF] font-normal font-hellix'>Whatsapp</span> <br />
                <span className='text-[#FFFFFF] font-normal font-hellix'>Telegram</span> <br />
                <span className='text-[#FFFFFF] font-normal font-hellix'>Skype</span>
              </div> */}
              <div className="pb-2 pt-12">
                <span className="text-[#FFFFFFA1] font-normal font-hellix">
                  Email :
                </span>
              </div>
              <div>
                <span className="text-[#FFFFFF] font-bold font-hellix">
                  Hello@Advisionary.io
                </span>
              </div>
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

export default Contact;
