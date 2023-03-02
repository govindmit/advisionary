import Logo from "components/Layout/Logo";
import React, { FC } from "react";

export default function Footer() {
  return (
    <div>
      <div
        className="px-[7.875rem] py-[50px] flex flex-col"
        style={{
          background:
            "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(16, 29, 66, 0.3) 35%, rgba(49, 36, 77, 0.3) 65%, rgb(0, 0, 0) 100%)",
        }}
      >
        <div className="flex flex-col">
          <div className="flex justify-between mb-8">
            <div>
              <Logo className="mr-10" />
            </div>
            {/* <div className='flex justify-between'>
                            <div className='mr-8'>
                                <a href="#"><img src="/images/linkdin.svg" className='social_icon' /></a>
                            </div>
                            <div className='mr-8'>
                                <a href="#"><img src="/images/twitter.svg" className='social_icon' /></a>
                            </div>
                            <div className='bg-white mr-8 social_icon'>
                                <a href="#"><img src="/images/mshape.svg" className='social_icon' /></a>
                            </div>
                        </div> */}
          </div>
          <div className=" mb-4 text-[#fff]">
            <a
              href="#"
              className="font-hellix-light"
              style={{ letterSpacing: "1px", fontWeight: "500" }}
            >
              Hello@advisionary.io
            </a>
          </div>
          <div
            className=" mb-10 text-[#fff] font-hellix-light"
            style={{ letterSpacing: "1px", fontWeight: "500" }}
          >
            London - Portugal - Monaco
          </div>
          <div
            className=" mb-10 text-[#fff] font-hellix-light w-[50%]"
            style={{ fontWeight: "500" }}
          >
            Advisionary Ltd is registered in the United Kingdom under No.
            13692103 with a registered business address at 128 City road EC1V
            2NX. We are a Compliance Consulting firm with offices in London -
            Portugal and Monaco. We are not authorised or regulated by any
            regulation authority.
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex justify-between">
            <div>
              <a href="#">
                <span
                  className="font-normal mr-4 text-[#fff] font-hellix-light"
                  style={{ fontWeight: "500" }}
                >
                  Terms and conditions
                </span>
              </a>
            </div>
            <div>
              <a href="#">
                <span
                  className="font-normal mr-4 text-[#fff] font-hellix-light"
                  style={{ fontWeight: "500" }}
                >
                  Privacy policy
                </span>
              </a>
            </div>
            <div>
              <a href="#">
                <span
                  className="font-normal mr-4 text-[#fff] font-hellix-light"
                  style={{ fontWeight: "500" }}
                >
                  Cookie policy
                </span>
              </a>
            </div>
          </div>
          <div>
            <a href="#">
              <span className=" text-[#ffffff78]">
                © 2022 Advisionary. All Rights reserved
              </span>
            </a>
          </div>
        </div>
        <div>
          <p
            className="font-normal text-[#fff] font-hellix-light"
            style={{
              textAlign: "center",
              marginTop: "5rem",
              fontWeight: "500",
            }}
          >
            128 city road EC1V 2NX, London, UK
          </p>
        </div>
      </div>
    </div>
  );
}
