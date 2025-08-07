class TimeMap {
  constructor () {
    this.keyStore = new Map();
  }


  set (key, value, timestamp) {
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, []);
    }

    this.keyStore.get(key).push([value, timestamp])
  }

  get (key, timestamp) {
    const keyArr = this.keyStore.get(key);
    let l = 0, r = keyArr.length - 1, res = '';

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);

      const midArr = keyArr[mid];

      if (timestamp < midArr[1]) {
        r = mid - 1;
      } else {
        res = midArr[0];
        l = mid + 1;
      }
    }

    return res;
  }
}