const lista = 'Lista de arquivos mp3: Jazz.mp3,rock.mp3,Rap.mp3,funk.mp3';

console.log(lista.match(/[a-z]+\.mp3/gi));
// OU
console.log(lista.match(/\w+\.mp3/g));