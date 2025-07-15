var minWindow = (s, t) => {
  if (t === "") return "";

  let countT = {};
  for (let c of t) {
    countT[c] = (countT[c] || 0) + 1;
  }

  let res = [-1, -1];
  let resLen = Infinity;

  for (let i = 0; i < s.length; i++) {
    let countS = {};
    for (let j = i; j < s.length; j++) {
      countS[s[j]] = (countS[s[j]] || 0) + 1;

      let flag = true;
      for (let c in countT) {
        if ((countS[c] || 0) < countT[c]) {
          flag = false;
          break;
        }
      }

      if (flag && j - i + 1 < resLen) {
        resLen = j - i + 1;
        res = [i, j];
      }
    }
  }

  return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
};
// var minWindow = function(s, t) {
//         const couter_t = {}

//         for (var str of t) {
//             if (couter_t[str]) {
//                 couter_t[str]++
//             } else {
//                 couter_t[str] = 1
//             }
//         }

//         // console.log(couter_t)

//         const map = {}

//         for (var i = 0; i < s.length; i++) {
//             for (var j = i; j < s.length; j++) {
//                 const long = s.substring(i,j+1);
//                 // console.log(long, s, t)
//                 if (isSubString(long, couter_t)) {
//                     const n = long.length
//                     if(map[n]) {
//                         map[n].push(long)
//                     } else {
//                         map[n] = [long]
//                     }
//                 }
//             }
//         }

//         const arr = Object.entries(map);
//         if (arr.length > 0 ) {
//             return arr[0][1][0]
//         }
//         console.log('map: ', map, arr)
//         // const max_map = {
//         //     max: Infinity,
//         //     s: ''
//         // }
//         // for (var [key, value] of arr) {
//         //     if (max_map.max > parseInt(key)) {
//         //         max_map.max = key
//         //         max_map.s = value[0]
//         //     }
//         // }
//         return ""
//     }
//         var isSubString = (long, counter_short) => {

//             // console.log('long: ', long, "counter_short: ", counter_short)

//         const counter_long = {};

//         for (var s of long) {
//             if (counter_long[s]) {
//                 counter_long[s]++
//             } else {
//                 counter_long[s] = 1
//             }
//         }
//         for (const [s, freq] of Object.entries(counter_short)) {
//             if (!counter_long[s] || counter_long[s] < freq) {
//                 return false
//             }
//         }

//         return true
//     }
