import './Home.css'
export default function Home() {
  return HomeComponents()
}

function HomeComponents() {
  return (
    <div className="home-components">
      <div className="home-info">
        <h2 className="job-title">Junior Fullstack Developer</h2>
        <h1 className="greeting">Hello, my name is Johann Suarez</h1>
        <h2 className="description">
          I'm a 3rd Year Computer Science student with
          industry experience as a backend developer.
          Short text with details about you,
          what you do or your professional career.
          You can add more information on the about page.
        </h2>

        <div className="button-group">
          <h4>button_1</h4>
          <h4>button_2</h4>
        </div>
      </div>
      <div className="portrait">
        <h1>Portrait here</h1>
      </div>
    </div>)
}
