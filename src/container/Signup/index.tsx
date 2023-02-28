import ButtonPrimary from 'components/Button/ButtonPrimary';
import React, { FC } from 'react'


export interface PageProps {
    className?: string;
}
const Signup: FC<PageProps> = ()  => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
          <button className="px-8 bg-transparent text-[#fff] font-hellix-light"
            onClick={() => setShowModal(true)}
            >
              Sign up
            </button>
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[46vw] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-modal outline-none focus:outline-none p-6" style={{backdropFilter: 'blur(39px)', padding: '28px 45px 47px',width:'614px',height:'450px'}}>
                {/*header*/}
                <div className="flex items-start justify-between border-slate-200 rounded-t mb-5">
                  <h3 className="text-[22px] font-normal text-white">
                    Sign up
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                    <form className='modal-form'>
                        <div>
                          <input type="text" placeholder='Name' className='modal-placeholder'/>
                        </div>
                      <div>
                        <input type="text" placeholder='Email' className='modal-placeholder' />
                      </div>
                        <div>
                          <input type="text" placeholder='Password' className='modal-placeholder'/>
                        </div>
                        
                    </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center border-slate-200 rounded-b">
                  <button
                    className="ttnc-ButtonPrimary text-white font-hellix text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-[100%]"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Signup