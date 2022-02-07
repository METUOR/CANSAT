import React from "react";
import "./telemData.css";



const TelemData = (props) => {
  return (
    <div className="data-container">
      <div className="left-side">
<<<<<<< HEAD
        <div><pre className="data-text">C_TEAM_ID        : {props.telemetry_c.C_TEAM_ID}</pre></div>
        <div><pre className="data-text">C_MISSION_TIME   : {props.telemetry_c.C_MISSION_TIME}</pre></div>
        <div><pre className="data-text">C_PACKET_COUNT   : {props.telemetry_c.C_PACKET_COUNT}</pre></div>
        <div><pre className="data-text">C_PACKET_TYPE    : {props.telemetry_c.C_PACKET_TYPE}</pre></div>
        <div><pre className="data-text">C_MODE           : {props.telemetry_c.C_MODE}</pre></div>
        <div><pre className="data-text">C_TP_RELEASED    : {props.telemetry_c.C_TP_RELEASED}</pre></div>
        <div><pre className="data-text">C_ALTITUDE       : {props.telemetry_c.C_ALTITUDE}</pre></div>
        <div><pre className="data-text">C_TEMP           : {props.telemetry_c.C_TEMP}</pre></div>
        <div><pre className="data-text">C_VOLTAGE        : {props.telemetry_c.C_VOLTAGE}</pre></div>
        <div><pre className="data-text">C_GPS_TIME       : {props.telemetry_c.C_GPS_TIME}</pre></div>
        <div><pre className="data-text">C_GPS_LATITUDE   : {props.telemetry_c.C_GPS_LATITUDE}</pre></div>
        <div><pre className="data-text">C_GPS_LONGITUDE  : {props.telemetry_c.C_GPS_LONGITUDE}</pre></div>
        <div><pre className="data-text">C_GPS_ALTITUDE   : {props.telemetry_c.C_GPS_ALTITUDE}</pre></div>
        <div><pre className="data-text">C_GPS_SATS       : {props.telemetry_c.C_GPS_SATS}</pre></div>
        <div><pre className="data-text">C_SOFTWARE_STATE : {props.telemetry_c.C_SOFTWARE_STATE}</pre></div>
        <div><pre className="data-text">C_CMD_ECHO       : {props.telemetry_c.C_CMD_ECHO}</pre></div>
      </div>
      <div className="right-side">
        <div><pre className="data-text">T_TEAM_ID           : {props.telemetry_t.T_TEAM_ID}</pre></div>
        <div><pre className="data-text">T_MISSION_TIME      : {props.telemetry_t.T_MISSION_TIME}</pre></div>
        <div><pre className="data-text">T_TP_SOFTWARE_STATE : {props.telemetry_t.T_TP_SOFTWARE_STATE}</pre></div>
        <div><pre className="data-text">T_POINTING_ERROR    : {props.telemetry_t.T_POINTING_ERROR}</pre></div>
        <div><pre className="data-text">T_TP_ALTITUDE       : {props.telemetry_t.T_TP_ALTITUDE}</pre></div>
        <div><pre className="data-text">T_TP_TEMP           : {props.telemetry_t.T_TP_TEMP}</pre></div>
        <div><pre className="data-text">T_TP_VOLTAGE        : {props.telemetry_t.T_TP_VOLTAGE}</pre></div>
        <div><pre className="data-text">T_GYRO_R            : {props.telemetry_t.T_GYRO_R}</pre></div>
        <div><pre className="data-text">T_GYRO_P            : {props.telemetry_t.T_GYRO_P}</pre></div>
        <div><pre className="data-text">T_GYRO_Y            : {props.telemetry_t.T_GYRO_Y}</pre></div>
        <div><pre className="data-text">T_ACCEL_R           : {props.telemetry_t.T_ACCEL_R}</pre></div>
        <div><pre className="data-text">T_ACCEL_P           : {props.telemetry_t.T_ACCEL_P}</pre></div>
        <div><pre className="data-text">T_ACCEL_Y           : {props.telemetry_t.T_ACCEL_Y}</pre></div>
        <div><pre className="data-text">T_MAG_R             : {props.telemetry_t.T_MAG_R}</pre></div>
        <div><pre className="data-text">T_MAG_P             : {props.telemetry_t.T_MAG_P}</pre></div>
        <div><pre className="data-text">T_MAG_Y             : {props.telemetry_t.T_MAG_Y}</pre></div>
=======
        <div><pre className="data-text">C_TEAM_ID        : {props.telemetry.C_TEAM_ID}</pre></div>
        <div><pre className="data-text">C_MISSION_TIME   : {props.telemetry.C_MISSION_TIME}</pre></div>
        <div><pre className="data-text">C_PACKET_COUNT   : {props.telemetry.C_PACKET_COUNT}</pre></div>
        <div><pre className="data-text">C_PACKET_TYPE    : {props.telemetry.C_PACKET_TYPE}</pre></div>
        <div><pre className="data-text">C_MODE           : {props.telemetry.C_MODE}</pre></div>
        <div><pre className="data-text">C_TP_RELEASED    : {props.telemetry.C_TP_RELEASED}</pre></div>
        <div><pre className="data-text">C_ALTITUDE       : {props.telemetry.C_ALTITUDE}</pre></div>
        <div><pre className="data-text">C_TEMP           : {props.telemetry.C_TEMP}</pre></div>
        <div><pre className="data-text">C_VOLTAGE        : {props.telemetry.C_VOLTAGE}</pre></div>
        <div><pre className="data-text">C_GPS_TIME       : {props.telemetry.C_GPS_TIME}</pre></div>
        <div><pre className="data-text">C_GPS_LATITUDE   : {props.telemetry.C_GPS_LATITUDE}</pre></div>
        <div><pre className="data-text">C_GPS_LONGITUDE  : {props.telemetry.C_GPS_LONGITUDE}</pre></div>
        <div><pre className="data-text">C_GPS_ALTITUDE   : {props.telemetry.C_GPS_ALTITUDE}</pre></div>
        <div><pre className="data-text">C_GPS_SATS       : {props.telemetry.C_GPS_SATS}</pre></div>
        <div><pre className="data-text">C_SOFTWARE_STATE : {props.telemetry.C_SOFTWARE_STATE}</pre></div>
        <div><pre className="data-text">C_CMD_ECHO       : {props.telemetry.C_CMD_ECHO}</pre></div>
      </div>
      <div className="right-side">
        <div><pre className="data-text">T_TEAM_ID           : {props.telemetry.T_TEAM_ID}</pre></div>
        <div><pre className="data-text">T_MISSION_TIME      : {props.telemetry.T_MISSION_TIME}</pre></div>
        <div><pre className="data-text">T_TP_SOFTWARE_STATE : {props.telemetry.T_TP_SOFTWARE_STATE}</pre></div>
        <div><pre className="data-text">T_POINTING_ERROR    : {props.telemetry.T_POINTING_ERROR}</pre></div>
        <div><pre className="data-text">T_TP_ALTITUDE       : {props.telemetry.T_TP_ALTITUDE}</pre></div>
        <div><pre className="data-text">T_TP_TEMP           : {props.telemetry.T_TP_TEMP}</pre></div>
        <div><pre className="data-text">T_TP_VOLTAGE        : {props.telemetry.T_TP_VOLTAGE}</pre></div>
        <div><pre className="data-text">T_GYRO_R            : {props.telemetry.T_GYRO_R}</pre></div>
        <div><pre className="data-text">T_GYRO_P            : {props.telemetry.T_GYRO_P}</pre></div>
        <div><pre className="data-text">T_GYRO_Y            : {props.telemetry.T_GYRO_Y}</pre></div>
        <div><pre className="data-text">T_ACCEL_R           : {props.telemetry.T_ACCEL_R}</pre></div>
        <div><pre className="data-text">T_ACCEL_P           : {props.telemetry.T_ACCEL_P}</pre></div>
        <div><pre className="data-text">T_ACCEL_Y           : {props.telemetry.T_ACCEL_Y}</pre></div>
        <div><pre className="data-text">T_MAG_R             : {props.telemetry.T_MAG_R}</pre></div>
        <div><pre className="data-text">T_MAG_P             : {props.telemetry.T_MAG_P}</pre></div>
        <div><pre className="data-text">T_MAG_Y             : {props.telemetry.T_MAG_Y}</pre></div>
>>>>>>> main

      </div>
    </div>
  );
};

export default TelemData;
