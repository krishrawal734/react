import React from "react";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <h1 className=" react">Get in touch</h1>
        <div className="row">
          <div className="box">
            <h2>Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3671.9407782223125!2d72.5572811743678!3d23.025946566204052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slaw%20garden!5e0!3m2!1sen!2sin!4v1755591774798!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          <div className="box">
            <h2>Contact Information</h2>
            <p>
              <strong>Address:</strong> Felix IT System, Ahmedabad, India
            </p>
            <p>
              <strong>Email:</strong> info@website.com
            </p>
            <p>
              <strong>Phone:</strong> +91 9076590348
            </p>
            <p>
              <strong>Hours:</strong> Mon–Sat, 9am – 6pm
            </p>
          </div>
        </div>

      
      </section>
    </>
  );
}

export default Contact;
