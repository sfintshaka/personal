
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section id='contact'>
      <div className="cont">
        <div className="text">
          Contact Me
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <div className="form-row">
            <div className="input-data">
              <input type="text" name="first-name" required />
              <div className="underline"></div>
              <label>First Name</label>
            </div>
            <div className="input-data">
              <input type="text" name="last-name" required />
              <div className="underline"></div>
              <label>Last Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="email" name="email" required />
              <div className="underline"></div>
              <label>Email Address</label>
            </div>
            <div className="input-data">
              <input type="text" name="website" required />
              <div className="underline"></div>
              <label>Website Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea name="message" rows={8} required></textarea>
              <div className="underline"></div>
              <label>Write your message</label>
            </div>
          </div>
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner"></div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
