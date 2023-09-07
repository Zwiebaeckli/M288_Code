/*
Thema: Variablen und Konstanten mit Zeichenketten (Strings)

Wichtig, wenn Werte einer Variable zugewiesen werden:
Das '='-Zeichen ist ein Zuweisung-Operator und
nicht ein mathematisches Gleichheitszeichen!!!
 */

/*
Beispiel 1 - Stadt und Land ausgeben
 */
let snowBoardLabel1 = 'Burton';
let snowBoardLabel2 = 'Firefly';
const manufacturer1 = 'USA';
const manufacturer2 = 'Switzerland';

console.log(snowBoardLabel1);
console.log(snowBoardLabel2);
console.log(manufacturer1);
console.log(manufacturer2);

let motto = 'Buy a ' + snowBoardLabel1 + ' and you fly over snow. Of course made in ' + manufacturer1;
console.log(motto);

motto = 'Buy a ' + snowBoardLabel2 + ' and you fly over snow. Of course made in ' + manufacturer1;
console.log(motto);