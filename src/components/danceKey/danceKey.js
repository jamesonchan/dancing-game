import { PropTypes } from "prop-types";
import { useCallback, useEffect, useState, useRef } from "react";
import "../../css/danceKey.css";

DanceKey.propTypes = {};

function DanceKey({}) {
  return (
    <>
        <div className="container">
            <div className="danceKey">Dance Key</div>
            <div className="danceKey">Dance Key</div>
            <div className="danceKey">Dance Key</div>
            <div className="danceKey">Dance Key</div>
            <div className="danceKey">Dance Key</div>
            <div className="danceKey">Dance Key</div>
            <div className="danceKey">Dance Key</div>
        </div>
    </>
  );
}

export default DanceKey;
