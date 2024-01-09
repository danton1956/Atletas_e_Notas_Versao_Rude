// quicksort.js

function particao(arr, baixo, alto) {
    const pivo = arr[alto];
    let i = baixo - 1;
  
    for (let j = baixo; j < alto; j++) {
      if (arr[j] < pivo) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    // Faz o swap, c/ desestruturacao
    //console.log("-------");
    //console.log("Antes : ", arr[i + 1], arr[alto]);

    [arr[i + 1], arr[alto]] = [arr[alto], arr[i + 1]];

    //console.log("Depois: ", arr[i + 1], arr[alto]);

    return i + 1;
  }
  
  function quickSort(arr, baixo = 0, alto = arr.length - 1) {
    if (baixo < alto) {
      const pivoIdx = particao(arr, baixo, alto);
  
      quickSort(arr, baixo, pivoIdx - 1);
      quickSort(arr, pivoIdx + 1, alto);
    }
  }
  
  module.exports = quickSort;
  