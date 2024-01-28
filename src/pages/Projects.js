// Remove this import if you're not using the UnderConstruction component
// import UnderConstruction from '../components/UnderConstruction.js'

import Card from '../components/Card.js'

export default function Projects() {
  return <ProjectsComponents />;
}

function ProjectsComponents() {
  return (
    <div>
      <Card className="project0">
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

      </Card>

      <Card className="IckyBicky">

        <img className="pi_display"
          src='https://i.imgur.com/Rveor8E.jpg'
          width="350px"
        />
      </Card>


      <Card className="project1">
        <div className="chromablend">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IBmc5fa9X9A?si=E7mDBSW0vxQz8xPO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <img className="chroma_blend_animation"
          src='https://i.imgur.com/3ffp1Fz.gif'
          width="350px"
        />

        <img className="reference_frame_manual_colorization"
          src='https://i.imgur.com/ZuVE3go.jpg'
          width="350px"
        />

      </Card>

  <Card className="face_tracking_webcam">
<iframe width="560" height="315" src="https://www.youtube.com/embed/TcmhbfcM2XQ?si=GolZ1qMyJUD9ZZ0y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Card>
    </div>
  );

}
