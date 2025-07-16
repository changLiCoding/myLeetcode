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
  const res = isValid(["1", "2", ".", ".", "3", ".", ".", ".", "."]);
  console.log("res, ", res);
  for (var i in board) {
    if (!this.isValid(board[i])) return false;
    const column = [];
    for (var j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    if (isValid(column)) return false;
  }

  for (let square = 0; square < 9; square++) {
    let seen = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let row = Math.floor(square / 3) * 3 + i;
        let col = (square % 3) * 3 + j;
        if (board[row][col] === ".") continue;
        if (seen.has(board[row][col])) return false;
        seen.add(board[row][col]);
      }
    }
  }

  return true;
}
