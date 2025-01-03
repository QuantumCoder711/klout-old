import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "../assets/img/background.jpg";
// import QrCode from './path-to-your-qr-code-image.jpg'; // Replace with the correct path to your QR code image

const SuccessPage = () => {
  return (
<div className="container-fluid custom-container" style={{
      padding: "20px",
      background: `url(${background}) no-repeat center center`,
      backgroundSize: "cover",
      display: "grid",
      placeContent: "center",
      minHeight: "100vh" // Ensures the background covers the full height of the viewport
    }}>
      <div className="card shadow p-3">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2>You have successfully checked in.</h2>
      <p className="mt-2" style={{fontSize: "14px"}}>Now Download the Klout Club App, to connect and network with your fellow participants at this event.</p>
    </div>
  </div>

  <div style={{display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", marginTop: "20px"}}>
      <a href="https://play.google.com/store/apps/details?id=com.klout.app&pli=1">
    <button className="py-2" style={{color: "white", backgroundColor:"black", borderRadius: "6px", fontSize: "12px"}}>
    <i className="icofont icofont-brand-android-robot" style={{ fontSize: "1.2rem", marginRight: "4px" }}></i>
      Download Now</button>
      </a> 

      <a href="https://apps.apple.com/in/app/klout-club/id6475306206">
    <button className="py-2" style={{color: "white", backgroundColor:"black", borderRadius: "6px", fontSize: "12px"}}>
    <i className="icofont icofont-brand-apple" style={{ fontSize: "1.2rem", marginRight: "4px" }}></i>
      Download Now</button>
      </a> 


    {/* <div className="col-md-6 col-lg-3 mb-3 d-flex justify-content-between">
      <a
        href="https://play.google.com/store/apps/details?id=com.klout.app&pli=1"
        className="download-btn flexbox-center d-block text-center p-2"
        style={{ background: "black", textDecoration: "none", color: "#fff", fontSize: "0.9rem",  }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="download-btn-icon mb-2">
          <i className="icofont icofont-brand-android-robot" style={{ fontSize: "1.5rem" }}></i>
        </div>
        <div className="download-btn-text">
          <p style={{ marginBottom: "0.5rem" }}>Available on</p>
          <h5>Android Store</h5>
        </div>
      </a>
      <a
        href="https://apps.apple.com/in/app/klout-club/id6475306206"
        className="download-btn flexbox-center d-block text-center p-2"
        style={{ background: "black", textDecoration: "none", color: "#fff", fontSize: "0.9rem" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="download-btn-icon mb-2">
          <i className="icofont icofont-brand-apple" style={{ fontSize: "1.5rem" }}></i>
        </div>
        <div className="download-btn-text">
          <p style={{ marginBottom: "0.5rem" }}>Available on</p>
          <h5>Apple Store</h5>
        </div>
      </a>
    </div> */}
  </div>

  {/* <div className="row justify-content-center mt-5">
    <div className="col-lg-6 text-center">
      <h5>Or scan this QR code to download the app</h5>
      <div className="mt-4">
        <img src={QrCode} alt="QR" style={{ width: '200px', height: '200px' }} />
      </div>
    </div>
  </div> */}
</div>
</div>

  );
};

export default SuccessPage;
