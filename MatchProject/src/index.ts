import { MatchReader } from "./MatchReader";
import { CSVFileReader } from "./CSVRreader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTarget/ConsoleTarget";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTarget/HtmlReports";

// const csvFileReader = new CSVFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);

// matchReader.load();
// const matches = matchReader.matches;
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(
//     new WinsAnalysis('Man United'), 
//     new HtmlReport()
//     );
// summary.buildAndPrintReport(matches);

Summary.winsAnalysisWithHtmlReport('Man United');