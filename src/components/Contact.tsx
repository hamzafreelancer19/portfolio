import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:hamzafreelancer19@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — hamzafreelancer19@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              12th ICS (Computer Science)
            </p>
            <p>
              Full Stack Development • MERN Stack • React • Next.js
            </p>
          </div>
          <div className="contact-box">
            <h4>Connect On</h4>
            {/* Add your GitHub link here */}
            {/* Add your LinkedIn link here */}
            {/* Add your YouTube link here */}
            <p>Your social links coming soon...</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Hamza Ali</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
