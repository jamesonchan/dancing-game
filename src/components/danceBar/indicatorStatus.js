import { PropTypes, string } from "prop-types";
import Indicator from "../../utils/indicator";

IndicatorStatus.propTypes = {
    indicatorStatus: PropTypes.string,
    streak: PropTypes.arrayOf(string)
};

function IndicatorStatus({
    indicatorStatus = "",
    streak = [""]
}) {
    const streakCounter = Indicator.getStreak(streak);

    return (
        <div>
            <p>{indicatorStatus}{streakCounter > 1 && ` x${streakCounter}`}</p>
            <p>Score: {Indicator.getScore(streak)}</p>
        </div>
    )
}

export default IndicatorStatus;
 