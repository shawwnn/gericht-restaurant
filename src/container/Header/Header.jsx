import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app_wrapper section_padding" id="home">
    <div className="app_wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p_opensans" style={{ margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa iure pariatur doloribus molestiae est. Corrupti enim excepturi aperiam dignissimos beatae.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app_wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
