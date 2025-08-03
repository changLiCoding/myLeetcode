var groupThePeople = function(groupSizes) {
    const groupMap = new Map();
    const res = [];
    for (let i = 0; i < groupSizes.length; i++) {
        if (groupMap.has(groupSizes[i])) {
            groupMap.get(groupSizes[i]).push(i)
        } else {
            groupMap.set(groupSizes[i], [i])
        }

        const ids = groupMap.get(groupSizes[i]);

        if (ids.length === groupSizes[i]) {
            res.push(ids)
            groupMap.set(groupSizes, []);
        }
    }

    return res;
};