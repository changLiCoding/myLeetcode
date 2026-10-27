function shuffling(arr: any[]): any[] {
  const res: any[] = []
  if (arr.length === 0) return res
  let pushToEnd = true;

  while (arr.length !== 0) {
    const card = arr.shift()
    if (pushToEnd) {
      res.push(card)
    } else {
      res.unshift(card)
    }
    pushToEnd = !pushToEnd;
  }

  return res
}

function derange3 (arr: string[]): string[] {
  if (arr.length === 1) throw new Error('one person cannot be deranged')
  if (arr.length === 2) throw new Error('two people cannot be deranged without gifting each other')
  const usedIndexes: number[] = [];
  const res: string[] = [];
  let i = 0;
  while (i < arr.length) {
    const availableIndexes = [];
    for (let j = 0; j < arr.length; j++) {
      if (!usedIndexes.includes(j) && j !== i && res[i] !== arr[j]) {
        availableIndexes.push(j)
      }
    }

    if (availableIndexes.length === 0) return derange3(arr)

    const pickedIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    usedIndexes.push(pickedIndex);
    const pickedName = arr[i];
    res[pickedIndex] = pickedName
    // res[i] = arr[pickedIndex]
    i++
  }
  return res
}