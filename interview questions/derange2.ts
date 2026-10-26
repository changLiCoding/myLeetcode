function derange2 (arr: string[]): string[] {

  if (arr.length === 0) {
    return []
  }
  if (arr.length === 1) {
    throw new Error('Can not derange when there is one name')
  }
  if (arr.length === 2) {
    throw new Error('Can not derange when there is 2 names')
  }
  const res: Array<string> = [];
  const usedIndex: Array<number> = [];

  let i = 0;
  while (i < arr.length) {
    const availableIndexes: number[] = [];

    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue

      if (!usedIndex.includes(j) && res[j] !== arr[i]) {
        availableIndexes.push(j)
      }
    }

    if (availableIndexes.length === 0) return derange2(arr);

    const random = Math.floor(Math.random() * availableIndexes.length)
    const pickedIndex = availableIndexes[random];
    res[i] = arr[pickedIndex]
    usedIndex.push(pickedIndex)
    i++
  }

  return res
}