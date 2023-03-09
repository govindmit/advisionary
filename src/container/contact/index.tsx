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
      style={{
        background: "url(/images/bg-inner.jpg) no-repeat 0 0 / cover",
      }}
      className={`nc-ContactPage h-full ${className}`}
      data-nc-id="ContactPage"
    >
      <Header />
      <section>
        {/* style={{ height: "50vh" }} */}
        <div className="xl:px-[3rem] 2xl:px-[7.875rem] xl:py-[50px] relative overflow-hidden">
          <div className="flex mt-12">
            <div>
              <h1 className="text-5xl xl:text-7xl font-bold text-[#fff]">
                Let's Talk
              </h1>
              <h1 className="text-5xl xl:text-7xl font-bold text-[#702172]">
                Further
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="container xl:px-[3rem] 2xl:px-[7.875rem] py-[50px]">
          <div className="flex justify-between flex-wrap xl:flex-nowrap">
            <div className="xl:basis-[60%]">
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
        <div className="xl:px-[3rem] xl:p-[3rem] 2xl:p-20 2xl:px-32 flex flex-wrap xl:flex-nowrap items-center">
          <div className="xl:w-1/2">
            <h2 className="text-[#fff] font-bold text-6xl">Newsletter</h2>
            <p className="text-white font-light mt-4 font-hellix-light">
              Subscribe to our newsletter for weekly exclusive content
            </p>
          </div>
          <div className="mt-4  mb-4 w-1/2 text-right">
            <Popup />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
