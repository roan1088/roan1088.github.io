import React from "react";
import MainHeading from "../../components/MainHeading";

function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    document.title = "Contact Rohan";
  }, []);

  return (
    <>
      <MainHeading>Contact Me</MainHeading>
      
      <div className="row">
        <div className="col">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="name" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="3"  placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col">
          <i className="fas fa-phone"></i> (347)449-0126 | <i className="fas fa-envelope"></i> rohan_188@yahoo.com
        </div>
      </div>
    </>
  );
}

export default Contact;