import React, { useState } from "react";

export const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [gests, setGests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* for date selection */}
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>

            {/* for time selection */}

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            {/* for time selection */}

            <div>
              <label htmlFor="book-gests">Number of Gests:</label>
              <input
                type="number"
                id="book-gests"
                value={gests}
                onChange={(e) => setGests(e.target.value)}
                min={1}
                max={20}
                required
              />
            </div>

            {/* for occasion field */}

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="" disabled>
                  -- Select --
                </option>
                <option value="anniversary">Anniversary</option>
                <option value="work meeting">Work meeting</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>

            {/* submit button */}

            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};
