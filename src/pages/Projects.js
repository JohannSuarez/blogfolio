// Remove this import if you're not using the UnderConstruction component
// import UnderConstruction from '../components/UnderConstruction.js'

import BlogPostCard from '../components/BlogPostCard.js'

export default function Projects() {
  return <ProjectsComponents />;
}

function ProjectsComponents() {
  return (
    <div>
      <BlogPostCard className="project0">
        <h1>pH Sensor System With Programmed Calibration Mode</h1>
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="pH Reading System Case and Mount"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/8ee734ea2b724d068e0283ce7d61ca3d/embed?autospin=1&autostart=1"
          ></iframe>
          <p style={{ fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A" }}>
            <a
              href="https://sketchfab.com/3d-models/ph-reading-system-case-and-mount-8ee734ea2b724d068e0283ce7d61ca3d?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee734ea2b724d068e0283ce7d61ca3d"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              pH Reading System Case and Mount
            </a> by <a
              href="https://sketchfab.com/navier_stoked?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee734ea2b724d068e0283ce7d61ca3d"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              wmosci
            </a> on <a
              href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee734ea2b724d068e0283ce7d61ca3d"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: "#1CAAD9" }}
            >
              Sketchfab
            </a>

          </p>
        </div>

        <img className="irl_ph_sensor"
          src='https://i.imgur.com/KwyLlw4.jpg'
          width="350px"
        />
        <img className="irl_ph_sensor_oled"
          src='https://i.imgur.com/uzMdvOr.jpg'
          width="350px"
        />
        <img className="ph_sensor_dimensions"
          src='https://i.imgur.com/Qczu3Tg.png'
          width="350px"
        />
        <img className="ph_sensor_empty_case"
          src='https://i.imgur.com/L7AdSkD.png'
          width="350px"
        />
        <img className="ph_sensor_component_diagram"
          src='https://i.imgur.com/7014Xl0.png'
          width="350px"
        />

        <p>
          Background:  Maintained and improved algae generation tank microcontroller systems.
          Each tank is monitored by Arduino Megas hooked with sensors to collect light, temperature,
          and pH levels. The microcontroller uses relay switches to adjust these parameters for algae growth.

          <br/>
          Contributions:
          Wrote a program to read from Arduino's serial connection port, parsed the data, and then converted
          it into tabular data for real-time plotting and visualization using Plotly Dash.
        </p>
      </BlogPostCard>

      {/*
      <BlogPostCard className="IckyBicky">

        <img className="pi_display"
          src='https://i.imgur.com/Rveor8E.jpg'
          width="350px"
        />
      </BlogPostCard>
      */}


      <BlogPostCard className="project1">
        <h1>ChromaBlend: A Fix to DeepRemaster's Low Resolution Limitation</h1>
        <div className="chromablend">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IBmc5fa9X9A?si=E7mDBSW0vxQz8xPO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <br/>
        <img className="chroma_blend_animation"
          src='https://i.imgur.com/3ffp1Fz.gif'
          width="350px"
        />


        <br/>
        <img className="reference_frame_manual_colorization"
          src='https://i.imgur.com/ZuVE3go.jpg'
          width="350px"
        />

      </BlogPostCard>

  <BlogPostCard className="face_tracking_webcam">
    <h1>Face Tracking With a Webcam and Two Servo Motors</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TcmhbfcM2XQ?si=GolZ1qMyJUD9ZZ0y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </BlogPostCard>
    </div>
  );
}
