"use client";
import React, { ReactElement, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { workouts as staticWorkouts } from "../static-resources/static-workouts";
import "./styles.modules.css";
import logExcerciseField from "@/components/logExcerciseInput";

export default function Page() {
  const [date, SetDate] = useState(new Date());
  //TODO: consider outsourcing to Redux/Zustand
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [open, setOpen] = useState(false);
  //TODO: change data source to fetching
  const workouts = staticWorkouts;

  const handleChange = (e) => {
    console.log(e.target.value)
    setSelectedWorkout(workouts[e.target.value])
    setOpen(false)
  };

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <h1>Hello, log workout page</h1>
      <div className="content-box">
        <div className="dropdown">
          <button className={"select-workout"} onClick={handleOpen}>Select workout</button>
          {open ? (
            <div className="menu">
              {workouts.map((workout, index) => (
                <button value={index} onClick={handleChange}>
                  {workout.name}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        {!selectedWorkout ? null : (
          <>
            <label>
              Date
              <DatePicker
                selected={date}
                onChange={(date) => setImmediate(date)}
              />
            </label>
            {selectedWorkout.excercises.map((excercise) => (
              logExcerciseField(excercise.name, excercise.repetitions)
            ))}
          </>
        )}
      </div>
    </>
  );
}
