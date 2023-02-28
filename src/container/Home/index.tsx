import ButtonPrimary from 'components/Button/ButtonPrimary';
import Header from 'components/Layout/Header';
import Footer from 'container/Footer';
import React, { FC } from 'react'
import Marquee from "react-fast-marquee";
export interface PageHomeProps {
  className?: string;
}
const Home: FC<PageHomeProps> = ({ className }) => {
  return (
    <div style={{ backgroundImage: 'url(/bg.png)'}} className={`nc-HomePage h-full ${className}`} data-nc-id="HomePage">
      <div style={{ backgroundImage: 'url(/bg.png)', backgroundPosition:'left', height:'669px'}}>
      <Header />
      <div className='px-50 hero-banner relative'>
        <div>
          <h1 className='text-7xl font-bold text-[#fff]'>Level up your</h1>
          <h1 className='text-7xl font-bold text-[#4B8CCB] mb-3'>Compliance</h1>
          <p className='text-[#FFFFFF75] "' style={{fontSize:"16px"}}>One stop solution for FinTech & Crypto Businesses </p>
          <ButtonPrimary className='mt-10 px-8 font-hellix-light'>
            Get in touch
          </ButtonPrimary>
        </div>
        <img src="/images/bubble.svg" className='banner-bubble' />
      </div>
      </div>
      <section className='what-we-do-section bg-black'>
        <div className='px-32'>
          <div className='py-5'>
            <div className='pb-0.5 pt-3'>
              <h1 className='text-[#fff] font-bold text-6xl'>What We Do</h1>
            </div>
            <div className='pt-0 pb-10'>
              <span className='text-[#FFFFFF75] font-hellix-light'>Compliance as a service</span>
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
      Unintentionally turned from an entrepreneur to a compliance expert? We take over your AML special department or the whole risk & compliance department.
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
      What if drafting your policies becomes as easy as one click? Directly redirection to our shop
      </span>
    </div>
  </div>
</div>

        </div>
        <div className="what-we-do-bottom-bg-img-wrapper">
          <Marquee gradient = {false} speed = {60} direction = {'right'}>
            <div>
            <h1 className='text-white text-7xl text-[76px]'>We make the <span>compliance </span> easy </h1>
            </div>
            </Marquee>
          <Marquee gradient = {false} speed = {60} direction = {'left'}>
            <div>
            <h1 className='text-white text-7xl text-[76px]'>The <span>new era</span> of compliance</h1>
            </div>
            </Marquee>
          <Marquee gradient = {false} speed = {60} direction = {'right'}>
            <div>
              <h1 className='text-white text-7xl text-[76px]'>The compliance <span> 3.0</span></h1>
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
      <section className='linear-blue'>
        <div className='p-24 px-32'>
          <div className='flex justify-between'>
            <div> 
              <div className='pb-2'>
                <span className='text-[#FFFFFF] font-hellix-light'>Contact Us</span>
              </div>
              <div>
                <h1 className='text-[#FFFFFF] font-bold text-6xl'>Make an <br /> Appointment</h1>
              </div>
            </div>
            <div>
              <form className='flex flex-col appointment-form'>
                <div>
                  <input className='placeholder-color' type="text" placeholder='Your Name' />
                </div>
                <div>
                  <input className='placeholder-color' type="text" placeholder='Your email' />
                </div>
                <div className='flex flex-row justify-between'>
                  <div>
                    <input className='placeholder-color' type="text" placeholder='Date' />
                  </div>
                  <div>
                    <input className='placeholder-color' type="text" placeholder='16:00' style={{ width: '90%', marginLeft: '35px' }} />
                  </div>
                </div>
                <div>
                  <textarea className='placeholder-color' placeholder='Message' rows={5} />
                </div>
                <button type='submit' className='rounded-md ml-[11px] font-hellix-light'>Book Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  )
}
export default Home