import './Biometrics.css';
import heart from '../images/icons8-favorite-48.png';
import sleep from '../images/icons8-moon-and-stars-32.png';
import React, { useState, useEffect } from 'react';

function get_date() {
  // Get the current date and time in Vancouver
  const vancouverTime = new Date();

  // Adjust for daylight saving time
  const timezoneOffset = vancouverTime.getTimezoneOffset();
  vancouverTime.setMinutes(vancouverTime.getMinutes() - timezoneOffset);

  // Format the date as YYYY-MM-DD
  const day = vancouverTime.getDate().toString().padStart(2, "0");
  const month = (vancouverTime.getMonth() + 1).toString().padStart(2, "0");
  const year = vancouverTime.getFullYear();

  return `${year}-${month}-${day}`;
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
        let current_date = get_date();
        
        // Fetch sleep data
        const response = await fetch(`https://www.johanns.xyz/sleep/${current_date}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const sleepJson = await response.json();
        setSleepData(sleepJson["totalMinutesAsleep"]);

        // Fetch heart rate data
        const response2 = await fetch(`https://www.johanns.xyz/heart/${current_date}`);
        if (!response2.ok) {
          throw new Error(`HTTP error! Status: ${response2.status}`);
        }
        const heartJson = await response2.json();
        setHeartData(heartJson["restingHeartRate"]);

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
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <div className="biometric-panel">
      <div className="biometric-title-div">
        <h3 className="biometric-data-title">Today's Biometrics</h3>
        <h4 className="biometric-data-title-date">({get_date()})</h4>
      </div>

      <div className="biometric-text-line">
        <img className="biometric-icon" src={sleep} alt="sleep icon" />
        <h4 className="biometric-text">Hours Slept: {(sleep_data / 60).toFixed(2)}</h4>
      </div>
      <div className="biometric-text-line">
        <img className="biometric-icon" src={heart} alt="heart icon" />
        <h4 className="biometric-text">Resting Heart Rate: {heart_data}</h4>
      </div>
    </div>
  );
}

export default Biometrics;

