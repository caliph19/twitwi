import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footermain">
        <div className="footercenter">
          <div className="footerleft">
            <div className="footerdiv1">
              <div className="footerimg">
                <span id="set-twi2">twi</span>
                <span id="set-choose2"> twi</span>
              </div>
              <div className="fdiv1detail">
                From everyday tasks to big moments — twitwi connects you with
                trusted pros in seconds.
              </div>
            </div>
            <div className="footerdiv2">
              <div className="fdiv2head"> <h1>Let’s Stay in Touch
                </h1> 
                
                </div>
                
              <div className="fdiv2detail">
                Follow us on social media to stay updated on our latest news.
              </div>
              <div className="fdiv2buttons">
                <div className="footerbtns">
                  <button>Facebook</button>
                  <button>Twitter</button>
                  <button>Instagram</button>
                  <button>LinkedIn</button>
                </div>
              </div>
              <div className="fdivend">
                <p>© 2025 twitwi. All rights reserved.</p>
                <p>Making everyday tasks feel magical.</p>
              </div>
            </div>
          </div>
          <div className="footerright">
            <div className="footerdiv3">
              <div className="fdiv2head">
                <h1>

                Subscribe for updates & exclusive offers!
                </h1>
              </div>
              <div className="fdiv3input">
                <input type="email" placeholder="Enter your email" />
                <button>Join our Newsletter!</button>
              </div>
            </div>
            <div className="footerdiv4">
              <div className="fdiv4links1">
                <h1>Quick Links</h1>
                <ul>
                  <li>Home</li>
                  <li>How It Works</li>
                  <li>Book a Task Pro</li>
                  <li>Browse Services</li>
                  <li>Become a Twitwi Pro</li>
                </ul>
              </div>
              <div className="fdiv4links1">
                <h1>Legal & Policies</h1>
                <ul>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Preferences</li>
                  <li>Refund Policy</li>
                </ul>
              </div>
              <div className="fdiv4links3">
                <h1>Support & Contact</h1>
                <ul>
                  <li id="set-footer-heading"> <b>Headquarters</b> </li>
                  <li id="set-footer-detail">London, United kingdom</li>
                  <li id="set-footer-heading"> <b>Email</b> </li>
                  <li id="set-footer-detail">Support@twitwi.com</li>
                  <li id="set-footer-heading"> <b>Phone</b> </li>
                  <li id="set-footer-detail">+44 1234 567 890</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
