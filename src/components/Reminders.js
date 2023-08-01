import React, { useState, useEffect } from "react";
import "../styles/reminder-styles.css";

const Reminders = () => {
  const [alarmListArr, setAlarmListArr] = useState([]);
  const [hour, setHour] = useState("");
  const [alarmName, setAlarmName] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriod] = useState("AM");
  const [alarmCount, setAlarmCount] = useState(0);
  const [isAlarmRinging, setIsAlarmRinging] = useState(false);
  const ring = new Audio("audio/Alarm-ringtone.mp3");

  // Script for Time and Date

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const dname = now.getDay();
      const mo = now.getMonth();
      const dnum = now.getDate();
      const yr = now.getFullYear();
      let hou = now.getHours();
      let min = now.getMinutes();
      const sec = now.getSeconds();
      let pe = "AM";

      if (hou === 0) {
        hou = 12;
      }

      if (hou > 12) {
        hou -= 12;
        pe = "PM";
      }

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const ids = [
        "dayName",
        "month",
        "dayNum",
        "year",
        "hour",
        "minutes",
        "seconds",
        "period",
      ];
      const values = [
        getDayName(dname),
        months[mo],
        dnum.toString().padStart(2, "0"),
        yr,
        hou.toString().padStart(2, "0"),
        min.toString().padStart(2, "0"),
        sec.toString().padStart(2, "0"),
        pe,
      ];

      for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
      }

      const formattedTime = `${hou.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}:${sec.toString().padStart(2, "0")} ${pe}`;
      setIsAlarmRinging(
        alarmListArr.some((alarm) => alarm.time === formattedTime)
      );
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [alarmListArr]);

  // Helper function to get day name
  const getDayName = (dayNumber) => {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return week[dayNumber];
  };

  // Set Alarm section

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleAlarmNameChange = (event) => {
    setAlarmName(event.target.value);
  };

  const setAlarm = () => {
    if (hour === "" || minute === "" || alarmName === "") {
      alert("Please, select a valid input for Hour, Minute, and Alarm Name.");
    } else {
      const time = `${hour}:${minute}:00 ${period}`;
      setAlarmCount((prevCount) => prevCount + 1);
      setAlarmListArr((prevList) => [...prevList, { time, name: alarmName }]);
      setAlarmName("");
    }
  };

  const deleteAlarm = (click_id) => {
    setAlarmListArr((prevList) => {
      const newList = prevList.filter((_, index) => index !== click_id - 1);
      return newList;
    });
  };

  const stopAlarm = () => {
    ring.pause();
    setIsAlarmRinging(false);
  };

  return (
    <div className="alarm">
      <h1> Reminder </h1>
      <div className="datetime">
        <div className="date">
          <span id="dayName">Day</span>, <span id="month">Month</span>,{" "}
          <span id="dayNum">00</span>, <span id="year">Year</span>
        </div>
        <div className="time">
          <span id="hour">00</span>:<span id="minutes">00</span>:
          <span id="seconds">00</span>:<span id="period">AM</span>
        </div>
        {isAlarmRinging && (
          <button id="stopAlarm" onClick={stopAlarm}>
            Stop Alarm
          </button>
        )}
      </div>
      <hr />
      <div className="setAlarm">
        <div className="column">
          <select value={hour} onChange={handleHourChange}>
            <option value="" hidden>
              Hour
            </option>
            {Array.from({ length: 12 }, (_, i) =>
              (i + 1).toString().padStart(2, "0")
            ).map((hourOption) => (
              <option key={hourOption} value={hourOption}>
                {hourOption}
              </option>
            ))}
          </select>
        </div>
        <div className="column">
          <select value={minute} onChange={handleMinuteChange}>
            <option value="" hidden>
              Minute
            </option>
            {Array.from({ length: 60 }, (_, i) =>
              i.toString().padStart(2, "0")
            ).map((minuteOption) => (
              <option key={minuteOption} value={minuteOption}>
                {minuteOption}
              </option>
            ))}
          </select>
        </div>
        <div className="column">
          <select value={period} onChange={handlePeriodChange}>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <input
          type="text"
          id="alarmNameInput"
          placeholder="Alarm Name"
          value={alarmName}
          onChange={handleAlarmNameChange}
        />
        <button
          id="btn-setAlarm"
          type="submit"
          onClick={setAlarm}
          style={{ color: "white" }}
        >
          Set Alarm
        </button>
      </div>
      <hr />
      <div className="alarmList">
        {alarmListArr.map((alarm, index) => (
          <div className="table-row alarmLog" key={`alarm${index + 1}`}>
            <div className="table-column">{alarm.time}</div>
            <div className="table-column alarmName">{alarm.name}</div>
            <div className="table-column">
              <button
                className="btn-delete"
                onClick={() => deleteAlarm(index + 1)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders;

// import React, { useState, useEffect } from "react";
// import '../styles/reminder-styles.css';

// const Reminders = () => {
//   const [alarmListArr, setAlarmListArr] = useState([]);
//   const [hour, setHour] = useState("");
//   const [alarmName, setAlarmName] = useState("");
//   const [minute, setMinute] = useState("");
//   const [period, setPeriod] = useState("AM");
//   const [alarmCount, setAlarmCount] = useState(0);
//   const [isAlarmRinging, setIsAlarmRinging] = useState(false);
//   const ring = new Audio("audio/Alarm-ringtone.mp3");

//   // Script for Time and Date

//   useEffect(() => {
//     const updateClock = () => {
//       const now = new Date();
//       const dname = now.getDay();
//       const mo = now.getMonth();
//       const dnum = now.getDate();
//       const yr = now.getFullYear();
//       let hou = now.getHours();
//       let min = now.getMinutes();
//       const sec = now.getSeconds();
//       let pe = "AM";

//       if (hou === 0) {
//         hou = 12;
//       }

//       if (hou > 12) {
//         hou -= 12;
//         pe = "PM";
//       }

//       const months = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December",
//       ];

//       const ids = ["dayName", "month", "dayNum", "year", "hour", "minutes", "seconds", "period"];
//       const values = [
//         getDayName(dname),
//         months[mo],
//         dnum.toString().padStart(2, "0"),
//         yr,
//         hou.toString().padStart(2, "0"),
//         min.toString().padStart(2, "0"),
//         sec.toString().padStart(2, "0"),
//         pe,
//       ];

//       for (let i = 0; i < ids.length; i++) {
//         document.getElementById(ids[i]).firstChild.nodeValue = values[i];
//       }

//       const formattedTime = `${hou.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")} ${pe}`;
//       setIsAlarmRinging(alarmListArr.some(alarm => alarm.time === formattedTime));
//     };

//     const intervalId = setInterval(updateClock, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [alarmListArr]);

//   // Helper function to get day name
//   const getDayName = (dayNumber) => {
//     const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return week[dayNumber];
//   };

//   // Set Alarm section

//   const handleHourChange = (event) => {
//     setHour(event.target.value);
//   };

//   const handleMinuteChange = (event) => {
//     setMinute(event.target.value);
//   };

//   const handlePeriodChange = (event) => {
//     setPeriod(event.target.value);
//   };

//   const handleAlarmNameChange = (event) => {
//     setAlarmName(event.target.value);
//   };

//   const setAlarm = () => {
//     if (hour === "" || minute === "" || alarmName === "") {
//       alert("Please, select a valid input for Hour, Minute, and Alarm Name.");
//     } else {
//       const time = `${hour}:${minute}:00 ${period}`;
//       setAlarmCount((prevCount) => prevCount + 1);
//       setAlarmListArr((prevList) => [...prevList, { time, name: alarmName }]);
//       setAlarmName("");
//     }
//   };

//   const deleteAlarm = (click_id) => {
//     setAlarmListArr((prevList) => {
//       const newList = prevList.filter((_, index) => index !== click_id - 1);
//       return newList;
//     });
//   };

//   const stopAlarm = () => {
//     ring.pause();
//     setIsAlarmRinging(false);
//   };

//   return (
//     <div className="alarm">
//       <h1> Reminder </h1>
//       <div className="datetime">
//         <div className="date">
//           <span id="dayName">Day</span>, <span id="month">Month</span>, <span id="dayNum">00</span>, <span id="year">Year</span>
//         </div>
//         <div className="time">
//           <span id="hour">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>:<span id="period">AM</span>
//         </div>
//         {isAlarmRinging && <button id="stopAlarm" onClick={stopAlarm}>Stop Alarm</button>}
//       </div>
//       <hr />
//       <div className="setAlarm">
//         <div className="column">
//           <select value={hour} onChange={handleHourChange}>
//             <option value="" hidden>
//               Hour
//             </option>
//             {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((hourOption) => (
//               <option key={hourOption} value={hourOption}>
//                 {hourOption}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="column">
//           <select value={minute} onChange={handleMinuteChange}>
//             <option value="" hidden>
//               Minute
//             </option>
//             {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0")).map((minuteOption) => (
//               <option key={minuteOption} value={minuteOption}>
//                 {minuteOption}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="column">
//           <select value={period} onChange={handlePeriodChange}>
//             <option value="AM">AM</option>
//             <option value="PM">PM</option>
//           </select>
//         </div>
//         <input
//           type="text"
//           id="alarmNameInput"
//           placeholder="Alarm Name"
//           value={alarmName}
//           onChange={handleAlarmNameChange}
//         />
//         <button id="btn-setAlarm" type="submit" onClick={setAlarm}>
//           Set Alarm
//         </button>
//       </div>
//       <hr />
//       <div className="alarmList">
//         {alarmListArr.map((alarm, index) => (
//           <div className="alarmLog" key={`alarm${index + 1}`}>
//             <span>{alarm.time}</span>
//             <span className="alarmName">{alarm.name}</span>
//             <button className="btn-delete" onClick={() => deleteAlarm(index + 1)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reminders;
