"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CSVFileReader_1.CSVFileReader('footbal.csv');
reader.read();
const matches = reader.data;
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWon) {
        manUnitedWins++;
    }
    else if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWon) {
        manUnitedWins++;
    }
}
console.log(`Man United wins ${manUnitedWins} times`);
