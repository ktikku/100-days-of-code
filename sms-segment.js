/*
 * Complete the 'segments' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING message as parameter.
 */
function chunkSubstr(str, size) {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);
  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }
  return chunks;
}

function segments(message) {
    const chunks = chunkSubstr(message, 155);
    let i = 1;
    console.log(chunks);
    if(chunks.length > 1) {
     return chunks.map(chunk => chunk + `(${i++}/${chunks.length})`);  
    }
    return chunks;
}

