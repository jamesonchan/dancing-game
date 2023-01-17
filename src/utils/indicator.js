class Indicator {

  static indicatorBound = {}

  static calculateIndicatorPosition(indicatorPosition) {
    let pointResult;

    if (indicatorPosition <= 250 || indicatorPosition >= 270) {
      pointResult = "Missed!";
    }

    if (indicatorPosition >= 250 && indicatorPosition <= 270) {
      pointResult = "Good!";
    }

    if (indicatorPosition >= 255 && indicatorPosition <= 265) {
      pointResult = "Perfect!";
    }

    return pointResult;
  }
}

export default Indicator;
