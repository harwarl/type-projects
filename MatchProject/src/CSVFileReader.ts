import fs from 'fs';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

export abstract class CSVFileReader<TypeOfData>{  //using genric classes and types
    data: TypeOfData[] = [];

    abstract mapRow(row: string[]): TypeOfData;  //declaring a method that is beinng used in the parent but defined in the child class

    constructor(public filename: string){}

    read(){
        this.data = fs.readFileSync('football.csv', {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[]=>{
            return row.split(',');
        })
        .map(this.mapRow)
    }

}