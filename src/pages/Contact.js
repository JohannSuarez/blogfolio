import "../styles.css";
import InfoCard from "../components/InfoCard.js";

export default function Contact() {
  return (
    <div >
        <InfoCard>
            <dl>
                <h1>Contact Information:</h1>

                <dt>E-Mail</dt>
                <dd>johann.suarez92@gmail.com</dd> <br/>

                <dt>Number</dt>
                <dd>250-884-4386</dd> <br/>

                <dt>Github</dt>
                <dd>
                    <a href="https://github.com/JohannSuarez" target="_blank" rel="noreferrer">https://github.com/JohannSuarez</a>
                </dd><br/>

                <dt>LinkedIn</dt>
                <dd>
                    <a href="https://linkedin.com/in/johann-suarez" target="_blank" rel="noreferrer">https://www.linkedin.com/in/johann-suarez</a>
                </dd>
                <br/>
                <dt>Amateur Radio</dt>
                <dd>Callsign: VE7-IPC, NARA Monday night net weekly at 8:00PM PST</dd><br/>
            </dl>
      </InfoCard>
    </div>
  )
}
