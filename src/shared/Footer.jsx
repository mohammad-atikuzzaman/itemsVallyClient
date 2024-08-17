import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-green-50 text-base-content p-10 rounded-lg">
      <aside>
        <h2 className="text-2xl font-semibold">
          ITEMS<span className="text-green-400">VALLY</span>
        </h2>
        <p>Providing reliable products since 2024</p>
      </aside>
      <nav>
        <h6 className="footer-title text-green-400">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title text-green-400">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title text-green-400">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
