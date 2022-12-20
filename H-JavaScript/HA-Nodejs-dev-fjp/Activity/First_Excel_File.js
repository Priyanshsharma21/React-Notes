// node .\First_Excel_File.js --source=teams.js --dest=teams.csv
//npm install excel4node // used to write in excel

let minimist = require('minimist');
let fs = require('fs');
let excel4node = require('excel4node');
const {
    execFile
} = require('child_process');

let args = minimist(process.argv);

let teams_json = fs.readFileSync(args.source, "utf-8");

let teams = JSON.parse(teams_json);

// console.log(teams[1].matches[1].vs);

// workbook is an excel sheet 
// Creating instance of workbook 

// Create a new instance of a Workbook class

let wb = new excel4node.Workbook(); // instance of workbook // with help of this now we can access all property of workbook

// Style template
var cstyle = wb.createStyle({
    font: {
      color: '#FF0800',
      size: 12,
    },
    alignment: {
      wrapText: true,
      horizontal: 'center',
    },
    fill : {
      type: 'pattern',
     patternType: 'solid',
      fgColor : "yellow",
    
    },
    // border: {
    //   left: {
    //     style: string, 
    //     color: "black" 
    // },
    // right: {
    //     style: string,
    //     color: "black" 
    // },
    // top: {
    //     style: string,
    //     color: "black" 
    // },
    // bottom: {
    //     style: string,
    //     color: "black" 
    // },

    // }
  });


for (let i = 0; i < teams.length; i++) { // iterate in teams array object
    let sheet = wb.addWorksheet(teams[i].name); // Adding sheet name of teams name
    sheet.cell(1, 1).string("Opponent").style(cstyle);
    sheet.cell(1,2).string("Result").style(cstyle);

    sheet.cell(1,5).string("Rank").style(cstyle);
    sheet.cell(1,6).number(teams[i].rank);

    for(let j=0; j<teams[i].matches.length; j++){
        let vs = teams[i].matches[j].vs;
        let result = teams[i].matches[j].result;

        sheet.cell(2+j,1).string(vs);
        sheet.cell(2+j,2).string(result);
    }
}

wb.write(args.dest); // writing that sheet in dest






























//* format of nom excel4node 


//! Require library
//* var xl = require('excel4node');

// !Create a new instance of a Workbook class
//* var wb = new xl.Workbook();

//! Add Worksheets to the workbook
//* var ws = wb.addWorksheet('Sheet 1');
//* var ws2 = wb.addWorksheet('Sheet 2');

//! Create a reusable style
//*var style = wb.createStyle({
//*   font: {
//*     color: '#FF0800',
//*     size: 12,
//*   },
//*   numberFormat: '$#,##0.00; ($#,##0.00); -',
//* });

// !Set value of cell A1 to 100 as a number type styled with paramaters of style
// *ws.cell(1, 1)
//*   .number(100)
//*   .style(style);

// !Set value of cell B1 to 200 as a number type styled with paramaters of style
//* ws.cell(1, 2)
//*   .number(200)
// *  .style(style);

// !Set value of cell C1 to a formula styled with paramaters of style
// *ws.cell(1, 3)
//*   .formula('A1 + B1')
//*   .style(style);

// !Set value of cell A2 to 'string' styled with paramaters of style
// *ws.cell(2, 1)
// *  .string('string')
// *  .style(style);

// !Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
//* ws.cell(3, 1)
//*   .bool(true)
//*   .style(style)
//*   .style({font: {size: 14}});

//* wb.write('Excel.xlsx');