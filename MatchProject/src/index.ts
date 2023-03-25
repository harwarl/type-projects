import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVRreader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CSVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();
const matches = matchReader.matches;


let manUnitedWins: number = 0;

for(let match of matches){
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWon){
        manUnitedWins++;
    }else if(match[1] === 'Man United' && match[5] === MatchResult.AwayWon){
        manUnitedWins++;
    }
}

console.log(`Man United wins ${manUnitedWins} times`)