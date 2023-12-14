import React from 'react';

import lpimg1 from '../img/lpimg1.jpg';
import lpimg2 from '../img/lpimg2.jpg';
import lpimg3 from '../img/lpimg3.jpg';
import lpimg4 from '../img/lpimg4.jpg';
import lpimg5 from '../img/lpimg5.jpg';
import lpimg6 from '../img/lpimg6.jpg';

export default function Cards() {
  return (
    <div>
      <div className="l-products">
        <h2 className="p-heading">Our Products</h2>
        <div className="p-image row">
          <div className="img1 col">
            <a href="#">
              <img src={lpimg1} alt="Image" />
              <h4>Apple MacBook Pro 16.2</h4>
            </a>
          </div>
          <div className="img2 col">
            <a href="#">
              <img src={lpimg2} alt="Image" />
              <h4>ASUS ROG Strix Scar 15 (2022)</h4>
            </a>
          </div>
          <div className="img3 col">
            <a href="#">
              <img src={lpimg3} alt="Image" />
              <h4>OMEN 16-K0023DX by HP Gaming Laptop</h4>
            </a>
          </div>
        </div>

        <div className="p-image row">
          <div className="img4 col">
            <a href="#">
              <img src={lpimg4} alt="Image" />
              <h4>Lenovo IdeaPad 3 15 Laptop</h4>
            </a>
          </div>
          <div className="img5 col">
            <a href="#">
              <img src={lpimg5} alt="Image" />
              <h4>MSI Sword 15 A12UE Gaming Laptop</h4>
            </a>
          </div>
          <div className="img6 col">
            <a href="#">
              <img src={lpimg6} alt="Image" />
              <h4>Acer Aspire 5 A515-57-74Q9 Notebook</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
