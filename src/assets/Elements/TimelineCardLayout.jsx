import React from "react";
import "../CSSFiles/TimelineCardLayout.css";

const TimelineCardLayout = () => {
  return (
    <div className="timeline-root">
      {/* Top row */}
      <div className="timeline-row">
        <div className="timeline-card">
          <p>sfgsjsviw sn</p>
          <p>shsn snsns</p>
          <p>sgjsns hmm sns</p>
        </div>

        <div className="timeline-year">2020</div>
      </div>

      {/* Middle row with curve and year */}
      <div className="timeline-middle">
        <svg
          className="timeline-curve"
          viewBox="0 0 200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M10,20 C80,10 120,110 190,100"
            fill="none"
            stroke="#000"
            strokeWidth="3"
          />
        </svg>
        <div className="timeline-year center-year">2021</div>
      </div>

      {/* Bottom row */}
      <div className="timeline-row">
        <div className="timeline-card">
          <p>sfgsjsviw sn</p>
          <p>shsn snsns</p>
          <p>sgjsns hmm sns</p>
        </div>

        <div className="timeline-year">2024</div>
      </div>
    </div>
  );
};

export default TimelineCardLayout;