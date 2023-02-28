function PopupContent({ onClose }) {
  return (
    <div
      className="popup-content fixed top-0 left-0 right-0 bottom-0"
      style={{ background: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="max-w-lg w-full m-auto bg-white absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 p-4 rounded-md text-left">
        <span className="flex justify-between mb-5">
          <h2 className="text-2xl font-bold text-[#000]">
            Newsletter Subscribe
          </h2>
          <button onClick={onClose}>X</button>
        </span>
        <form className="flex flex-col newsletter-form">
          <div>
            <input
              className="border w-full mt-3 h-14 p-2"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              className="border w-full mt-3 h-14 p-2"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              className="border w-full mt-3 h-14 p-2"
              type="text"
              placeholder="Your email"
            />
          </div>

          <button
            type="submit"
            className="mt-4 text-center p-4 font-hellix-light w-48 inline-block ttnc-ButtonPrimary rounded-md text-[#fff]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupContent;
