import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
const reader = new MatchReader('football.csv');
reader.read();
const matches = reader.data;


let manUnitedWins: number = 0;

for(let match of matches){
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWon){
        manUnitedWins++;
    }else if(match[1] === 'Man United' && match[5] === MatchResult.AwayWon){
        manUnitedWins++;
    }
}

console.log(`Man United wins ${manUnitedWins} times`)