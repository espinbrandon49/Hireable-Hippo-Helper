import React from "react";
import Auth from "../../../utils/auth";

const styles = {
  border: {
    border: "2px solid black",
    borderRadius: "30px",
  },
  font: {
    fontSize: ".75em",
  },
  width: {
    // resize radio input
    width: "1em",
  },
};

const HippoStats = () => {
  return (
    <div>
      {Auth.loggedIn() ? (
        <div>
          <div>
            <h1 class="title">Hippo Stats</h1>
            <h2 class="subtitle">Job search data visualizations</h2>
          </div>

          <div class="control is-justify-content-center" style={styles.border}>
            <label class="radio" for="appliedData" style={styles.font}>
              <input
                type="radio"
                name="appliedData"
                id="appliedData"
                style={styles.width}
              />
              Applied
            </label>
            <label class="radio" for="phoneInterviewData" style={styles.font}>
              <input type="radio" name="rsvp" style={styles.width} />
              Phone Interview
            </label>
            <label
              class="radio"
              for="technicalInterviewData"
              style={styles.font}
            >
              <input type="radio" name="rsvp" style={styles.width} />
              Technical Interview
            </label>
            <label
              class="radio"
              for="inPersonInterviewData"
              style={styles.font}
            >
              <input type="radio" name="rsvp" style={styles.width} />
              In-person Interview
            </label>
            <label class="radio" for="jobOfferData" style={styles.font}>
              <input type="radio" name="rsvp" style={styles.width} />
              Job Offer
            </label>
            <label class="radio" for="hippoDonateData" style={styles.font}>
              <input type="radio" name="rsvp" style={styles.width} />
              Donate to HHH
            </label>
          </div>
        </div>
      ) : (
        <div>You must be logged in to see your HIPPO STATS</div>
      )}
    </div>
  );
};

export default HippoStats;
