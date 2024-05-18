import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/m.jpg" class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="images/m2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="images/m3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* card  */}

      <div
        className="card-group 
      "
      >
        <div className="card">
          <img src="images/m4.jpeg" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Samsung </h5>
            <p className="card-text">
              Dimensions 149.9 x 70.4 x 7.8 mm (5.90 x 2.77 x 0.31 in) Weight
              157 g (5.54 oz) Build Glass front (Gorilla Glass 6), glass back
              (Gorilla Glass 5), aluminum frame SIM Single SIM (Nano-SIM) or
              Hybrid Dual SIM (Nano-SIM, dual stand-by) IP68 dust/water
              resistant (up to 1.5m for 30 min) OS Android 9.0 (Pie), upgradable
              to Android 12, One UI 4.1 Chipset Exynos 9820 (8 nm) - EMEA/LATAM
              Qualcomm SM8150 Snapdragon 855 (7 nm) - USA/China CPU Octa-core
              (2x2.73 GHz Mongoose M4 & 2x2.31 GHz Cortex-A75 & 4x1.95 GHz
              Cortex-A55) - EMEA/LATAM Octa-core (1x2.84 GHz Kryo 485 & 3x2.42
              GHz Kryo 485 & 4x1.78 GHz Kryo 485) - USA/China
            </p>
            <button type="button" className="btn btn-danger">
              Add to cart
            </button>
            <p className="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src="images/m.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Iphone 13 Mini</h5>
            <p className="card-text">
              Super Retina XDR display 15.4 cm / 6.1″ (diagonal) all‑screen OLED
              display 2532x1170-pixel resolution at 460 ppi HDR display True
              Tone Wide colour (P3) Haptic Touch 20,00,000:1 contrast ratio
              (typical) 800 nits max brightness (typical); 1,200 nits max
              brightness (HDR) Fingerprint-resistant oleophobic coating Support
              for display of multiple languages and characters simultaneously
              The iPhone 13 display has rounded corners that follow a beautiful
              curved design, and these corners are within a standard rectangle.
              When measured as a standard rectangular shape, the screen is 15.40
              centimetres / 6.06“ diagonally (actual viewable area is less)..
            </p>
            <button type="button" className="btn btn-danger">
              Add to cart
            </button>
            <p className="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="images/m2.jpeg" className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 className="card-title">OnePlus 12</h5>
            <p className="card-text">
              12 GB RAM + 256 GB Storage: ₹64,999 (inclusive of all taxes) 16 GB
              RAM + 512 GB Storage: ₹69,999 (inclusive of all taxes) Dimensions
              Height: 16.43 cm Width: 7.58 cm Thickness: 0.92 cm Weight: 220 g
              Display Parameters Size: 17.32 cm (6.82 inches, measured
              diagonally from corner to corner) Resolution: 3168*1440 (QHD+),
              510 ppi Aspect Ratio: 19.8:9 HBM / Peak Brightness: 1600 / 4500
              nits Refresh Rate: 1-120 Hz dynamic Type: 120Hz ProXDR Display
              with LTPO Support 100% Display P3, 10-bit Color Depth Cover Glass:
              Corning® Gorilla® Glass Victus 2
            </p>
            <button type="button" className="btn btn-danger">
              Add to cart
            </button>
            <p className="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="images/m3.jpeg" className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 className="card-title">Motorola</h5>
            <p className="card-text">
              12 GB RAM + 256 GB Storage: ₹64,999 (inclusive of all taxes) 16 GB
              RAM + 512 GB Storage: ₹69,999 (inclusive of all taxes) Dimensions
              Height: 16.43 cm Width: 7.58 cm Thickness: 0.92 cm Weight: 220 g
              Display Parameters Size: 17.32 cm (6.82 inches, measured
              diagonally from corner to corner) Resolution: 3168*1440 (QHD+),
              510 ppi Aspect Ratio: 19.8:9 HBM / Peak Brightness: 1600 / 4500
              nits Refresh Rate: 1-120 Hz dynamic Type: 120Hz ProXDR Display
              with LTPO Support 100% Display P3, 10-bit Color Depth Cover Glass:
              Corning® Gorilla® Glass Victus 2
            </p>
            <button type="button" className="btn btn-danger">
              Add to cart
            </button>
            <p className="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

      <div className="card-group">
        <div className="card">
          <img src="images/w1.jpeg" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Watch</h5>
            <p className="card-text">
              45mm or 41mm case sizes Aluminum or stainless steel Speaker
              Microphone Control: Digital Crown with haptic feedback Side button
              Double tap gesture On-Device Siri Display: Always-On Retina LTPO
              OLED display Edge-to-edge display Ion-X front glass (Aluminium
              cases) Sapphire front crystal (Stainless steel cases) Up to 2,000
              nits maximum brightness 1 nit minimum brightness Chip: S9 SiP with
              64-bit dual-core processor 4-core Apple Neural Engine 64GB
              capacity Sensors: Blood oxygen sensor and app Footnote 3
              Electrical heart sensor and ECG app Footnote 4 Third-generation
              optical heart sensor High and low heart rate notifications
              Footnote 4 Irregular rhythm notifications Footnote 5 Sleep stages
              Temperature sensing Footnote 6 Compass with Waypoints and
              Backtrack Always-on altimeter High-g accelerometer Ambient light
              sensor Safety: Emergency SOS Footnote 8 International emergency
            </p>
            <button className="btn btn-danger"> Add to cart</button>
            <p className="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="images/w2.jpeg" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Smart Watch</h5>
            <p className="card-text">
            45mm or 41mm case sizes Aluminum or stainless steel Speaker
              Microphone Control: Digital Crown with haptic feedback Side button
              Double tap gesture On-Device Siri Display: Always-On Retina LTPO
              OLED display Edge-to-edge display Ion-X front glass (Aluminium
              cases) Sapphire front crystal (Stainless steel cases) Up to 2,000
              nits maximum brightness 1 nit minimum brightness Chip: S9 SiP with
              64-bit dual-core processor 4-core Apple Neural Engine 64GB
              capacity Sensors: Blood oxygen sensor and app Footnote 3
              Electrical heart sensor and ECG app Footnote 4 Third-generation
              optical heart sensor High and low heart rate notifications
              Footnote 4 Irregular rhythm notifications Footnote 5 Sleep stages
              Temperature sensing Footnote 6 Compass with Waypoints and
              Backtrack Always-on altimeter High-g accelerometer Ambient light
              sensor Safety: Emergency SOS Footnote 8 International emergency
            </p>
            <button className="btn btn-danger">Add to cart</button>
            <p className="card-text">
             
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="images/w3.jpeg" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">watch</h5>
            <p className="card-text">
            45mm or 41mm case sizes Aluminum or stainless steel Speaker
              Microphone Control: Digital Crown with haptic feedback Side button
              Double tap gesture On-Device Siri Display: Always-On Retina LTPO
              OLED display Edge-to-edge display Ion-X front glass (Aluminium
              cases) Sapphire front crystal (Stainless steel cases) Up to 2,000
              nits maximum brightness 1 nit minimum brightness Chip: S9 SiP with
              64-bit dual-core processor 4-core Apple Neural Engine 64GB
              capacity Sensors: Blood oxygen sensor and app Footnote 3
              Electrical heart sensor and ECG app Footnote 4 Third-generation
              optical heart sensor High and low heart rate notifications
              Footnote 4 Irregular rhythm notifications Footnote 5 Sleep stages
              Temperature sensing Footnote 6 Compass with Waypoints and
              Backtrack Always-on altimeter High-g accelerometer Ambient light
              sensor Safety: Emergency SOS Footnote 8 International emergency
            </p>
            <button className="btn btn-danger"> Add to cart</button>
            <p className="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="images/w3.jpeg" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
            45mm or 41mm case sizes Aluminum or stainless steel Speaker
              Microphone Control: Digital Crown with haptic feedback Side button
              Double tap gesture On-Device Siri Display: Always-On Retina LTPO
              OLED display Edge-to-edge display Ion-X front glass (Aluminium
              cases) Sapphire front crystal (Stainless steel cases) Up to 2,000
              nits maximum brightness 1 nit minimum brightness Chip: S9 SiP with
              64-bit dual-core processor 4-core Apple Neural Engine 64GB
              capacity Sensors: Blood oxygen sensor and app Footnote 3
              Electrical heart sensor and ECG app Footnote 4 Third-generation
              optical heart sensor High and low heart rate notifications
              Footnote 4 Irregular rhythm notifications Footnote 5 Sleep stages
              Temperature sensing Footnote 6 Compass with Waypoints and
              Backtrack Always-on altimeter High-g accelerometer Ambient light
              sensor Safety: Emergency SOS Footnote 8 International emergency
            </p>
            <button className="btn btn-danger"> Add to cart</button>
            <p className="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

      <div className="footer">copyright@2024 ducat India</div>
    </>
  );
}

export default Footer;
