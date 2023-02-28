import ButtonPrimary from 'components/Button/ButtonPrimary';
import Header from 'components/Layout/Header';
import Footer from 'container/Footer';
import React, { FC } from 'react'


export interface PageHomeProps {
    className?: string;
}
const Contact: FC<PageHomeProps> = ({ className }) => {
    return (
        <div style={{ backgroundImage: 'url(/bg.png)' }} className={`nc-ContactPage h-full ${className}`} data-nc-id="ContactPage">
            <Header />
            <section>{/* style={{ height: "50vh" }} */}
                <div className='px-[7.875rem] py-[50px] relative overflow-hidden'>
                    <div className='flex mt-12' >
                        <div>
                            <h1 className='text-7xl font-bold text-[#fff]'>Let's Speak</h1>
                            <h1 className='text-7xl font-bold text-[#4B8CCB]'>Together</h1>
                        </div>
                    </div>
                    <img src="/images/bubble.svg" className='banner-bubble_ser' />
                </div>
            </section>
            <section className='mb-16'>
                <div className="container px-[7.875rem] py-[50px]">
                <div className='flex justify-between'>
            <div className='basis-[60%]'>
              <form className='appointment-form'>
                <div>
                  <input className='placeholder-color' type="text" placeholder='Your Name' />
                </div>
                <div>
                  <input className='placeholder-color' type="text" placeholder='Your email' />
                </div>
                <div>
                  <input className='placeholder-color' type="text" placeholder='Company' />
                </div>
                <div>
                  <textarea className='placeholder-color' placeholder='Message' rows={5} />
                </div>
                <button type='submit' className='rounded-md ml-[11px] contact_submit_btn' style={{color:'#ffffff'}} >Book Appointment</button>
              </form>
            </div>
            <div>  
              <div className='pb-2'>
                <span className='text-[#FFFFFFA1] font-normal font-hellix'>Address :</span>
              </div>
              <div>
                <span className='text-[#FFFFFF] font-bold font-hellix'>128 city road EC1V 2NX, London, UK</span>
              </div>
              {/* <div className='pb-2 pt-12'>
                <span className='text-[#FFFFFFA1] font-normal font-hellix'>Contact :</span>
              </div>
              <div>
                <span className='text-[#FFFFFF] font-normal font-hellix'>Whatsapp</span> <br />
                <span className='text-[#FFFFFF] font-normal font-hellix'>Telegram</span> <br />
                <span className='text-[#FFFFFF] font-normal font-hellix'>Skype</span>
              </div> */}
              <div className='pb-2 pt-12'>
                <span className='text-[#FFFFFFA1] font-normal font-hellix'>Email :</span>
              </div>
              <div>
                <span className='text-[#FFFFFF] font-bold font-hellix'>Hello@Advisionary.io</span>
              </div>
            </div>
          </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
