class Indicator {

  indicatorBoundary = Object.freeze({
    MIN_GOOD_BOUND: 250,
    MAX_GOOD_BOUND: 270,
    MIN_PERFECT_BOUND: 255,
    MAX_PERFECT_BOUND: 265
  })

  calculateIndicatorPosition(indicatorPosition) {
    let pointResult;

    if (indicatorPosition <= this.indicatorBoundary.MIN_GOOD_BOUND || indicatorPosition >= this.indicatorBoundary.MAX_GOOD_BOUND) {
      pointResult = "Missed!";
    }

    if (indicatorPosition >= this.indicatorBoundary.MIN_GOOD_BOUND && indicatorPosition <= this.indicatorBoundary.MAX_GOOD_BOUND) {
      pointResult = "Good!";
    }

    if (indicatorPosition >= this.indicatorBoundary.MIN_PERFECT_BOUND && indicatorPosition <= this.indicatorBoundary.MAX_PERFECT_BOUND) {
      pointResult = "Perfect!";
    }

    return pointResult;
  }
}

export default new Indicator();
