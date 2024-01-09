// main.js

const quickSort = require('./quicksort');

function calcularMediasSemExtremos(notasAtletas) {
  const medias = [];

  for (let i = 0; i < notasAtletas.length; i++) {
    const [nomeAtleta, ...notas] = notasAtletas[i]; // Desestruturando!
    // 
    //console.log("Dados originais .....: ", notasAtletas[i]);
    //console.log("Dados Desestruturados: ", nomeAtleta, notas);

    // Ordena as notas do atleta atual utilizando o QuickSort
    quickSort(notas);

    // Elimina a menor e a maior nota
    let soma = 0;

    for (let j = 1; j < notas.length - 1; j++) {
      soma += notas[j];
    }
    console.log("Soma das notas sem os extremos: ", notas, soma);
    const media = soma / (notas.length - 2);
    medias.push({ nomeAtleta, media });
  }

  return medias;
}

// Exemplo de utilização
const notasDosAtletas = [
  ['Arnoldo', 5, 7, 9, 9, 10],
  ['Ludovico', 9, 8, 7, 9, 5],
  ['Herta', 10, 8, 10, 9, 5],
  ['Inocência', 9, 8, 8, 6, 5],
  ['Pantaleão', 9, 10, 10, 4, 5]
];

console.log("Muito interessante: ",notasDosAtletas);
const resultado = calcularMediasSemExtremos(notasDosAtletas);

console.log('Médias das notas dos atletas sem as maiores e menores:');
console.log(resultado);
resultado.forEach((atleta) => {
    console.log(`Nome do Atleta: ${atleta.nomeAtleta}, Média: ${atleta.media}`);
  });
