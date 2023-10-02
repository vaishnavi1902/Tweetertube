import { useState } from "react";
import "./contact.css";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="linktag">
        <a href="/">Home </a>{" "}
        <AiOutlineRight style={{ height: "12px", width: "12px" }} />
        <a href="/">Contact Us</a>
      </div>
      <section className="contact-section">
        <div className="heading">
          <h2>Contact Us</h2>
        </div>
        <div className="border"></div>
        <form className="contact-form" action="">
          <label htmlFor="name" className="contact-label">
            Name
          </label>

          <input
            icon={<BsFillPersonFill style={{ color: "black" }} />}
            type="text"
            placeholder="Your name"
            value={name}
            className="contact-form-text"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="contact-label">
            Email
          </label>
          <input
            type="text"
            placeholder="Your email"
            value={email}
            className="contact-form-text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="mobile" className="contact-label">
            Mobile
          </label>
          <input
            type="number"
            placeholder="Your Mobile"
            value={mobile}
            className="contact-form-text"
            onChange={(e) => setMobile(e.target.value)}
          />
          <label htmlFor="message" className="contact-label">
            Message
          </label>
          <textarea
            type="text"
            placeholder="Your message"
            value={message}
            className="contact-form-text"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="contact-form-btn">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
