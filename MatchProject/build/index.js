"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// const csvFileReader = new CSVFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// const matches = matchReader.matches;
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(
//     new WinsAnalysis('Man United'), 
//     new HtmlReport()
//     );
// summary.buildAndPrintReport(matches);
Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
