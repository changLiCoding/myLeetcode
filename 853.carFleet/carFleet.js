function carFleet(target, position, speed) {
 let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);
        
        let fleets = 1;
        let prevTime = (target - pair[0][0]) / pair[0][1];
        for (let i = 1; i < pair.length; i++) {
            let currTime = (target - pair[i][0]) / pair[i][1];
            if (currTime > prevTime) {
                fleets++;
                prevTime = currTime;
            }
        }
        return fleets;
}