import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([100, 23, 43, 2])
// const stringCollection = new CharactersCollection('bXbuBWhari');
// const sorter = new Sorter(numbersCollection);
// const sorterString = new Sorter(stringCollection);
// sorter.sort();
// sorterString.sort();
// console.log(numbersCollection.data);
// console.log(stringCollection.data);

const numbersCollection = new NumbersCollection([23, 32, 32, 43]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterscollection = new CharactersCollection('BUksadjhksjhds');
characterscollection.sort();
console.log(characterscollection.data);

const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-3);
linkedlist.add(4);

linkedlist.sort();
linkedlist.print();