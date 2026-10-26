function derange(arr: string[]): string[] {

  if (arr.length === 0) return []
  if (arr.length === 1) throw new Error('one person cannot be deranged')
  if (arr.length === 2) throw new Error('Two person have no valid return, since they have to give gift to each other')

  const res: Array<string> = arr.slice(1)
  res.push(arr[0])
  return res
}

function randomizedDerange (arr: string[]): string[] {
  if (arr.length === 0) return []
  if (arr.length === 1) throw new Error('one person cannot be deranged')
  if (arr.length === 2) throw new Error('two people cannot be deranged without gifting each other')

  const res: Array<string> = [];
  const used: Array<number> = new Array();

  let i = 0;
  while (i < arr.length) {
    const available = []
    for (let j = 0; j < arr.length; j++) {
      // const isGiveToMe = res.indexOf(arr[i])
      if (!used.includes(j) && j !== i && res[j] !== arr[i]) {
        available.push(j)
      }
    }

    if (available.length === 0) {
      return randomizedDerange(arr)
    }

    const random = Math.floor(Math.random() * available.length);
    // res[random] = arr[i]
    const pick = available[random];
    used.push(pick)
    res[i] = arr[pick]
    i++
  }

  return res
}


