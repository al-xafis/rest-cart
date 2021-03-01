import React from 'react';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact__strip">
          <h1 className="contact__title">Contacts</h1>
        </div>
      <div className="container">
        <h2 className="contact__touch">Get In Touch</h2>
        <div className="contact__box">
          <div className="contact__item">
          <i className="fas fa-map-marker-alt contact__icon"></i>
          <p className="contact__p">53, Geofizika, Tashkent</p>
          </div>
          <div className="contact__item">
          <i className="fas fa-phone-alt contact__icon"></i>
          <p className="contact__p">+998 93 303 40 67</p>
          </div>
          <div className="contact__item">
          <i className="fas fa-envelope contact__icon"></i>
          <p className="contact__p">alkh4fis@gmail.com</p>
          </div>
        </div>
        <div className="contact__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d95901.41990287435!2d69.3108736!3d41.3106176!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1614258831245!5m2!1sen!2s" width="1200" height="450" style={{border:0}} allowFullScreen={true} loading="lazy"></iframe>
        </div>
        <h2 className="contact__touch">Send Us Email</h2>
        <form action="" className="contact__form">
          <div className="input__box">
          <input type="text" name="name" placeholder="Name" className="contact__input" />
          <input type="email" name="email" placeholder="Email" className="contact__input" />
          <input type="text" name="subject" placeholder="Subject" className="contact__input" />
          </div>
          
          <textarea name="" id="" row="1" placeholder="Message" className="contact__textarea"></textarea>
          <button className="contact__btn">Submit</button>
        </form>
      </div>
      <Footer />
      <Copyright />
    </div>
  )
};

export default Contact;