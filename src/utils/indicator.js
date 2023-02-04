class Indicator {

  indicatorBoundary = Object.freeze({
    MIN_GOOD_BOUND: 250,
    MAX_GOOD_BOUND: 270,
    MIN_PERFECT_BOUND: 255,
    MAX_PERFECT_BOUND: 265
  })

  indicatorPerformance = Object.freeze({
    MISS: "Missed!",
    GOOD: "Good!",
    PERFECT: "Perfect!"
  })

  getPerformance(indicatorPosition) {
    let pointResult;

    if (indicatorPosition <= this.indicatorBoundary.MIN_GOOD_BOUND || indicatorPosition >= this.indicatorBoundary.MAX_GOOD_BOUND) {
      pointResult = this.indicatorPerformance.MISS;
    }

    if (indicatorPosition >= this.indicatorBoundary.MIN_GOOD_BOUND && indicatorPosition <= this.indicatorBoundary.MAX_GOOD_BOUND) {
      pointResult = this.indicatorPerformance.GOOD;
    }

    if (indicatorPosition >= this.indicatorBoundary.MIN_PERFECT_BOUND && indicatorPosition <= this.indicatorBoundary.MAX_PERFECT_BOUND) {
      pointResult = this.indicatorPerformance.PERFECT;
    }

    return pointResult;
  }

  getStreak(statusArr) {
    let counter = 0;
    statusArr.forEach(status => {
      if(status === this.indicatorPerformance.MISS) {
        counter = 0;
      }
      else {
        counter++;
      }
    })
    return counter;
  }
}

export default new Indicator();
