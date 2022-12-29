import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-100 text-base-content">
  <div>
    <span className="footer-title">Services</span> 
    <Link  className="link link-hover">AC Servicing</Link> 
    <Link className="link link-hover">AC Cooling</Link> 
    <Link className="link link-hover">Microwave Oven </Link> 
    <Link className="link link-hover">LCD/LED/SMART TV Repair</Link>
  </div> 
  <div>
    <span className="footer-title">service pages</span> 
    <Link to='/myreviews' className="link link-hover">My Review</Link> 
    <Link to='/allservices' className="link link-hover">Services</Link> 
    <Link to='/addservices' className="link link-hover">Add Servies</Link> 
    <Link to='/login' className="link link-hover">Login</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="bg-orange-500 text-lg font-semibold px-2 pb-3 pt-2 rounded-lg text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;