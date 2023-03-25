import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let Wins: number = 0;

    for (let match of matches) {
      if (match[1] === this.team && 
        match[5] === MatchResult.HomeWon) {
        Wins++;
      } else if (
        match[1] === this.team &&
        match[5] === MatchResult.AwayWon
      ) {
        Wins++;
      }
    }

    return `Team ${this.team} won ${Wins} times`; 
  }
}
