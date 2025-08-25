import "../styles.css";
import InfoCard from "../components/InfoCard.js";

export default function About() {
    return (
        <div>
            <InfoCard>
                    <h1>Turning Curiosity into Code, Tools into Companions, and Life into Craft</h1>

                <p>
                    My journey with technology began at twelve, when a friend promised me <a href="https://sampwiki.blast.hk/wiki/PAWN">
                    admin powers on a video game server</a> if I could 
                    write a few lines of code. What started as a bargain turned into a lifelong pursuit: a love of 
                    programming, electronics, and solving problems with whatever tools lay within reach. 
                    Sometimes the plan succeeds, sometimes it fails, but always it teaches. 
                </p>
        
                <p>
                    I later graduated from Vancouver Island University, and along the way worked on projects ranging 
                    from calibrating pH sensors for an oyster farm to developing a React dashboard that helped medical 
                    teams track patient trends at a music festival. Each experience reminded me that code is more than 
                    logic: it is a companion in the craft of making life a little more navigable, a little more humane.
                </p>

                <p>
                    The story continues in my <a href="/projects">projects</a>, each one an experiment in turning ideas 
                    into something that serves. 
                </p>
                        {/* Picture, a good one. Let it feature your headphones and Baby Lisa */}
                    {/* Image urls here:
                        https://i.imgur.com/ORl2FRF.jpeg // Grad
                        https://i.imgur.com/NvkNpsT.png // Dev box
                        https://i.imgur.com/lp1svVl.jpeg // Shambhala ID
                        https://i.imgur.com/98i5jXY.png // Full Dashboard Page 1.
                        https://i.imgur.com/Kmh47J7.png // Chief Complaint Trend
                        https://i.imgur.com/8rzbBRj.png // Acuity Over Time
                      <h4>Resume (Tech)</h4>
                      <h4>Resume (General)</h4>
                      <h4>Qualifications/Certifications</h4>
                    */}

            </InfoCard>
        </div>
  )
}
