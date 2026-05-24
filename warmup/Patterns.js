

//   * * * *
//   * * * *
//   * * * *
//   * * * *
const starPattern = (n)=> {
    for(let i=0;i<n;i++){
        let row = " ";
        for(let j=0;j<n;j++) {
            row += " *";
        } console.log(row)
    }  
}
// starPattern(4)   


const starPatternAdv = (rCount,cCount)=> {
    for(let i=0;i<rCount;i++){
        let x = " ";
        for(let j=0;j<cCount;j++) {
            x += " *";
        }console.log(x)
    }
}
// starPatternAdv(10,4)


//   *
//   * *
//   * * *
//   * * * *
const starPatternSlide = (n)=> {
    for(let i=0;i<n;i++){
        let row =' ';
        for(let j=0;j<i+1;j++){
           row+= ' *';
        }console.log(row)
    }
}
// starPatternSlide(4);
// -----------------------------------------------------
//   * * * *
//   * * *
//   * *
//   *
// const starPatterSlideUlta = (n)=> {
//     for(let i=n;i>=1;i--){
//         let row =' ';
//         for(let j=0;j<i;j++) {
//              row+= ' *';
//         }
//         console.log(row);
//     }
// }
// starPatterSlideUlta(4) we have bst another pattern for this : 
//  for(let i=0;i<n;i++) {
    //     let row =' ';
    //     for(let j=0;j<n-i;j++) {
    //         row += ' *' ;
    //     }console.log(row);
    // }
// ----------------------------------------------------


//    1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5

const numPatter = (n)=> {
    for (let i=0;i<n;i++) {
        let row = '  ';
        for(let j=0;j<i+1;j++) {
            row += ' ' + (j+1);
        }console.log(row);
    }
}
// numPatter(5);

// 1
// 22
// 333
// 4444
// 55555

const newNumPattern = (n)=> {
    for (let i=0;i<n;i++){
        let row  = ' ';
        for(let j=0;j<i+1;j++) {
        row += ' '+(i+1);
        }console.log(row);
    }
}
// newNumPattern(5);

// 12345
// 1234
// 123
// 12
// 1
const numPat = (n)=>{
    for(let i=0;i<n;i++) {
        let row =' ';
        for(let j=0;j<n-i;j++) {
            row += ' ' + (j+1);
        }console.log(row);
    }
}
// numPat(5);


//           *
//         * *
//       * * *
//     * * * *
//   * * * * *
const mirrorPatt = (n)=> {
    for(let i=0;i<n;i++){
        let row = ' ';
        for(let j=0;j<n-(i+1);j++){
            row += ' '+' ';
        }
        for(let k=0;k<i+1;k++){
                row += ' '+ '*';
            }
        console.log(row);
    }
}
// mirrorPatt(5);

//   1
//   1 0
//   1 0 1
//   1 0 1 0
//   1 0 1 0 1
//   1 0 1 0 1 0

//   0
//   0 1
//   0 1 0
//   0 1 0 1
//   0 1 0 1 0
//   0 1 0 1 0 1
const oneZeroPattern = (n)=> {
for(let i=0;i<n;i++){
    let row =' ', sw = 1;
    for(let j=0;j<i+1;j++) {
        row += ' '+sw;
        if(sw==1) sw=0;
        else sw=1;
    }console.log(row);
}
}
// oneZeroPattern(6);

const oneZeroPatternDiff = (n)=> {
    let sw = 1;
for(let i=0;i<n;i++){
    let row =' ' ;
    
    for(let j=0;j<i+1;j++) {
        row += ' '+sw;
        if(sw==1) sw=0;
        else sw=1;
    }console.log(row);
}
}
// oneZeroPatternDiff(6);

//BASIC UNDERSTANDING OF PATTERNS
// let n = 4
// let row = ' ';
// for(let j=0;j<n-0;j++){
    
//     row+= ' *';
// }console.log(row);