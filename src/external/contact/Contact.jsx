import "./contact.css";
import { AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mhaayfn",
        "template_jk4ofbt",
        form.current,
        "BH9Z0LNh0LZ_erOQF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="linktag">
        <a href="/">Home </a>{" "}
        <AiOutlineRight style={{ height: "12px", width: "12px" }} />
        <a href="/">Contact Us</a>
      </div>
      <section className="contact-section" id="contact">
        <div className="heading">
          <h2>Contact Us</h2>
        </div>
        <form
          className="contact-form"
          action=""
          ref={form}
          onSubmit={sendEmail}
        >
          <label htmlFor="name" className="contact-label">
            {" "}
            Name{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Your name"
            name="name"
            className="contact-form-text"
            required
          />
          <label htmlFor="email" className="contact-label">
            {" "}
            Email{" "}
          </label>
          <input
            type="text"
            placeholder="Enter Your email"
            name="email"
            className="contact-form-text"
            required
          />
          <label htmlFor="mobile" className="contact-label">
            {" "}
            Mobile (Optional){" "}
          </label>
          <input
            type="number"
            placeholder="Enter Your Mobile Number"
            name="mobile"
            className="contact-form-text"
          />
          <label htmlFor="message" className="contact-label">
            {" "}
            Message{" "}
          </label>
          <textarea
            type="text"
            placeholder="Enter Your message"
            name="message"
            className="contact-form-text"
            required
          ></textarea>
          <div className="flex">
            <button className="contact-form-btn" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
