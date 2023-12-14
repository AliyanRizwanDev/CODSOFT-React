import React from 'react';

import socialIcon1 from '../img/social-1.png';
import socialIcon2 from '../img/social-2.png';
import socialIcon3 from '../img/social-3.png';
import socialIcon4 from '../img/social-4.png';

export default function Footer() {
  return (
    <footer className="row justify-content-between">
      <div className=" news col-7">
        <h4 className="News-h">News</h4>
        <ul>
          <li>
            <a href="https://www.laptopmag.com/news/live/black-friday-gaming-laptop-deals" target="_blank">
              Black Friday Gaming Laptop deals still running today LIVE: Big savings on Alienware, Razer, Asus and more
            </a>
          </li>
          <li>
            <a href="https://www.laptopmag.com/uk/best-macbook-deals" target="_blank">
              Wow! The M1 MacBook Pro with 1TB of storage is $500 off right now
            </a>
          </li>
          <li>
            <a href="https://www.laptopmag.com/news/cyber-monday-deals-2022" target="_blank">
              Extended Cyber Monday deals are now Cyber Week with epic ongoing deals on Laptops.
            </a>
          </li>
          <li>
            <a href="https://www.laptopmag.com/news/best-dell-deals" target="_blank">
              The Best Dell Deals in December 2022.
            </a>
          </li>
        </ul>
      </div>
      <div className=" f-social-h col-3 align-self-center">
        <a href="https://www.youtube.com/">
          <img src={socialIcon1} alt="Image" className="f-social" />
        </a>
        <a href="https://web.whatsapp.com/">
          <img src={socialIcon2} alt="Image" className="f-social" />
        </a>
        <a href="https://twitter.com/">
          <img src={socialIcon3} alt="Image" className="f-social" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={socialIcon4} alt="Image" className="f-social" />
        </a>
      </div>
      <div className="creator">
        <p>Created by Mohammad Aliyan L1F20BSCS0029</p>
      </div>
    </footer>
  );
}
