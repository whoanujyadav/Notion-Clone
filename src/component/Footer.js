import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="font-sans w-[90%] m-auto ">
      <footer class="notion-footer">
        <div>
          <div className="flex flex-row">
            <img
              className="w-10 h-10"
              src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*XEALpbEw0QCJo6d65s2o1w.png"
            ></img>
            <h1 className="text-lg font-bold ml-2 mt-2"> Notion</h1>
          </div>
          <div class="footer-social mt-6">
            <ul>
              <li>
                <a href="#">
                  <img
                    className="w-6 h-6"
                    src="https://freepngimg.com/thumb/logo/69807-logo-computer-instagram-icons-png-image-high-quality-thumb.png"
                  ></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="w-5 h-5"
                    src="data:image/png;base64,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"
                  ></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="w-5 h-5"
                    src="https://www.svgrepo.com/show/58271/linkedin.svg"
                  ></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="w-5 h-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/db/Facebook_LOGO.png"
                  ></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="w-6 h-6"
                    src="https://toppng.com/uploads/preview/youtube-dark-icon-youtube-logo-vector-grey-11562912723rq4wb6pynq.png"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-menu">
          <div className="text-left">
            <div class="footer-column">
              <h4 className="font-semibold pb-1">Product</h4>
              <ul>
                <li>Wikis</li>
                <li>Projects</li>
                <li>Docs</li>
                <li>Notion AI</li>
                <li>What’s new</li>
              </ul>
            </div>
            <div class="footer-column ">
              <h4 className="font-semibold mt-8 pb-1">Solutions</h4>
              <ul>
                <li>Enterprise</li>
                <li>Small business</li>
                <li>Personal use</li>
                <li>Remote work</li>
                <li>Startups</li>
                <li>Education</li>
                <li>Nonprfits</li>
                <li>Engineering</li>
                <li>Product</li>
                <li>Design</li>
                <li>Managers</li>
              </ul>
            </div>
          </div>
          <div className="text-left">
            <div class="footer-column">
              <h4 className="font-semibold pb-1">Download</h4>
              <ul>
                <li>iOS & Android</li>
                <li>Mac & Windows</li>
                <li>Web Clipper</li>
              </ul>
            </div>
            <div class="footer-column">
              <h4 className="font-semibold mt-8 pb-1">Build</h4>
              <ul>
                <li>Integrations</li>
                <li>Templates</li>
                <li>API docs</li>
                <li>Guides & tutorials</li>
                <li>Hire a consultant</li>
                <li>Become an affiliate</li>
              </ul>
            </div>
            <div class="footer-column">
              <h4 className="font-semibold mt-8 pb-1">Learn</h4>
              <ul>
                <li>Customer stories</li>
                <li>Help center</li>
                <li>Webinars</li>
                <li>Blog</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <div className="text-left">
            <div class="footer-column">
              <h4 className="font-semibold pb-1">Get started</h4>
              <ul>
                <li>Switch from Confluence</li>
                <li>Switch from Asana</li>
                <li>Switch from Evernote</li>
                <li>Compare vs Monday</li>
                <li>Compare vs Clickup</li>
                <li>Compare vs Jira</li>
              </ul>
            </div>
            <div class="footer-column">
              <h4 className="font-semibold mt-8 pb-1">Resources</h4>
              <ul>
                <li>Pricing</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Media kit</li>
                <li>Email us</li>
                <li>Security</li>
                <li>Cookie settings</li>
                <li>Terms & privacy</li>
                <li>California Privacy Notice</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
