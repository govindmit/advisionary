import MailchimpSubscribe from "react-mailchimp-subscribe"
const CustomForm = ({ status, message, onValidated }) => {
  let email, fname, lname;
  const submit = () =>
    email &&
    fname &&
    lname &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (fname = node)}
        type="text"
        placeholder="First name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (lname = node)}
        type="text"
        placeholder="Last name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};
function PopupContent({ onClose }) {
  const url = `https://gmail.us21.list-manage.com/subscribe/post?u=6ce689fc2ea60c873ccd1445f&id=33b5fd3433&f_id=001488e1f0`;
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
        <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    
      </div>
    </div>
  );
}
export default PopupContent;
