import './Biometrics.css';
import heart from '../images/icons8-favorite-48.png'
import sleep from '../images/icons8-moon-and-stars-32.png'
import React, { useState, useEffect } from 'react';

function get_date() {
  // Get the current date and time in Vancouver
  const vancouverTime = new Date();

  // Set the timezone offset to -7 hours (Vancouver is in Pacific Time, which is 7 hours behind UTC)
  vancouverTime.setHours(vancouverTime.getHours() - 7);

  // Get the day of the month (1-31) and pad it with a leading zero if necessary
  const day = vancouverTime.getDate().toString().padStart(2, "0");

  // Get the month (0-11) and pad it with a leading zero if necessary
  const month = (vancouverTime.getMonth() + 1).toString().padStart(2, "0");

  // Get the year (four digits)
  const year = vancouverTime.getFullYear();

  return `${year}-${month}-${day}`
}

function Biometrics() {
  const [sleep_data, setSleepData] = useState(null);
  const [heart_data, setHeartData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBiometricData() {
      setIsLoading(true);
      try {
        let current_date = get_date()
        const response = await fetch(`http://localhost:8501/sleep/${current_date}`);
        const json = await response.json();
        setSleepData(json["totalMinutesAsleep"]);


        const response2 = await fetch(`http://localhost:8501/heart/${current_date}`);
        const json2 = await response2.json();
        setHeartData(json2["restingHeartRate"]);

      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBiometricData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    /* We'll keep this line for debugging
     * return <p>An error occurred: {error.message}</p>;
     */

    // This component is optional. For production
    // we'll just not show it at all if it bugs out.
    return <div></div>
  }

  return (
    <div className="biometric-panel">

      <div className="biometric-title-div">
        <h3 className="biometric-data-title">Today's Biometrics</h3>
        <h4 className="biometric-data-title-date">({get_date()})</h4>
      </div>


      <div className="biometric-text-line">
        <img className="biometric-icon" src={sleep} alt="sleep icon" />
        <h4 className="biometric-text" > Hours Slept: {(sleep_data / 60).toFixed(2)}</h4>
      </div>
      <div className="biometric-text-line">
        <img className="biometric-icon" src={heart} alt="heart icon" />
        <h4 className="biometric-text" >  Resting Heart Rate: {heart_data}</h4>
      </div>

    </div>
  )
}

export default Biometrics;
