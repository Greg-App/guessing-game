class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.result =null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let arr = [];
        for (let i = this.min; i <= this.max; i++) {
            arr.push(i);
        }
        this.result = arr[Math.floor(arr.length/2)];
      /* if (this.result>number) {
        this.lower();
        this.guess();
      }
      if (this.result<number) {
        this.greater();
        this.guess();
      } */
      return this.result;
    }

    lower() {
        this.max =this.result;
    }

    greater() {
        this.min =this.result;
    }
}

module.exports = GuessingGame;
