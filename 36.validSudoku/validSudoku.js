function isValid(arr) {
  const numberArr = arr.reduce((accv, curv) => {
    if (curv !== ".") {
      accv.push(curv);
    }
    return accv;
  }, []);

  console.log("numberarr.length", numberArr.length, new Set(numberArr).size);

  return numberArr.length === new Set(numberArr).size;
}

function isValidSudoku(board) {
  // const res = isValid(["1", "2", ".", ".", "3", ".", ".", ".", "."]);
  // console.log("res, ", res);
  // for (var i in board) {
  //   if (!this.isValid(board[i])) return false;
  //   const column = [];
  //   for (var j = 0; j < 9; j++) {
  //     column.push(board[j][i]);
  //   }
  //   if (isValid(column)) return false;
  // }

  // for (let square = 0; square < 9; square++) {
  //   let seen = new Set();
  //   for (let i = 0; i < 3; i++) {
  //     for (let j = 0; j < 3; j++) {
  //       let row = Math.floor(square / 3) * 3 + i;
  //       let col = (square % 3) * 3 + j;
  //       if (board[row][col] === ".") continue;
  //       if (seen.has(board[row][col])) return false;
  //       seen.add(board[row][col]);
  //     }
  //   }
  // }

  const rowMap = new Map();
  const colMap = new Map();
  const squareMap = new Map();

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value === ".") continue;

      const squareKey = `${Math.floor(row / 3)} ${Math.floor(col / 3)}`

      if (rowMap.has(row) && rowMap.get(row).has(value)) return false;
      if (colMap.has(col) && colMap.get(col).has(value)) return false;
      if (squareMap.has(squareKey) && squareMap.get(squareKey).has(value)) return false;

      if (!rowMap.has(row)) rowMap.set(row, new Set());
      if (!colMap.has(col)) colMap.set(col, new Set());
      if (!squareMap.has(squareKey)) squareMap.set(squareKey, new Set());

      rowMap.get(row).add(value);
      colMap.get(col).add(value);
      squareMap.get(squareKey).add(value);
    }
  }

  return true;
}
