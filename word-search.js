/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const visited = [];
  for (let i = 0; i < board.length; i++) {
    visited[i] = [];
    for (let j = 0; j < board[i].length; j++) {
      visited[i].push(false);
    }
  }
  if (board.length === 1 && board[0].length === 1) {
    return board[0][0] === word;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let l = i;
      let m = j;
      if (word[0] === board[l][m]) {
        let count = word.length - 1;
        if (count === 0) {
          return true;
        }
        let k = 1;
        visited[l][m] = true;

        while (count) {
          console.log(count, l, m, word[k])
          if (m + 1 < board[i].length && word[k] === board[l][m + 1] && !visited[l][m + 1]) {
            count--;
            m++
            k++;
            visited[l][m] = true;
            if (count === 0) {
              return true;
            }
            continue;
          }
          if (l + 1 < board.length && word[k] === board[l + 1][m] && !visited[l + 1][m]) {
            count--;
            l++;
            k++;
            visited[l][m] = true;
            if (count === 0) {
              return true;
            }
            continue;
          }
          if (m - 1 >= 0 && word[k] === board[l][m - 1] && !visited[l][m - 1]) {
            count--;
            m--;
            k++;
            visited[l][m] = true;
            if (count === 0) {
              return true;
            }
            continue;
          }
          if (l - 1 >= 0 && word[k] === board[l - 1][m] && !visited[l - 1][m]) {
            count--;
            l--;
            k++;
            visited[l][m] = true;
            if (count === 0) {
              return true;
            }
            continue;
          }
          break;

        }
      }
    }
  }
  return false;
};