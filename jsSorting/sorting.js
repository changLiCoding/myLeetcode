const arr = [1, 2, 45, 2, 1, 0, -9];

const arr2 = arr.sort((a, b) => a - b);
console.log(arr2)
console.log(arr)

const objArr = [
  {
    id: 1,
    name: "lily"
  },
    {
    id: 1,
    name: "Anna"
  },
    {
    id: 4,
    name: "Mary"
  },
    {
    id: 2313,
    name: "Shawn"
  },
    {
    id: 1,
    name: "Bob"
  },
]

const objArr2 = objArr.sort((a, b) => {
  if (a.id === b.id) {
    return a.name.localeCompare(b.name)
  } else {
    return a.id - b.id
  }
})

console.log(objArr, objArr2)

const sorted = objArr.sort((a, b) => {
  if (a.id === b.id) {
    return a.name.localeCompare(b.name);
  }

  return a.id - b.id;
})