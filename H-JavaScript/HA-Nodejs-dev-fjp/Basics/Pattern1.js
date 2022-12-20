let args = process.argv;
let n = parseInt(args[2]);

for(let i=1; i<=n; i++){
    let line = "";
    
    for(let j=1; j<=i; j++){
        line = line + "*\t";
    }
    console.log(line);
}