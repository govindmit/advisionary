import ButtonPrimary from 'components/Button/ButtonPrimary';
import Header from 'components/Layout/Header';
import Footer from 'container/Footer';
import React, { FC } from 'react'


export interface PageHomeProps {
    className?: string;
}
const ServiceOne: FC<PageHomeProps> = ({ className }) => {
    return (
        <div style={{ backgroundImage: 'url(/bg.png)' }} className={`nc-ServiceOnePage h-full ${className}`} data-nc-id="ServiceOnePage">
            <Header />
            <section style={{height:'80vh'}}>
                <div className='px-[12rem] py-[50px] relative overflow-hidden'>
                    <div className='flex mt-12' >
                        <div className='basis-1/2'>
                            <h1 className='text-7xl font-bold text-[#fff]'>Compliance</h1>
                            <h1 className='text-7xl font-bold text-[#4B8CCB] pb-2'>As A Service</h1>
                            <span className='leading-7 text-[#ffffff78] text-base'> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent </span>
                        </div>
                    </div>
                    <img src="/images/bubble.svg" className='banner-bubble_ser' />
                </div>
            </section>
            <section>
                <div className="px-[7.875rem] py-[50px]">
                    <div className='bg-[#1c1c1c] rounded-md px-16 pt-12 py-20'>
                        <div><span className='text-6xl font-bold leading-[156%] text-[#fff]'>What is legal ops? </span></div>
                        <div><span className='text-lg font-medium w-1/2 block md:break-all leading-[156%] text-[#ffffff99] font-hellix-light'>Legal operations means running Legal like a business. From budget management, service delivery optimisation to streamlining your processes through better design and technology, no legal function can scale without an effective legal ops function. If you want to optimise the operations of your legal department, you???re in the right place.
                        </span></div>
                        <div className='mt-12'><ButtonPrimary className='mt-10 font-hellix-light'>
                            Learn more
                        </ButtonPrimary></div>
                    </div>
                </div>
            </section>
            <section className='relative overflow-hidden'>
                <img src="/images/image_303.svg" className='bg-service' />

                <div className="px-[7.875rem] py-[50px] relative">
                    <img src="/images/rectangle_2.svg" className='rectangle_two' />
                    <div className=' rounded-md px-16 pt-12 py-20'>
                        <div><span className='text-6xl font-bold leading-[156%] text-[#fff]'>Here???s How We Can Help </span></div>
                        <div><span className='text-lg font-medium max-w-1/2 md:break-all leading-[156%] text-[#ffffff75] font-hellix-light'>Compliance as a service </span></div>
                        <div className='mt-12 flex justify-between '>
                            <div className='flex flex-col pr-16'>
                                <div className='logo_sm mb-4'>
                                    <img src="/images/compliance-service.png" alt="service" />
                                </div>
                                <div className='mb-4'><span className='text-[1.375rem] font-medium text-[#fff] font-hellix-light'>Fintech</span></div>
                                <div><span className='leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent</span></div>
                            </div>
                            <div className='flex flex-col pr-16'>
                                <div className='logo_sm mb-4'>
                                    <img src="/images/compliance-platform.png" alt="compliance" />
                                </div>
                                <div className='mb-4'><span className='text-[1.375rem] font-medium text-[#fff] font-hellix-light'>Crypto</span></div>
                                <div><span className='leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent</span></div>
                            </div>
                            <div className='flex flex-col pr-16'>
                                <div className='logo_sm mb-4'>
                                    <img src="/images/compliance-shop.png" alt="compliance-shop" />
                                </div>
                                <div className='mb-4'><span className='text-[1.375rem] font-medium text-[#fff] font-hellix-light'>Fintech</span></div>
                                <div><span className='leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container px-[7.875rem] py-[50px] mb-[12.5rem]'>
                    <div className='linear-blue rounded-lg relative  overflow-hidden w-[100%] h-[437px] px-24 py-16'>
                        <img src="/images/h1_quotes.svg" className='h1_quotes' />
                        <img src="/images/image_sm_black_circle.svg" className='sm_black_circle' />
                        <img src="/images/image_big_black_circle.svg" className='big_black_circle' />
                        <img src="/images/image_sm_white_circle.svg" className='sm_white_circle' />
                        <img src="/images/image_big_black_circle_vector.svg" className='big_black_circle_vector' />
                        <div className='flex flex-col pr-16'>
                            <div className='mb-4'><span className='text-[1.875rem] font-bold text-[#fff] '>Best company</span></div>
                            <div><span style={{fontSize: 'x-large',letterSpacing:'1px',lineHeight:'31px'}} className='text-[#ffffff] w-[510px] block mb-8 font-hellix-light'>By the end of the process, we had a suite of bespoke, easy-to-use tools that allowed us to better manage our workload, save time and money and empower other business stakeholders.</span></div>
                            <div><span className='leading-[142% text-[#ffffff99] font-medium text-base font-hellix-light'>???  Michael Johnson, CEO of startup</span></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ServiceOne
