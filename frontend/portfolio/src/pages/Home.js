import './Home.css'
import LinkButton from '../components/Button.js'
import Card from '../components/Card.js'

export default function Home() {
  return HomeComponents()
}

function HomeComponents() {
  return (
    <div className="home-components">
      <div className="home-info">
        <h2 className="job-title">Junior Fullstack Developer</h2>
        <h1 className="greeting">Hello, my name is Johann.</h1>
        <h2 className="description">
          I'm a 3rd Year Computer Science student with
          industry experience as a backend developer.
          Short text with details about you,
          what you do or your professional career.
          You can add more information on the about page.
        </h2>

        <div className="button-group">
          <LinkButton label="Github" href="https://github.com/JohannSuarez" />
          <LinkButton label="LinkedIn" href="https://www.linkedin.com/in/johann-suarez/" />
        </div>
      </div>
      <div className="portrait">
        <Card className="portrait-container">
          <img className="photo"
            src="https://i.imgur.com/pV0WM33.jpg"
            width="350px"
            alt="portrait" />
        </Card>
      </div>
    </div>)
}
