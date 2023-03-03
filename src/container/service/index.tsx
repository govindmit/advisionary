import ButtonPrimary from "components/Button/ButtonPrimary";
import Header from "components/Layout/Header";
import Footer from "container/Footer";
import React, { FC } from "react";

export interface PageHomeProps {
  className?: string;
}
const Service: FC<PageHomeProps> = ({ className }) => {
  return (
    <div
      className={`nc-ServicePage h-full ${className} main-grad`}
      data-nc-id="ServicePage"
    >
      <Header />
      <section>
        <div className="xl:px-[3rem] 2xl:px-[7.875rem] xl:py-[50px] relative overflow-hidden">
          <div className="flex mt-12">
            <div>
              <h1 className="text-5xl xl:text-7xl font-bold text-[#fff]">
                Solution{" "}
              </h1>
              <h1 className="text-5xl xl:text-7xl font-bold text-[#fff]">
                Compliance
              </h1>
              <h1 className="text-5xl xl:text-7xl font-bold text-[#9B7Ae4] mb-6">
                Solution
              </h1>
            </div>
          </div>
          <img src="/images/bubble.svg" className="banner-bubble_ser" />
        </div>
      </section>
      <div className="services mb-12">
        <section className="relative overflow-hidden">
          <div className="container m-auto  ">
            <div className="linear-purple rounded-lg relative  overflow-hidden w-full  px-6 py-6">
              <div className="flex flex-col">
                <span className="leading-[142% text-[#fff] font-medium text-lg font-hellix-light w-full mb-3">
                  PACKAGE 1
                </span>
                <div className="mb-4">
                  <span className="text-[1.875rem] font-bold text-[#fff] ">
                    MSB-MTL North America Package
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      letterSpacing: "1px",
                      lineHeight: "24px",
                    }}
                    className="text-[#ffffff] w-full  block mb-4 font-hellix-light text-base "
                  >
                    Your solution to access a full regulated entity to operate
                    Payment, E-money and Crypto Businesses - We've got you
                    covered!
                  </span>
                  <ul
                    className="text-[#ffffff] w-full  block mb-8 font-hellix-light text-base ml-4 "
                    style={{ listStyle: "disc" }}
                  >
                    <li>
                      Company set up - MSB Registration - Compliant Documents
                    </li>
                    <li>
                      Package with Applicable Regulator - Virtual Office -
                      AML/CFT
                    </li>
                    <li>
                      {" "}
                      Policies & Procedures - Ongoing Compliance and Corporate
                    </li>
                    <li>Support</li>
                  </ul>
                  <span
                    style={{
                      letterSpacing: "1px",
                      lineHeight: "24px",
                    }}
                    className="text-[#ffffff] w-full  block mb-4 font-hellix-light text-base"
                  >
                    Our daily relationships with Fintech & Crypto companies, as
                    well as our regular exchanges with the regulatory
                    authorities, are all structuring and essential elements for
                    the missions we offer our clients.
                  </span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden">
          <div className="container m-auto  ">
            <div className="bg-[#111] rounded-lg relative  overflow-hidden w-full  px-6 py-6 ">
              <div className="flex flex-col ">
                <span className="leading-[142% text-[#fff] font-medium text-lg font-hellix-light w-full mb-3">
                  PACKAGE 2
                </span>
                <div className="mb-4">
                  <span className="text-[1.875rem] font-bold text-[#fff] ">
                    UK/EU Neo Bank Package
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      letterSpacing: "1px",
                      lineHeight: "24px",
                    }}
                    className="text-[#ffffff] w-full block mb-4 font-hellix-light text-base"
                  >
                    We provide you with an end to end solution, starting from
                    the consulting and licensing stage and to the full technical
                    platform setup.
                  </span>
                  <ul
                    className="text-[#ffffff] w-full block mb-8 font-hellix-light text-base ml-4 "
                    style={{ listStyle: "disc" }}
                  >
                    <li className="mb-3">
                      <b>Pre Launch Set Up</b> that will incorporate Draft of
                      Policies, Internal Processes and AML Compliance Program
                    </li>
                    <li className="mb-3">
                      <b>Service Provider Introduction</b> Our wide and varied
                      network allows us to provide you with the best rates and
                      services. We can introduce you to IT providers, EMI, PSP,
                      Issuers, Acquirers, Payments Gateways and Crypto providers
                      depending on your needs.
                    </li>
                    <li className="mb-3">
                      <strong>Ongoing Compliance Support</strong> by providing
                      guidance and advice on changes in regulations, appointed
                      MLRO, remote identity verification, KYC/KYB, transaction
                      screening & monitoring and support to ensure that the
                      organization remains compliant on a day to day basis.
                    </li>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden">
          <div className="container m-auto  ">
            <div className="bg-[#111] rounded-lg relative  overflow-hidden w-full  px-6 py-6">
              <div className="flex flex-col ">
                <span className="leading-[142% text-[#fff] font-medium text-lg font-hellix-light w-full mb-3">
                  PACKAGE 3
                </span>
                <div className="mb-4">
                  <span className="text-[1.875rem] font-bold text-[#fff] ">
                    Regulatory Package
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      letterSpacing: "1px",
                      lineHeight: "24px",
                    }}
                    className="text-[#ffffff] w-full block mb-4 font-hellix-light text-base"
                  >
                    Improve consistency and efficiency by streamlining the
                    workflows around policy creation, review, approval, and
                    communication.
                  </span>
                  <ul
                    className="text-[#ffffff] w-full block mb-8 font-hellix-light text-base ml-4 "
                    style={{ listStyle: "disc" }}
                  >
                    <li className="mb-3">
                      First Step : Our specialists will perform a deep dive
                      study and will advise you on juridiction and the type of
                      licence that suits your business.
                    </li>
                    <li className="mb-3">
                      Second Step : Once the choice of Juridiction and Licence
                      are made, we will focus on drafting procedures, policies,
                      appointed MLRO or external AML departement and more. We
                      can also connect you with locals experts to cover specific
                      requests.
                    </li>
                    <li className="mb-3">
                      Third Step : Once we obtain the licence, we will take care
                      of your day to day compliance.
                    </li>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden ">
          <div className="container m-auto  ">
            <div className="bg-[#111] rounded-lg relative  overflow-hidden w-full  px-6 py-6">
              <div className="flex flex-col ">
                <span className="leading-[142% text-[#fff] font-medium text-base font-hellix-light w-full mb-3">
                  PACKAGE 4
                </span>
                <div className="mb-4">
                  <span className="text-[1.875rem] font-bold text-[#fff] ">
                    Create your own package
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      letterSpacing: "1px",
                      lineHeight: "24px",
                    }}
                    className="text-[#ffffff] w-full block mb-4 font-hellix-light text-base"
                  >
                    Let's start with 1 hour free consulting session to
                    understand your business and define your needs. This will
                    help us get you the best personnalized approach based on
                    your requirements, and to focus on the development of a
                    comprehensive roadmap tailored to your business.
                  </span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
