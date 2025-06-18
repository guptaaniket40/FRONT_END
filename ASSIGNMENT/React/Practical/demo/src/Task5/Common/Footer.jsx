 import React from "react";
 
 function Footer() {
   return (
     <div>
       <footer className="bg-dark text-light pt-4 pb-2 mt-5">
         <div className="container">
           <div className="row">
             {/* Brand Info */}
             <div className="col-md-4 mb-3">
               <h5 className="text-primary">Acme Solutions Inc.</h5>
               <p>
                 Empowering businesses with innovative technology solutions and reliable support services. Your success is our mission.
               </p>
 
               {/* Social Icons */}
               <div className="mt-3">
                 <a
                   href="https://linkedin.com"
                   className="text-light me-3 fs-5"
                   target="_blank"
                   rel="noreferrer"
                 >
                   <i className="bi bi-linkedin"></i>
                 </a>
                 <a
                   href="https://twitter.com"
                   className="text-light me-3 fs-5"
                   target="_blank"
                   rel="noreferrer"
                 >
                   <i className="bi bi-twitter-x"></i>
                 </a>
                 <a
                   href="mailto:contact@acmesolutions.com"
                   className="text-light fs-5"
                 >
                   <i className="bi bi-envelope-fill"></i>
                 </a>
               </div>
             </div>
 
             {/* Quick Links */}
             <div className="col-md-4 mb-3">
               <h6 className="text-light">Quick Links</h6>
               <ul className="list-unstyled">
                 <li>
                   <a href="#services" className="text-light text-decoration-none">
                     Services
                   </a>
                 </li>
                 <li>
                   <a href="#about" className="text-light text-decoration-none">
                     About Us
                   </a>
                 </li>
                 <li>
                   <a href="#careers" className="text-light text-decoration-none">
                     Careers
                   </a>
                 </li>
                 <li>
                   <a href="#contact" className="text-light text-decoration-none">
                     Contact
                   </a>
                 </li>
               </ul>
             </div>
 
             {/* Contact Info */}
             <div className="col-md-4 mb-3">
               <h6 className="text-light">Contact</h6>
               <p className="mb-1">📍 500 Innovation Drive, Tech Park, NY</p>
               <p className="mb-1">📞 +1 (800) 123-4567</p>
               <p>✉️ contact@acmesolutions.com</p>
             </div>
           </div>
 
           {/* Bottom Text */}
           <div className="text-center border-top pt-3">
             <small>© {new Date().getFullYear()} Acme Solutions Inc. All rights reserved.</small>
           </div>
         </div>
       </footer>
     </div>
   );
 }
 
 export default Footer;
 