import "../styles.css";
import AboutCard from "../components/AboutCard.js";

export default function Contact() {
  return (
    <div >
        <AboutCard>
            <dl>
                <h1>Contact Information:</h1>

                <dt>E-Mail</dt>
                <dd>johann.suarez92@gmail.com</dd> <br/>

                <dt>Number</dt>
                <dd>250-884-4386</dd> <br/>

                <dt>Github</dt>
                <dd>https://github.com/JohannSuarez</dd><br/>

                <dt>LinkedIn</dt>
                <dd>https://www.linkedin.com/in/johann-suarez</dd><br/>

                <dt>Amateur Radio</dt>
                <dd>Callsign: VE7-IPC, NARA Monday night net weekly at 8:00PM PST</dd><br/>
            </dl>
      </AboutCard>
    </div>
  )
}
