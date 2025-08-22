import "./Home.css";
import LinkButton from "../components/Button.js";
import Biometrics from "../components/Biometrics.js";
import Card from "../components/Card.js";

export default function Home() {
  return HomeComponents();
}

function HomeComponents() {
  return (
    <div className="home-components">
      <div className="home-info">
        <h2 className="job-title">Software Developer</h2>
        <h1 className="greeting">Hello, my name is Johann.</h1>
        <h2 className="description">
          I'm a Computer Science graduate with industry experience as a
          Python and JavaScript backend developer. My education allows me to be
          a versatile Software Engineer with consideration about design
          patterns, code efficiency and maintainability. I can openly explore
          high-level frameworks under the rigor and conscientiousness instilled
          by lower level languages. Outside of my academic and professional
          pursuits, I enjoy using my programming skills to create visually
          appealing and interactive projects that are practical yet
          aesthetically pleasing. Typically, my projects are a blend of my
          passions for both art and technology, resulting in something truly
          beautiful.

          [ Put a link here for the about page, and from there put the Github and LinkedIn page ]
        </h2>

        <div className="button-group">
          <LinkButton label="Github" href="https://github.com/JohannSuarez" />
          <LinkButton
            label="LinkedIn"
            href="https://www.linkedin.com/in/johann-suarez/"
          />
        </div>
      </div>
      <div className="portrait-section">
        <Card className="portrait-container">
          <img
            className="photo"
            src="https://i.imgur.com/5SFTIUv.png"
            width="350px"
            alt="portrait"
          />
          <Biometrics />
        </Card>
      </div>
    </div>
  );
}
