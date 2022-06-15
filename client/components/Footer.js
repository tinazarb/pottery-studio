import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div>FAQ | Return Policy</div>
        <div>
          <a href="https://instagram.com">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="mail-outline"></ion-icon>
          <ion-icon name="call-outline"></ion-icon>
        </div>
        <div>© 2022 Pottery Studio LLC</div>
      </footer>
    </div>
  );
};

export default Footer;
