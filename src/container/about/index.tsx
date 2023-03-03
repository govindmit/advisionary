import { render } from "@testing-library/react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Header from "components/Layout/Header";
import Footer from "container/Footer";
import React, { FC } from "react";
import { useState } from "react";

export interface PageHomeProps {
  className?: string;
}
class About extends React.Component<
  {},
  {
    isArthurExpanded: false;
    isSantiagoExpanded: false;
    isAyesegulExpanded: false;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      isArthurExpanded: false,
      isSantiagoExpanded: false,
      isAyesegulExpanded: false,
    };
  }

  toggleTeamDesc(member, toggleState) {
    console.log(member, toggleState);
    if (member == "ARTHUR") {
      this.setState({ isArthurExpanded: toggleState });
    } else if (member == "SANTIAGO") {
      this.setState({ isSantiagoExpanded: toggleState });
    } else if (member == "AYESEGUL") {
      this.setState({ isAyesegulExpanded: toggleState });
    }
  }

  render() {
    return (
      <div
        style={{
          background:
            "#000 linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(16, 29, 66,0.6) 35%, rgba(49,36,77,0.6) 72%, rgba(0, 0, 0,1) 100%)",
        }}
        className={`nc-AboutPage h-full `}
        data-nc-id="AboutPage"
      >
        <Header />
        <section style={{}}>
          <div className="xl:px-[3rem] 2xl:px-[7.875rem] xl:py-[50px] relative overflow-hidden">
            <div className="flex mt-12">
              <div>
                <h1 className="text-5xl xl:text-7xl font-bold text-[#fff]">
                  We Make
                </h1>
                <h1 className="text-5xl xl:text-7xl font-bold text-[#9B7Ae4]">
                  Compliance Easy
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section style={{ height: "525.5px" }}>
          <div className="xl:px-[7.875rem] py-[50px] mb-[12.5rem]">
            <div className="linear-purple rounded-lg relative  overflow-hidden w-[100%] h-[437px] px-24 py-16">
              <img src="/images/h1_quotes.svg" className="h1_quotes" />
              <img
                src="/images/image_sm_black_circle.svg"
                className="sm_black_circle"
              />
              <img
                src="/images/image_big_black_circle.svg"
                className="big_black_circle"
              />
              <img
                src="/images/image_sm_white_circle.svg"
                className="sm_white_circle"
              />
              <img
                src="/images/image_big_black_circle_vector.svg"
                className="big_black_circle_vector"
              />
              <div className="flex flex-col pr-16">
                <div className="mb-4">
                  <span className="text-[3.875rem] font-bold text-[#fff] ">
                    Our Story
                  </span>
                </div>
                <div>
                  <span
                    style={{ letterSpacing: "1px", fontWeight: "100" }}
                    className="text-[#ffffff] w-[510px] block mb-8 font-hellix-light"
                  >
                    So here we would like to have a presentation of the team,
                    however we are still debating internally if we do Avatars or
                    not, cause not everyone within our team wants to have their
                    pictures on their website, but we can start with text to
                    introduce our team, and you can find it below: (if you have
                    ideas, or if you have previous inspirations from other
                    projects you done to present the team on a website, I’m all
                    ears!)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden">
          <img src="/images/image_303.svg" className="bg-service" />

          <div className="container  py-[50px] relative m-auto">
            <img src="/images/rectangle_2.svg" className="rectangle_two" />
            <div className=" rounded-md px-3 pt-12 py-20">
              <div>
                <span className="text-6xl font-bold leading-[156%] text-[#fff]">
                  Our Team{" "}
                </span>
              </div>
              <div>
                <span className="text-lg font-medium max-w-1/2 md:break-all leading-[156%] text-[#ffffff75] font-hellix-light">
                  Compliance as a service{" "}
                </span>
              </div>
              <div className="mt-12 flex justify-between flex-wrap xl:flex-nowrap">
                <div className="flex flex-col xl:mr-16 w-full xl:w-1/4">
                  <div className="mb-6 px-5 pt-10 pb-0 relative team basis-1/3">
                    <img
                      src="/images/Arthur.png"
                      alt="user"
                      className="dummy_user"
                    />
                    {/* <a href="#" target={'_blank'}><img src="/images/linkedin.png" alt="user" className='linkedin_logo' /></a>
                                        <a href="#" target={'_blank'}><img src="/images/insta.png" alt="user" className='insta_logo' /></a>
                                        <a href="#" target={'_blank'}><img src="/images/behance.png" alt="user" className='behance_logo' /></a> */}
                  </div>

                  <div>
                    <span className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light mb-3">
                      Managing Partner
                    </span>
                  </div>
                  <div>
                    <span className="text-[1.375rem] font-medium text-[#fff] font-hellix-light">
                      Arthur
                    </span>
                    <p className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light mt-2">
                      Arthur is the founding partner of Advisionary. He is an
                      {this.state.isArthurExpanded ? (
                        <span className="arthur-more-desc">
                          {" "}
                          entrepreneur with an outstanding background in
                          Financial Law and Compliance. Before creating
                          Advisionary, Arthur worked with top global financial
                          services firms having previously held positions
                          spanning Compliance, Regulatory Finance, Regulatory
                          Reporting, Strategic Capital Management and Risk, in
                          both Law firms and banking institutions. Resourceful,
                          Tech-savvy, and a Contrarian, he always wanted to
                          combine his passion for Technology with his Legal
                          Background. This came into life with the creation of
                          Advisionary, a Compliance as a service firm for
                          Financial Institutions and Crypto-related entities.
                          Arthur holds a Banking & FinTech Law Master’s Degree
                          from Paris II University and an MSc in Management from
                          ESSEC Business School.
                          <span
                            style={{
                              cursor: "pointer",
                              color: "#fff",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                            onClick={() => this.toggleTeamDesc("ARTHUR", false)}
                          >
                            see less
                          </span>
                        </span>
                      ) : (
                        <span
                          style={{
                            cursor: "pointer",
                            color: "#fff",
                            marginLeft: "5px",
                            textDecoration: "underline",
                          }}
                          onClick={() => this.toggleTeamDesc("ARTHUR", true)}
                        >
                          see more
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col xl:mr-16 w-full xl:w-1/4">
                  <div className="mb-6 px-5 pt-10 pb-0 relative team basis-1/3">
                    <img
                      src="https://raw.githubusercontent.com/AkashPalve/Arbor-Email-Signature/main/face-expression-beautiful-woman-with-brown-hair-vector-26565372-removebg-preview.png"
                      alt="user"
                      className="dummy_user"
                    />
                    {/* <a href="#" target={'_blank'}><img src="/images/linkedin.png" alt="user" className='linkedin_logo' /></a>
                                        <a href="#" target={'_blank'}><img src="/images/insta.png" alt="user" className='insta_logo' /></a>
                                        <a href="#" target={'_blank'}><img src="/images/behance.png" alt="user" className='behance_logo' /></a> */}
                  </div>

                  <div>
                    <span className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light mb-3">
                      Marketing Manager
                    </span>
                  </div>
                  <div>
                    <span className="text-[1.375rem] font-medium text-[#fff] font-hellix-light">
                      Kristine
                    </span>
                  </div>
                  <p className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light mt-2">
                    Kristine is responsible for developing, implementing
                    {this.state.isSantiagoExpanded ? (
                      <span>
                        {" "}
                        and executing strategic marketing plans for Advisionary
                        <span
                          style={{
                            cursor: "pointer",
                            color: "#fff",
                            marginLeft: "5px",
                            textDecoration: "underline",
                          }}
                          onClick={() => this.toggleTeamDesc("SANTIAGO", false)}
                        >
                          see less
                        </span>
                      </span>
                    ) : (
                      <span
                        style={{
                          cursor: "pointer",
                          color: "#fff",
                          marginLeft: "5px",
                          textDecoration: "underline",
                        }}
                        onClick={() => this.toggleTeamDesc("Kristine", true)}
                      >
                        see more
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex flex-col xl:mr-16 w-full xl:w-1/4">
                  <div className="mb-6 px-5 pt-10 pb-0 relative team basis-1/3">
                    <img
                      src="https://raw.githubusercontent.com/AkashPalve/Arbor-Email-Signature/main/face-expression-beautiful-woman-with-brown-hair-vector-26565372-removebg-preview.png"
                      alt="user"
                      className="dummy_user"
                    />
                    {/* <a href="#" target={'_blank'}><img src="/images/linkedin.png" alt="user" className='linkedin_logo' /></a>
                                        <a href="#" target={'_blank'}><img src="/images/insta.png" alt="user" className='insta_logo' /></a>
                                        <a href="#" target={'_blank'}><img src="/images/behance.png" alt="user" className='behance_logo' /></a> */}
                  </div>

                  <div>
                    <span className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light mb-3">
                      Business Developer
                    </span>
                  </div>
                  <div>
                    <span className="text-[1.375rem] font-medium text-[#fff] font-hellix-light">
                      Gaïa
                    </span>
                  </div>
                  <p className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light mt-2">
                    Gaïa is taking care of developing plans for Advisionary and
                    revenue growth.
                    {this.state.isAyesegulExpanded ? (
                      <span>
                        {" "}
                        This goes by researching, planning and implementing new
                        target market initiatives as well as pursuing leads
                        through the sales cycle. Gaia’s goal is to promote the
                        company’s services addressing or predicting clients
                        objectives and developing a growth strategy focused both
                        on financial gain & customer satisfaction
                        <span
                          style={{
                            cursor: "pointer",
                            color: "#fff",
                            marginLeft: "5px",
                            textDecoration: "underline",
                          }}
                          onClick={() => this.toggleTeamDesc("Gaïa", false)}
                        >
                          see less
                        </span>
                      </span>
                    ) : (
                      <span
                        style={{
                          cursor: "pointer",
                          color: "#fff",
                          marginLeft: "5px",
                          textDecoration: "underline",
                        }}
                        onClick={() => this.toggleTeamDesc("AYESEGUL", true)}
                      >
                        see more
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex flex-col w-full xl:w-1/4">
                  <div className="mb-6 px-5 pt-10 pb-0 relative team basis-1/3">
                    <img
                      src="https://raw.githubusercontent.com/AkashPalve/Arbor-Email-Signature/main/face-expression-beautiful-woman-with-brown-hair-vector-26565372-removebg-preview.png"
                      alt="user"
                      className="dummy_user"
                    />
                    {/* <a href="#" target={'_blank'}><img src="/images/linkedin.png" alt="user" className='linkedin_logo' /></a>
                                        <a href="#" target={'_blank'}><img src="/images/insta.png" alt="user" className='insta_logo' /></a>
                                        <a href="#" target={'_blank'}><img src="/images/behance.png" alt="user" className='behance_logo' /></a> */}
                  </div>

                  <div>
                    <span className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light mb-3">
                      Risk & Compliance Consultant
                    </span>
                  </div>
                  <div>
                    <span className="text-[1.375rem] font-medium text-[#fff] font-hellix-light">
                      Aysegul
                    </span>
                  </div>
                  <p className="leading-[156%] text-[#ffffff75] max-w-md-[297px] inline-block font-hellix-light mt-2">
                    Experienced Compliance Analyst with a history of working in
                    Fintech
                    {this.state.isAyesegulExpanded ? (
                      <span>
                        {" "}
                        and legal sectors and qualified lawyer. Combines
                        expertise in UK and EU regulations and legislation.
                        Experience in drafting policies and procedures as well
                        as specialisation in AML and Fintech Compliance.
                        <span
                          style={{
                            cursor: "pointer",
                            color: "#fff",
                            marginLeft: "5px",
                            textDecoration: "underline",
                          }}
                          onClick={() => this.toggleTeamDesc("Gaïa", false)}
                        >
                          see less
                        </span>
                      </span>
                    ) : (
                      <span
                        style={{
                          cursor: "pointer",
                          color: "#fff",
                          marginLeft: "5px",
                          textDecoration: "underline",
                        }}
                        onClick={() => this.toggleTeamDesc("AYESEGUL", true)}
                      >
                        see more
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default About;
