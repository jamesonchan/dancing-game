import { PropTypes } from "prop-types";
import { useCallback, useEffect, useState, useRef } from "react";
import "../css/danceBar.css";
import Indicator from "../utils/indicator";

DanceBar.propTypes = {};

function useDanceBarProgress() {
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndicatorPosition((prev) => prev + 10);
    }, 100);

    if (indicatorPosition === 0) {
      setInterval(interval);
    }

    if (indicatorPosition >= 300) {
      clearInterval(interval);
      setIndicatorPosition(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [indicatorPosition]);

  return [indicatorPosition, setIndicatorPosition];
}

function DanceBar({}) {
  const [indicatorStatus, setIndicatorStatus] = useState("");
  const danceBarRef = useRef(null);

  const [indicatorPosition, setIndicatorPosition] = useDanceBarProgress();

  const handleKeyOnDown = useCallback((e) => {
      if (e.keyCode === 32) {
        setIndicatorStatus(Indicator.calculateIndicatorPosition(indicatorPosition));
        setIndicatorPosition(0);
      }
    }, [indicatorPosition, setIndicatorPosition]);

  useEffect(() => {
    danceBarRef.current.focus();
  }, []);

  return (
    <>
      <div
        className="danceBar"
        ref={danceBarRef}
        tabIndex={-1}
        onKeyDown={handleKeyOnDown}
      >
        <div className="danceBar_indicator" style={{ left: `${indicatorPosition}px` }}></div>
        <div className="danceBar_goodPointArea"></div>
        <div className="danceBar_perfectPointArea"></div>
      </div>
      <p>{indicatorStatus}</p>
    </>
  );
}

export default DanceBar;
