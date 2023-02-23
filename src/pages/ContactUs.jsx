import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-[#A8DADC]   text-white p-5 m-0 md:mt-4">
        <h1 className="text-2xl screen max-w-screen-xl mx-auto font-bold">
          Contact Us
        </h1>
      </div>
      <div className="contactUs min-h-screen max-w-screen-xl mx-auto">

           <form action="#">
                  <div className="form_box">
                    <label htmlFor="name">Your Name (required)</label><br />
                    <input className="border-sky-500 " type="text" name="name" id="name" placeholder="Enter Your Name" />
                  </div> <br />
                  <div className="form_box">
                    <label htmlFor="email">Your Name (required)</label><br />
                    <input type="email" name="email" id="email" placeholder="Enter Your email" />
                  </div> <br />
                  <div className="form_box">
                    <label htmlFor="subject">Your Name (required)</label><br />
                    <input type="text" name="subject" id="subject" placeholder="Enter Your subject" />
                  </div> <br />
                  <div className="form_box">
                    <label htmlFor="subject">Your Message : </label><br />
                     <textarea name="message" id="message" cols="80" rows="10"></textarea>
                  </div> <br />
                  <button type="submit" className="bg-green-400">Send</button>
           </form>

      </div>
    </div>
  );
};

export default ContactUs;
