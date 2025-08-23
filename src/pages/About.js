import "../styles.css";
import InfoCard from "../components/InfoCard.js";

export default function About() {
    return (
        <div>
            <InfoCard>
                <p>
                    <h1>Turning Curiosity into Code, Tools into Companions, and Life into Craft</h1>
                    {/* Picture, a good one. Let it feature your headphones and Baby Lisa */}
                    {/* Image urls here:
                        https://i.imgur.com/ORl2FRF.jpeg // Grad
                        https://i.imgur.com/NvkNpsT.png // Dev box
                        https://i.imgur.com/lp1svVl.jpeg // Shambhala ID
                        https://i.imgur.com/98i5jXY.png // Full Dashboard Page 1.
                        https://i.imgur.com/Kmh47J7.png // Chief Complaint Trend
                        https://i.imgur.com/8rzbBRj.png // Acuity Over Time
                    */}
                    <p> Put a 2 paragraph summary here. 
                        Education, 
                        Contributions/Volunteer Work,
                      <h2>Shambhala Music Festival - Put pictures here</h2>
                        Projects (I see problem, is there a practical solution that intersects with code and doubles as a learning opportunity?)
                    </p>
                      <h4>Resume (Tech)</h4>
                      <h4>Resume (General)</h4>
                      <h4>Qualifications/Certifications</h4>
                </p>
            </InfoCard>
        </div>
  )
}
