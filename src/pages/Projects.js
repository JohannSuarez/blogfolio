// Remove this import if you're not using the UnderConstruction component
// import UnderConstruction from '../components/UnderConstruction.js'

import BlogPostCard from "../components/BlogPostCard.js";
import "../styles.css";
import "../figures.css";

export default function Projects() {
  return <ProjectsComponents />;
}

function ProjectsComponents() {
  return (
    <div>
      <BlogPostCard className="project3">
        <article>
          <header>
            <h1>No Coolant Temperature Gauge? No Problem!</h1>
            <p>
              By <span class="author">Johann Suarez</span> on{" "}
              <time datetime="YYYY-MM-DD">April 1, 2024</time>
            </p>
          </header>
          <section>
            <br />
            <div class="row_set">
              <figure class="cap-bot">
                <img
                  alt="coolant temperature gauge on dashboard"
                  width="582"
                  src="https://i.imgur.com/BBSdLsd.jpeg"
                />
                <figcaption>
                  My DIY coolant temperature gauge sits beside tachometer on my
                  dashboard.
                </figcaption>
              </figure>

              <video width="200" height="440" controls>
                <source
                  src="https://i.imgur.com/AJheSae.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <p class="clearfix sole_paragraph">
              I've been using a 2008 Saturn Astra as my daily driver. It's had
              better days with the odometer reading over 280,000 kilometers and
              I being its third owner. One day I popped the hood open and a
              buddy pointed out how the coolant reservoir isn't supposed to look
              black. I showed a picture of it to more mechanically inclined
              friends and they warned me that the head gasket in the engine was
              possibly on its way out. This realization had me panicking for a
              whole day — I can't afford such an expensive repair or to get
              another car.
            </p>
            <p class="clearfix sole_paragraph">
              There was, however, a band-aid fix that should give me some peace
              of mind for a couple months until I've saved up for another beater
              car. I drained the dirty coolant, poured some Bar's Leak Head
              Gasket Repair solution onto the coolant reservoir along with new
              coolant, and prayed that it would be enough to plug the holes in
              the gasket.
            </p>

            <p class="clearfix sole_paragraph">
              The entire experience underscored the importance of knowing the
              current temperature of the engine at any moment in time. Because
              the engine's cooling system was compromised, and my car{" "}
              <b>
                does not have a built-in coolant temperature gauge on the
                dashboard
              </b>
              , I could be overheating the engine in the highway and have no
              clue. Fortunately, tinkering with an OBD II reader led to a
              stunning realization: I can query the engine myself and make a
              coolant gauge with a microcontroller!
            </p>

            <figure class="cap-bot">
              <img
                alt="coolant gauge wiring diagram"
                className="plotly_dash_monitor_image"
                width="587"
                src="https://i.imgur.com/wF3xxE8.png"
              />
              <figcaption>Wiring diagram of the coolant gauge</figcaption>
            </figure>
            <p class="clearfix sole_paragraph"></p>
            <p class="clearfix sole_paragraph"></p>
          </section>
        </article>
      </BlogPostCard>

      <BlogPostCard className="project2">
        <article>
          <header>
            <h1>pH Sensor System With Programmed Calibration Mode</h1>
            <p>
              By <span class="author">Johann Suarez</span> on{" "}
              <time datetime="YYYY-MM-DD">December 26, 2023</time>
            </p>
          </header>
          <section>
            <div class="row_set">
              <video width="200" height="400" controls>
                <source
                  src="https://i.imgur.com/1Dvw49y.mp4"
                  type="video/mp4"
                />
              </video>

              <p>
                For context, I was chosen to work on microcontrollers that
                monitored algae tanks in an oyster farm for the 2023 December
                break. To monitor the algae tanks, pH level sensors, light, and
                temperature sensors were attached to Arduino Megas that then
                relayed the data to Raspberry Pi 400s. The pH probes were
                undebatably the most crucial of the sensors, as too high or too
                low of a reading would indicate that the algae were dying. The
                client needed a dashboard to display the data collected by these
                sensors over time. Since the Arduino Megas were already
                connected to Raspberry Pi's , the data can be read from the
                Arduino through UART. In Linux, the serial port of a UART device
                is represented by a file, commonly <b>"/dev/ttyUSB0"</b> or{" "}
                <b>"/dev/ttyUSB1"</b>. The solution I came up with was to build
                a Python program that launched{" "}
                <a href="https://dash.plotly.com/">Plotly Dash</a>, and then ran
                two threads: The first thread reads incoming data from the
                Arduino from the serial port. The data picked up by the first
                thread is copied onto a shared queue. The second thread's job is
                to periodically check if the shared queue has new data. If the
                second thread notices there is new data, it then parses it into
                JSON data that Plotly Dash components can recognize. The Plotly
                Dash components are then refreshed and then the end result is a
                webpage with components that graphed realtime sensor data.
              </p>
            </div>

            <br />
            <div class="row_set">
              <figure class="cap-bot">
                <img
                  alt="plotly dash on monitor"
                  className="plotly_dash_monitor_image"
                  width="587"
                  src="https://i.imgur.com/gxSz1VJ.jpeg"
                />
                <figcaption>Dashboard monitors pH level and light</figcaption>
              </figure>

              <figure class="cap-bot">
                <img
                  alt="arduino_and_tanks_diagram"
                  src="https://i.imgur.com/FGOq6XR.png"
                />
                <figcaption>
                  Each column of 4 algae tanks was monitored by one Arduino.
                </figcaption>
              </figure>
            </div>
            <p class="clearfix sole_paragraph">
              While building the dashboard, I learned that the current setup had
              limitations. The pH sensor readings drift over time and gradually
              become unreliable. To get around this, the programmer who worked
              on this project before me did the recalibrations by hardcoding the
              calculated offsets of each sensor probe. Each offset was then
              added to the reading of their respective sensor probe in the
              Arduino's C++ code. Altough this worked short-term, it presented
              several drawbacks:
              <ol>
                <li>
                  The Arduino code has to be recompiled weekly with new
                  calibration values.
                </li>
                <li>
                  Calibration required doing calculations by hand that took
                  time. The entire column of tanks monitored by one Arduino had
                  to be taken offline to modify its code.
                </li>
                <li>
                  The farthest tank for the Arduino was around 5 meters, meaning
                  some pH sensor probes' wires would experience voltage dropoff
                  and reduce its reading accuracy.
                </li>
              </ol>
            </p>

            <p class="clearfix sole_paragraph">
              These limitations were beyond the scope of the contract I
              finished. However, I took a crack at addressing them in my spare
              time. The result of my brainstorming was a pH reading system
              powered by an ESP32 that had a calibration mode. The component
              list is as follows:
              <ul>
                <li>
                  <b>ESP32</b> - An inexpensive yet powerful microcontroller,
                  used for receiving the pH sensor's values, storing calibration
                  offsets, and sending the pH values back to the Raspberry Pi
                  through WiFi.
                </li>
                <li>
                  <b>4x4 Matrix Membrane Keypad</b> - For going into calibration
                  mode, an ESP32 thread waited for a sequence of key presses
                  (ex: "C" then "A")
                </li>
                <li>
                  <b>pH-4052 Module</b> - Module for measuring pH levels. It
                  gives an analog voltage from a pH probe and the ESP32 converts
                  it into readable pH values.{" "}
                </li>
                <li>
                  <b>128 x 64 0.91" OLED Display</b> - Regularly displays the pH
                  reading, warns of network issues, and also guides user through
                  calibration mode.
                </li>
                <li>
                  <b>3D Printed PLA Case</b> - I 3D modelled a housing to hold
                  all of the components together.
                </li>
              </ul>
            </p>

            <div class="row_set">
              <div className="sketchfab-embed-wrapper">
                <iframe
                  title="pH Reading System Case and Mount"
                  allowFullScreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking
                  execution-while-out-of-viewport
                  execution-while-not-rendered
                  web-share
                  width="640"
                  height="480"
                  src="https://sketchfab.com/models/8ee734ea2b724d068e0283ce7d61ca3d/embed?autospin=1&autostart=1"
                ></iframe>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "normal",
                    margin: "5px",
                    color: "#4A4A4A",
                  }}
                >
                  <a
                    href="https://sketchfab.com/3d-models/ph-reading-system-case-and-mount-8ee734ea2b724d068e0283ce7d61ca3d?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee734ea2b724d068e0283ce7d61ca3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold", color: "#1CAAD9" }}
                  >
                    pH Reading System Case and Mount
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://sketchfab.com/navier_stoked?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee734ea2b724d068e0283ce7d61ca3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold", color: "#1CAAD9" }}
                  >
                    wmosci
                  </a>{" "}
                  on{" "}
                  <a
                    href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee734ea2b724d068e0283ce7d61ca3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold", color: "#1CAAD9" }}
                  >
                    Sketchfab
                  </a>
                </p>
              </div>
            </div>

            <p class="clearfix sole_paragraph">
              The planned implementation had one of these units mounted above
              each water tank. The WiFi communication offered by the ESP32 meant
              voltage interference from having long physical wires were no
              longer an issue. With an HTTP server running locally on each
              Raspberry Pi, each ESP32 unit can communicate via HTTP POST to
              their designated Arduino to report their current pH reading. If a
              unit needed its pH sensor probe's weekly calibration, one simply
              keys in "C" and "A". The OLED display then instructs the user to
              dip the pH probe in two diffent pH levels, and afterwards
              automatically calculates the offset, and saves the offset in
              persistent memory.
            </p>

            <div class="row_set">
              <figure class="cap-bot">
                <img
                  alt="completed pH sensor kit setup"
                  width="855"
                  className="irl_ph_sensor"
                  src="https://i.imgur.com/KwyLlw4.jpg"
                />
                <figcaption>
                  Actual implementation. At the time I had no 128x64 OLED, so I
                  used a 128x32
                </figcaption>
              </figure>

              <figure class="cap-bot">
                <img
                  alt="planned_esp32_implementation"
                  src="https://i.imgur.com/eWHdzNH.jpg"
                />
                <figcaption>
                  The pH reading and calibration is modularized and physically
                  separated from the Arduino.
                </figcaption>
              </figure>
            </div>

            <p class="clearfix sole_paragraph">
              A great feature of my pH reading unit is it allowed anyone to view
              the current pH reading of an algae tank without needing to walk
              back to the desktop monitor. I designed it to function within the
              lab's system and also completely independently. Relying on a ESP32
              board, it can be powered by just a 5v power bank. Lastly, it will
              display the pH data through the OLED even before having
              successfully connected to the algae farm's local area network.
            </p>
          </section>
        </article>
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
        <article>
          <header>
            <h1>Face Tracking With a Webcam and Two Servo Motors</h1>
            <p>
              By <span class="author">Johann Suarez</span> on{" "}
              <time datetime="YYYY-MM-DD">August 20, 2020</time>
            </p>
          </header>
          <h3>
            No need for computationally heavy AI, the Viola-Jones algorithm can
            do the job.
          </h3>
          <h3>Under Construction. Stay tuned! </h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TcmhbfcM2XQ?si=GolZ1qMyJUD9ZZ0y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </article>
      </BlogPostCard>

      <BlogPostCard className="project0">
        <article>
          <header>
            <h1>
              ChromaBlend: A Fix to DeepRemaster's Low Resolution Limitation
            </h1>
            <p>
              By <span class="author">Johann Suarez</span> on{" "}
              <time datetime="YYYY-MM-DD">May 21, 2020</time>
            </p>
          </header>

          <section>
            <p>
              <h3>
                For the purpose of colorizing black and white films without
                painstakingly handpainting each frame.
              </h3>
              <h3>Under Construction. Stay tuned! </h3>
              <h3>
                In the meantime, see:{" "}
                <a href="https://github.com/JohannSuarez/chroma_blend">
                  ChromaBlend on Github
                </a>
              </h3>
            </p>
            <div class="row_set">
              <div className="chromablend">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/IBmc5fa9X9A?si=E7mDBSW0vxQz8xPO"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="row_set">
              <img
                alt="animation displaying chroma blend's function"
                className="chroma_blend_animation"
                src="https://i.imgur.com/3ffp1Fz.gif"
                width="560px"
              />
            </div>

            <div class="row_set">
              <img
                alt="handpainted reference frame"
                className="reference_frame_manual_colorization"
                src="https://i.imgur.com/ZuVE3go.jpg"
                width="350px"
              />
            </div>

            <br />
          </section>
        </article>
      </BlogPostCard>
    </div>
  );
}
