function escitalaEncrypt(message: string, turns: number): string {
  const columnCount = turns;
  const rowCount = Math.ceil(message.length / columnCount);
  const matrix: string[][] = new Array(rowCount).fill('').map(_ => new Array(columnCount).fill(''));
  let k = 0;

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      if (k < message.length) {
        matrix[i][j] = message[k];
        k++;
      }
    }
  }

  return matrix.flat().join('');
}

function escitalaDecrypt(encryptedMessage: string, turns: number): string {
  const columnCount = turns;
  const rowCount = Math.ceil(encryptedMessage.length / columnCount);
  const matrix: string[][] = new Array(rowCount).fill('').map(_ => new Array(columnCount).fill(''));
  let k = 0;

  for (let j = 0; j < columnCount; j++) {
    for (let i = 0; i < rowCount; i++) {
      if (k < encryptedMessage.length) {
        matrix[i][j] = encryptedMessage[k];
        k++;
      }
    }
  }

  return matrix.flat().join('');
}
