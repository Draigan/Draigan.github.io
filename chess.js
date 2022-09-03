// FEEDBACK
// OVERALL FEEDBACK
//
// Really good job on this. From what your reddit post said you'd only been programming for a few weeks when
// you started this? I think you're already showing a good grasp of the concepts that you're using here, like
// if statements, loops, variables, etc. 

// With that said, I do have a lot of feedback. I've been about as 'harsh' on you as I would on any of the juniors
// on my team at work. 'Harsh' in terms of me being pedantic about what sorts of things to raise feedback on, hopefully
// the content & tone of my feedback doesn't come across as harsh!

// Biggest thing overall-wise is the formatting. Lots of non-standard formatting imo (like the 'function' part of a 
// function defition being on a separate line) and a bit wacky indentation and spacing. Would highly recommend some
// kind of automatic formatter that can format the document on save, so make sure your formatting is consistent.

// Another thing that is probably more of a nice-to-have is that you have a lot of the same strings defined right in
// the code. If for whatever reason you need to change one, you then have to change it everywhere. Or if you make a
// typo when typing one out, now there is a bug in the code. One possible improvment here is to store the strings in
// an object & reference the object instead of the string directly. For example

// const Colors = {
//   white: 'white',
//   black: 'black'
// }

// const Pieces = {
//  rook: 'rook',
//  knight: 'knight',
//  bishop: 'bishop'
//  etc...
// }

// Then you can refernces those string in your code like Colors.white or Pieces.knight, and you don't have to worry about
// changing it everywhere if something needs to change, or making a typo etc.

// The rest of my feedback is on specific sections of the code, so continue scrolling to see. Each piece of feedback starts
// with FEEDBACK (just like this section) to make searching for the feedback a bit easier.

//v
//  My global variables
//
var currentTurnColor = 'white';
var possibilityState = false;
var currentObject;

var pieceSet = 'anarcandy';
var lastObject = [];    
// FEEDBACK:
// I feel like the variables below could be all stored in a single object instead of as separate variables.
// Something like:
// var hasMoved = {
//   whiteKing: false,
//   blackKing: false,
//   h1Rook: false,
//   etc...
// }
var wKingMoved = false;
var bKingMoved = false;
var h1RookMoved = false;
var a1RookMoved = false;
var a8RookMoved = false;
var h8RookMoved = false;
var wKingInCheck = false;
var bKingInCheck = false;
var squareName;
let checkMate = false;


//
//  Query Selectors for squares and an array for the divs
//  

// FEEDBACK:
// there is a lot of repeated code here (64 lines of the same thing I guess)
// perhaps there is a more consise way to do this using a single .querySelectorAll() call,
// though I think that would require changes to the html.
// You could also do these query selectors in a more 'dynamic' way, rather than hard coding every square,
// while also building the div array at the same time.
//
// const divArray = [];
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(letter => {
//    [1, 2, 3, 4, 5, 6, 7, 8].forEach(number => {
//          divArray.push(document.querySelector(`.${letter}${number}-Square`));
//    })
// }
//})
//
// This snippet loops over the letters a through h, then the numbers 1 through 8 for each of the letters,
// and dynamically builds the string to use for the query selector using what is called a template literal
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//

const a1Div = document.querySelector('.a1-Square');
const a2Div = document.querySelector('.a2-Square');
const a3Div = document.querySelector('.a3-Square');
const a4Div = document.querySelector('.a4-Square');
const a5Div = document.querySelector('.a5-Square');
const a6Div = document.querySelector('.a6-Square');
const a7Div = document.querySelector('.a7-Square');
const a8Div = document.querySelector('.a8-Square');

const b1Div = document.querySelector('.b1-Square');
const b2Div = document.querySelector('.b2-Square');
const b3Div = document.querySelector('.b3-Square');
const b4Div = document.querySelector('.b4-Square');
const b5Div = document.querySelector('.b5-Square');
const b6Div = document.querySelector('.b6-Square');
const b7Div = document.querySelector('.b7-Square');
const b8Div = document.querySelector('.b8-Square');

const c1Div = document.querySelector('.c1-Square');
const c2Div = document.querySelector('.c2-Square');
const c3Div = document.querySelector('.c3-Square');
const c4Div = document.querySelector('.c4-Square');
const c5Div = document.querySelector('.c5-Square');
const c6Div = document.querySelector('.c6-Square');
const c7Div = document.querySelector('.c7-Square');
const c8Div = document.querySelector('.c8-Square');

const d1Div = document.querySelector('.d1-Square');
const d2Div = document.querySelector('.d2-Square');
const d3Div = document.querySelector('.d3-Square');
const d4Div = document.querySelector('.d4-Square');
const d5Div = document.querySelector('.d5-Square');
const d6Div = document.querySelector('.d6-Square');
const d7Div = document.querySelector('.d7-Square');
const d8Div = document.querySelector('.d8-Square');

const e1Div = document.querySelector('.e1-Square');
const e2Div = document.querySelector('.e2-Square');
const e3Div = document.querySelector('.e3-Square');
const e4Div = document.querySelector('.e4-Square');
const e5Div = document.querySelector('.e5-Square');
const e6Div = document.querySelector('.e6-Square');
const e7Div = document.querySelector('.e7-Square');
const e8Div = document.querySelector('.e8-Square');

const f1Div = document.querySelector('.f1-Square');
const f2Div = document.querySelector('.f2-Square');
const f3Div = document.querySelector('.f3-Square');
const f4Div = document.querySelector('.f4-Square');
const f5Div = document.querySelector('.f5-Square');
const f6Div = document.querySelector('.f6-Square');
const f7Div = document.querySelector('.f7-Square');
const f8Div = document.querySelector('.f8-Square');

const g1Div = document.querySelector('.g1-Square');
const g2Div = document.querySelector('.g2-Square');
const g3Div = document.querySelector('.g3-Square');
const g4Div = document.querySelector('.g4-Square');
const g5Div = document.querySelector('.g5-Square');
const g6Div = document.querySelector('.g6-Square');
const g7Div = document.querySelector('.g7-Square');
const g8Div = document.querySelector('.g8-Square');

const h1Div = document.querySelector('.h1-Square');
const h2Div = document.querySelector('.h2-Square');
const h3Div = document.querySelector('.h3-Square');
const h4Div = document.querySelector('.h4-Square');
const h5Div = document.querySelector('.h5-Square');
const h6Div = document.querySelector('.h6-Square');
const h7Div = document.querySelector('.h7-Square');
const h8Div = document.querySelector('.h8-Square');

//
// This array corrosponds with squaresArray to make matching DIV with Object easy.
//
const divArray = [a1Div,a2Div,a3Div,a4Div,a5Div,a6Div,a7Div,a8Div,b1Div,b2Div,
    b3Div,b4Div,b5Div,b6Div,b7Div,b8Div,c1Div,c2Div,c3Div,c4Div,c5Div,c6Div,c7Div,c8Div,
    d1Div, d2Div, d3Div,d4Div,d5Div,d6Div,d7Div,d8Div,e1Div,e2Div,e3Div,e4Div,e5Div,e6Div,
    e7Div,e8Div,f1Div,f2Div,f3Div,f4Div,f5Div,f6Div,f7Div,f8Div,g1Div,g2Div,g3Div,g4Div,
    g5Div,g6Div,g7Div,g8Div,h1Div,h2Div,h3Div,h4Div,h5Div,h6Div,h7Div,h8Div]

//
//  Class for making Squares
//
class Square {

    constructor(_rowParam, _colParam, _typeParam, _colorParam){
       
   
        this.row = _rowParam;  //coordinates
        this.col = _colParam;
        this.possible = false;    // marks the square for movement possible
        this.encounter = false;  // marks the square for trade possible
        this.blackCount = 0;        //represents pieces line of sight   
        this.whiteCount = 0;
        this.pieceType = _typeParam;
        this.pieceColor = _colorParam;
        this.altPieceType = '';     //alt board state for moving around pieces without messing up mainboard
        this.pastPieceType = '';        //board state 1 move in the past
        this.pastPieceColor = '';

 

        squaresArray.push(this);
       

    }

}

//
//  Making Squares
//
let squaresArray = [];
   
let a1Square = new Square(0,0,'rook','white');
let a2Square = new Square(1,0,'pawn','white');
let a3Square = new Square(2,0,'','');
let a4Square = new Square(3,0,'','');
let a5Square = new Square(4,0,'','');
let a6Square = new Square(5,0,'','');
let a7Square = new Square(6,0,'pawn','black');
let a8Square = new Square(7,0,'rook','black');

let b1Square = new Square(0,1,'knight','white');
let b2Square = new Square(1,1,'pawn','white');
let b3Square = new Square(2,1,'','');
let b4Square = new Square(3,1,'','');
let b5Square = new Square(4,1,'','');
let b6Square = new Square(5,1,'','');
let b7Square = new Square(6,1,'pawn','black');
let b8Square = new Square(7,1,'knight','black');

let c1Square = new Square(0,2,'bishop','white');
let c2Square = new Square(1,2,'pawn','white');
let c3Square = new Square(2,2,'','');
let c4Square = new Square(3,2,'','');
let c5Square = new Square(4,2,'','');
let c6Square = new Square(5,2,'','');
let c7Square = new Square(6,2,'pawn','black');
let c8Square = new Square(7,2,'bishop','black');


let d1Square = new Square(0,3,'queen','white');
let d2Square = new Square(1,3,'pawn','white');
let d3Square = new Square(2,3,'','');
let d4Square = new Square(3,3,'','');
let d5Square = new Square(4,3,'','');
let d6Square = new Square(5,3,'','');
let d7Square = new Square(6,3,'pawn','black');
let d8Square = new Square(7,3,'queen','black');


let e1Square = new Square(0,4,'king','white');
let e2Square = new Square(1,4,'pawn','white');
let e3Square = new Square(2,4,'','');
let e4Square = new Square(3,4,'','');
let e5Square = new Square(4,4,'','');
let e6Square = new Square(5,4,'','');
let e7Square = new Square(6,4,'pawn','black');
let e8Square = new Square(7,4,'king','black');

let f1Square = new Square(0,5,'bishop','white');
let f2Square = new Square(1,5,'pawn','white');
let f3Square = new Square(2,5,'','');
let f4Square = new Square(3,5,'','');
let f5Square = new Square(4,5,'','');
let f6Square = new Square(5,5,'','');
let f7Square = new Square(6,5,'pawn','black');
let f8Square = new Square(7,5,'bishop','black');

let g1Square = new Square(0,6,'knight','white');
let g2Square = new Square(1,6,'pawn','white');
let g3Square = new Square(2,6,'','');
let g4Square = new Square(3,6,'','');
let g5Square = new Square(4,6,'','');
let g6Square = new Square(5,6,'','');
let g7Square = new Square(6,6,'pawn','black');
let g8Square = new Square(7,6,'knight','black');


let h1Square = new Square(0,7,'rook','white');
let h2Square = new Square(1,7,'pawn','white');
let h3Square = new Square(2,7,'','');
let h4Square = new Square(3,7,'','');
let h5Square = new Square(4,7,'','');
let h6Square = new Square(5,7,'','');
let h7Square = new Square(6,7,'pawn','black');
let h8Square = new Square(7,7,'rook','black');
const benPassantArray = [a3Square, b3Square, c3Square, d3Square, e3Square, f3Square, g3Square, h3Square];
const wenPassantArray = [a6Square, b6Square, c6Square, d6Square, e6Square, f6Square, g6Square, h6Square];

function
findBlackKing(){
  // FEEDBACK:
  // This applies to all of your 'find' functions. Javascript actually has a built in find method for arrays.
  // So this whole function could instead just be:
  //
  // function findBlackKing() {
  //     return squaresArray.find(square => square.pieceType == 'king' && squares.pieceColor == 'black');
  // }
  // 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    for (let i = 0; i < squaresArray.length; i ++){
if (squaresArray[i].pieceType == 'king' && squaresArray[i].pieceColor == 'black') { return squaresArray[i]}
    }
}

function
findWhiteKing(){
  // FEEDBACK: same feedback as for flintBlackKing.
  // in fact, you could reduce the code duplication by merging them into a single function, and passing the color
  // you're looking for as an argument.
  //
  // function findKing(color) {
  //     return squaresArray.find(square => square.pieceType == 'king' && squares.pieceColor == color);
  // }
  //
  // Then you could just call it with findKing('white') or findKing('black')
    for (let i = 0; i < squaresArray.length; i ++){
if (squaresArray[i].pieceType == 'king' && squaresArray[i].pieceColor == 'white') { return squaresArray[i]}
    }
}

//f
//
//
function
pastBoardUpdate(){
    for (let i = 0; i < squaresArray.length; i++ ){
        squaresArray[i].pastPieceType = squaresArray[i].pieceType
        squaresArray[i].pastPieceColor = squaresArray[i].pieceColor
    }
}

function
updateRealWithPastBoard(){
    for (let i = 0; i < squaresArray.length; i++ ){
        squaresArray[i].pieceType = squaresArray[i].pastPieceType
        squaresArray[i].pieceColor = squaresArray[i].pastPieceColor
    }
}

//f
//  Find the square with col and row coordinates and output that object
//
function
findSquare(rowinput, colinput){
// FEEDBACK:
// same as the other find related functions, you could use javascript's built in find() method
//
// function findSquare(rowinput, colinput) {
//     return squaresArray.find(square => square.row == rowinput && square.col == colinput);
// }
//
// You could also think about storing the squares in a 2 dimentional array that represents the actual rows and columns.
// For example each row would be an individual array, and they would all be in one larger array of the whole board.
//
// [
//   [row1col1, row1col2, row1col3, etc...],
//   [row2col1, row2col2, row2col3, etc...],
//   [row3col1, row3col2, row3col3, etc...],
//   etc...
// ]
// (please note the names of the items in the array are just examples to try and indicate/explain how the data is stored)
// Then you could look up the square you need in a single (technically two) operation, instead of having to loop over every square searching for it.
// squaresArray[row][column]
for (let i = 0; i < squaresArray.length; i++){
    if (squaresArray[i].row == rowinput && squaresArray[i].col == colinput){
       
        return squaresArray[i]

    }
}
}
//      Resets the count (aka pieces line of sight)
function
resetCount(){
    for (let i = 0; i < squaresArray.length; i ++){
        squaresArray[i].blackCount = 0;
        squaresArray[i].whiteCount = 0;
    }
}


function
checkChecker(){
// FEEDBACK
// the name of this function is a little confusing. Perhaps a comment on the function could help explain to someone reading the code
    for  (let i = 0; i < squaresArray.length; i ++){
      // FEEDBACK: are you using yoda style statements on purpose? if so, that's cool. I don't use them myself personally because I
      // find it doesn't 'roll off the tongue' as nicely when I read it in my head
         if ('king' == squaresArray[i].pieceType && 'white' == squaresArray[i].pieceColor && 0 != squaresArray[i].blackCount ){
                divArray[i].style.backgroundImage = "url('./assets/red2.jpg')"
               
                return mateChecker();
        }
    }

    // FEEDBACK:
    // looks like you're looping through the whole array twice, the first time checking for a white king, then the second time 
    // checking for a black king. Then you're doing the exact same thing inside both if statements! You could combine them into
    // a single loop
    // 
    // for (let i = 0; i < squaresArray.length; i ++){
    //   if ('king' == squaresArray[i].pieceType){
    //     const blackKingWithNoLineOfSite = 'black' == squaresArray[i].pieceColor && 0 != squaresArray[i].whiteCount;
    //     const whiteKingWithNoLineOfSite = 'white' == squaresArray[i].pieceColor && 0 != squaresArray[i].blackCount;
    //     if(blackKingWithNoLineOfSite || whiteKingWithNoLineOfSite) {
    //       divArray[i].style.backgroundImage = "url('./assets/red2.jpg')"
    //       return mateChecker();
    //     }
    //   }
    // }
    //
    // This way we are not looping through the array twice just to do the exact same thing. I've pulled the if statement
    // apart a little bit because I think it makes it easier to read
    for (let i = 0; i < squaresArray.length; i ++){
            if ('king' == squaresArray[i].pieceType && 'black' == squaresArray[i].pieceColor && 0 != squaresArray[i].whiteCount ){
                divArray[i].style.backgroundImage = "url('./assets/red2.jpg')"
                return mateChecker();
        }
    }
}


//
//      Making a copy of the board - so that I can modify it while still maintaining the true board state
function
altSnapshot(){
    for (let i = 0; i < squaresArray.length; i++){
        squaresArray[i].altPieceType = squaresArray[i].pieceType
        squaresArray[i].altPieceColor = squaresArray[i].pieceColor
    }
}


//
//      This functions relies on a version of the board that is stuck in the past. If a move is made and the king is still in check, we just update the real board with the board in the past and skip changing 
//      turns. This way its impossible to make a move that doesnt prevent checkmate or to put yourself in check. 
function
CheckForPin(){

    let whiteKingSquare = findWhiteKing();
    let blackKingSquare = findBlackKing();
    resetCount();
    altSnapshot();
    countChecker();
 
    // FEEDBACK
    // don't put the content of the if statement on one line especially when it's actually multiple lines. 
    // These should be spread out more
    // if (currentTurnColor == 'black' && blackKingSquare.whiteCount > 0){
    //   updateRealWithPastBoard(); 
    //   resetCount(); 
    //   return false 
    // }
    // 
    // Also this is another case where you are having two if statements do the same thing. So you could consolidate them
    // into one statement using an OR (||)
    if (currentTurnColor == 'black' && blackKingSquare.whiteCount > 0){  updateRealWithPastBoard(); resetCount(); return false }
    if (currentTurnColor == 'white' && whiteKingSquare.blackCount > 0){  updateRealWithPastBoard(); resetCount(); return false }

    // You also have inside the if statements returning false, but no return true outside the if statements. This might be
    // confusing because the function will sometimes return a boolean and sometimes return undefined
}

// FEEDBACK
// you could simplify this a little bit by using a ternary statement
//
// function turnColorSwitcher() {
//     currentTurnColor = currentTurnColor == 'white' ? 'black': 'white';
// }
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function
turnColorSwitcher(){    if (currentTurnColor == 'white'){ currentTurnColor = 'black'; }
else{ currentTurnColor = 'white'; }}


function
changeTurn(){
 
  // FEEDBACK
  // not sure if you've done this knowingly but this sort of style of if statement is know as a guard clause
  // or 'return early' and is a great way to help with readability and keep code clean
   if (false == CheckForPin()) {return }

   turnColorSwitcher();
    possibilityState = false;
    resetPossibleAndEncounter();
    unvisualizePossibilities()

    altSnapshot();
    mapImages();
    // FEEDBACK
    // you're using last object like some sort of stack or queue (pushing and popping into it), but I think you never push
    // more than 1 thing into it at a time? this is the only place you call .push on it, and it's right after you call .pop,
    // so is there any point actually having it as an array? why not just do lastObject = currentObject?
    lastObject.pop();
    lastObject.push(currentObject);
    resetCount();
    countChecker()
    checkChecker();
    pastBoardUpdate()
}

//
//  Possible and encounter refers to movement possibilities of pieces. This resets those possibilities. 
//
function
resetPossibleAndEncounter() {
    for (let i = 0; i < squaresArray.length; i++) {
        squaresArray[i].possible = false;
        squaresArray[i].encounter = false;
    }
}

function
visualizePossibilities(){
        for (let i = 0; i < squaresArray.length; i ++){
        // FEEDBACK
        // you can skip the == true here, just if(squaresArray[i].encounter is enough)
        // Also you set the background image of the div to red2.jpg a number of times, maybe you should consider
        // moving that into a function so it's reusable?
        // Also also, if the file name or path changes for whatever reason, now you have many places in your code that
        // also need to be changed.  Using a function can help with this, or you could instead use a css class to set 
        // the background, and use javascript to just turn that class on or off
        if (squaresArray[i].encounter == true) {divArray[i].style.backgroundImage = "url('./assets/red2.jpg')";}
            else if (squaresArray[i].possible == true) {divArray[i].style.backgroundImage = "url('./assets/index.png')";}  
        }
       
    }
function
unvisualizePossibilities(){
    for (let i = 0; i < squaresArray.length; i ++){
    // FEEDBACK
    // you can skip the == false here by using the not operator (!)
    // if (!squaresArray[i].encounter) { is enough
    if (squaresArray[i].encounter == false) {divArray[i].style.backgroundImage = "";}
        else if (squaresArray[i].possible == false) {divArray[i].style.backgroundImage = ''}
        }
    }
   
//
//  Map Images
//
function
mapImages(){

  FEEDBACK
  // This is another case where thinking more dynamically can reduce the amount of code duplication here.
  // The inside of each if statement is pretty much exactly the same, with a few changes in the string.
  // We can again generate that string dynamically to reduce the number of if statements.
  //
  // We can use a js object to map between the peiceSet string and the folder name,then can do something
  // similar for the pieces & colors.
  //
  // function mapImages(){
  //   var folderMap = {
  //     'basic': 'assets',
  //     'anarcandy': 'assets2'
  //   }
  //   var folder = folderMap[pieceSet];

  //   var pieceMap = {
  //     'rook': 'R',
  //     'knight': 'N',
  //     'bishop': 'B',
  //     'queen': 'Q',
  //     'king': 'K',
  //     'pawn': 'P'
  //   }
  //   for (let i = 0; i < squaresArray.length; i ++){
  //     const square = squaresArray[i];
  //     if(square.pieceType == ''){
  //       divArray[i].innerHTML = '';
  //       continue;
  //     }
  //     const piece = `${square.pieceColor[0]}${pieceMap[square.pieceType]}`
  //     divArray[i].innerHTML = `<img src="./${folder}/${piece}.png" alt="${square.pieceColor}${square.pieceType}">`;
  //   }
  // }
  //
  // As you can see this has really reduced the number of different possible paths that the code has, which recudces
  // the complexity. If you renamed the actual files that are being referenced to match your code more closely (i.e 
  // folders called ./basic and ./anarcandy instead of ./assets and ./assets2, whiterook.png instead of wR.png etc)
  // then you could also get rid of the map objects and just directly use the pieceSet, pieceType, and pieceColor values
  // when building the string.

    if (pieceSet=='basic'){
    for (let i = 0; i < squaresArray.length; i ++){
    if (squaresArray[i].pieceType == ''){divArray[i].innerHTML =''
    }else
    if (squaresArray[i].pieceType == 'rook' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets/wR.png" alt="WhiteRook">'
    }else
    if (squaresArray[i].pieceType == 'knight' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets/wN.png" alt="WhiteKnight">'
    }else
    if (squaresArray[i].pieceType == 'bishop' && squaresArray[i].pieceColor == 'white'){
         divArray[i].innerHTML = '<img src="./assets/wB.png" alt="WhiteBishop">'
    }else
    if (squaresArray[i].pieceType == 'queen' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets/wQ.png" alt="WhiteQueen">'
    }else
    if (squaresArray[i].pieceType == 'king' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets/wK.png" alt="WhiteKing">'
    }else
    if (squaresArray[i].pieceType == 'pawn' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets/wP.png" alt="WhitePawn">'
    }else


    if (squaresArray[i].pieceType == 'rook' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bR.png" alt="BlackRook">'
    }else
    if (squaresArray[i].pieceType == 'knight' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bN.png" alt="BlackKnight">'
    }else
    if (squaresArray[i].pieceType == 'bishop' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bB.png" alt="BlackBishop">'
    }else
    if (squaresArray[i].pieceType == 'queen' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bQ.png" alt="BlackQueen">'
    }else
    if (squaresArray[i].pieceType == 'king' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bK.png" alt="BlackKing">'
    }else
    if (squaresArray[i].pieceType == 'pawn' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bP.png" alt="BlackPawn">'
    }
}
}

if (pieceSet == 'anarcandy'){
    for (let i = 0; i < squaresArray.length; i ++){
   if (squaresArray[i].pieceType == ''){divArray[i].innerHTML =''
    }else
    if (squaresArray[i].pieceType == 'rook' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets2/wR.svg" alt="WhiteRook">'
    }else
    if (squaresArray[i].pieceType == 'knight' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets2/wN.svg" alt="WhiteKnight">'
    }else
    if (squaresArray[i].pieceType == 'bishop' && squaresArray[i].pieceColor == 'white'){
         divArray[i].innerHTML = '<img src="./assets2/wB.svg" alt="WhiteBishop">'
    }else
    if (squaresArray[i].pieceType == 'queen' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets2/wQ.svg" alt="WhiteQueen">'
    }else
    if (squaresArray[i].pieceType == 'king' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets2/wK.svg" alt="WhiteKing">'
    }else
    if (squaresArray[i].pieceType == 'pawn' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets2/wP.svg" alt="WhitePawn">'
    }else


    if (squaresArray[i].pieceType == 'rook' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets2/bR.svg" alt="BlackRook">'
    }else
    if (squaresArray[i].pieceType == 'knight' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets2/bN.svg" alt="BlackKnight">'
    }else
    if (squaresArray[i].pieceType == 'bishop' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets2/bB.svg" alt="BlackBishop">'
    }else
    if (squaresArray[i].pieceType == 'queen' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets2/bQ.svg" alt="BlackQueen">'
    }else
    if (squaresArray[i].pieceType == 'king' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets2/bK.svg" alt="BlackKing">'
    }else
    if (squaresArray[i].pieceType == 'pawn' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets2/bP.svg" alt="BlackPawn">'
    } }
}}

mapImages()

function
changePieceButton(){
    // FEEDBACK
    // you could take the mapImages() call out of the if statement and just have it once at the end of the
    // changePieceButton function
    if (pieceSet=='basic') {pieceSet = 'anarcandy'; return mapImages();}
    else { pieceSet = 'basic'; return mapImages();}
    
}

//
//      True means the king found a way out of mate - The count refers to the opponets pieces line of sight. Count of zero means no piece is attacking that square. 
function
checkSquaresAroundKing(){

  // FEEDBACK
  // you're calling findBlackKing twice, which means that you're looping through the squaresArray twice. Not the end
  // of the world but if the squaresArray was very large then you wouldn't want to do that. You could avoid it by
  // assinging the result of findBlackKing and findWhiteKing to a variable first, then call .row and .col on those variables.
 let brow = findBlackKing().row;
 let bcol = findBlackKing().col;

 let row = findWhiteKing().row;
 let col = findWhiteKing().col;

      if ('black' == currentTurnColor){

        if (0 == findBlackKing().whiteCount){return true;}

       //free squares
       // FEEDBACK
       // in here you're also calling findSquare multiple times for the same square, so it is looping through the 
       // squares array multiple times just to find the same square. you could assign the results to a variable first
       // to not have to search for the square multiple times.
       //
       // Also this is another case where you could think about handling it more dynamically, instead of hard coding 
       // all the if statements. You could somehow store the row & column offsets as pairs of +1 ,0, or -1, and loop
       // over those pairs of offsets, checking whatever it is these if statements check. I won't write an example
       // snippet this time because it's late and I'm tired haha
       if (findSquare(brow +1 ,bcol) != undefined && findSquare(brow +1 ,bcol).whiteCount == 0 && findSquare(brow +1 ,bcol).pieceColor == '' ) {console.log ('1');return true}
       if (findSquare(brow +1 ,bcol + 1) != undefined && findSquare(brow +1 ,bcol + 1).whiteCount == 0 && findSquare(brow +1 ,bcol + 1).pieceColor == '' ) {console.log ('2'); return true}
       if (findSquare(brow ,bcol + 1) != undefined && findSquare(brow  ,bcol + 1).whiteCount == 0 && findSquare(brow  ,bcol + 1).pieceColor == '' ) {console.log ('3');return true}
       if (findSquare(brow -1 ,bcol + 1) != undefined && findSquare(brow-1  ,bcol + 1).whiteCount == 0 && findSquare(brow-1  ,bcol + 1).pieceColor == '' ) {console.log ('8');return true}
       if (findSquare(brow -1 ,bcol) != undefined && findSquare(brow -1 ,bcol).whiteCount == 0 && findSquare(brow -1 ,bcol).pieceColor == '' ) {console.log ('4');return true}
       if (findSquare(brow -1 ,bcol -1) != undefined && findSquare(brow -1 ,bcol-1).whiteCount == 0 && findSquare(brow -1 ,bcol-1).pieceColor == '' ) {console.log ('5');return true}
       if (findSquare(brow  ,bcol -1) != undefined && findSquare(brow  ,bcol-1).whiteCount == 0 && findSquare(brow  ,bcol-1).pieceColor == '' ) {console.log ('6');return true}
       if (findSquare(brow +1 ,bcol - 1) != undefined && findSquare(brow +1 ,bcol - 1).whiteCount == 0 && findSquare(brow +1 ,bcol - 1).pieceColor == '' ) {console.log ('17');return true}

//squares with a white piece in it.
       if (findSquare(brow +1 ,bcol) != undefined &&  findSquare(brow +1 ,bcol).whiteCount == 0 && findSquare(brow +1 ,bcol).pieceColor == 'white' ) {console.log ('9');return true}
       if (findSquare(brow +1 ,bcol + 1) != undefined && findSquare(brow +1 ,bcol + 1).whiteCount == 0 && findSquare(brow +1 ,bcol + 1).pieceColor == 'white' ) {console.log ('10');return true}
       if (findSquare(brow ,bcol + 1) != undefined && findSquare(brow  ,bcol + 1).whiteCount == 0 && findSquare(brow  ,bcol + 1).pieceColor == 'white'  ) {console.log ('11');return true}
       if (findSquare(brow -1 ,bcol + 1) != undefined &&  findSquare(brow-1  ,bcol + 1).whiteCount == 0 && findSquare(brow-1  ,bcol + 1).pieceColor == 'white')  {console.log ('12');return true}
       if (findSquare(brow -1 ,bcol) != undefined && findSquare(brow -1 ,bcol).whiteCount == 0 && findSquare(brow -1 ,bcol).pieceColor == 'white' ) {console.log ('13');return true}
       if (findSquare(brow -1 ,bcol -1) != undefined &&  findSquare(brow -1 ,bcol-1).whiteCount == 0 && findSquare(brow -1 ,bcol-1).pieceColor == 'white' ) {console.log ('14');return true}
       if ( findSquare(brow  ,bcol -1) != undefined && findSquare(brow  ,bcol-1).whiteCount == 0 && findSquare(brow  ,bcol-1).pieceColor == 'white' ) {console.log ('15');return true}
       if (findSquare(brow +1 ,bcol - 1) != undefined &&  findSquare(brow +1 ,bcol - 1).whiteCount == 0 && findSquare(brow +1 ,bcol - 1).pieceColor == 'white' ) {console.log ('16');return true}
    }


    if ('white' == currentTurnColor){

        if (0 == findWhiteKing().blackCount){return true;}

       //free squares
       if (findSquare(row +1 ,col) != undefined && findSquare(row +1 ,col).blackCount == 0 && findSquare(row +1 ,col).pieceColor == '' ) {console.log ('1');return true}
       if (findSquare(row +1 ,col + 1) != undefined && findSquare(row +1 ,col + 1).blackCount == 0 && findSquare(row +1 ,col + 1).pieceColor == '' ) {console.log ('2'); return true}
       if (findSquare(row ,col + 1) != undefined && findSquare(row  ,col + 1).blackCount == 0 && findSquare(row  ,col + 1).pieceColor == '' ) {console.log ('3');return true}
       if (findSquare(row -1 ,col + 1) != undefined && findSquare(row-1  ,col + 1).blackCount == 0 && findSquare(row-1  ,col + 1).pieceColor == '' ) {console.log ('8');return true}
       if (findSquare(row -1 ,col) != undefined && findSquare(row -1 ,col).blackCount == 0 && findSquare(row -1 ,col).pieceColor == '' ) {console.log ('4');return true}
       if (findSquare(row -1 ,col -1) != undefined && findSquare(row -1 ,col-1).blackCount == 0 && findSquare(row -1 ,col-1).pieceColor == '' ) {console.log ('5');return true}
       if (findSquare(row  ,col -1) != undefined && findSquare(row  ,col-1).blackCount == 0 && findSquare(row  ,col-1).pieceColor == '' ) {console.log ('6');return true}
       if (findSquare(row +1 ,col - 1) != undefined && findSquare(row +1 ,col - 1).blackCount == 0 && findSquare(row +1 ,col - 1).pieceColor == '' ) {console.log ('17');return true}

//squares with a black piece in it.
       if (findSquare(row +1 ,col) != undefined &&  findSquare(row +1 ,col).blackCount == 0 && findSquare(row +1 ,col).pieceColor == 'black' ) {console.log ('9');return true}
       if (findSquare(row +1 ,col + 1) != undefined && findSquare(row +1 ,col + 1).blackCount == 0 && findSquare(row +1 ,col + 1).pieceColor == 'black' ) {console.log ('10');return true}
       if (findSquare(row ,col + 1) != undefined && findSquare(row  ,col + 1).blackCount == 0 && findSquare(row  ,col + 1).pieceColor == 'black'  ) {console.log ('11');return true}
       if (findSquare(row -1 ,col + 1) != undefined &&  findSquare(row-1  ,col + 1).blackCount == 0 && findSquare(row-1  ,col + 1).pieceColor == 'black')  {console.log ('12');return true}
       if (findSquare(row -1 ,col) != undefined && findSquare(row -1 ,col).blackCount == 0 && findSquare(row -1 ,col).pieceColor == 'black' ) {console.log ('13');return true}
       if (findSquare(row -1 ,col -1) != undefined &&  findSquare(row -1 ,col-1).blackCount == 0 && findSquare(row -1 ,col-1).pieceColor == 'black' ) {console.log ('14');return true}
       if ( findSquare(row  ,col -1) != undefined && findSquare(row  ,col-1).blackCount == 0 && findSquare(row  ,col-1).pieceColor == 'black' ) {console.log ('15');return true}
       if (findSquare(row +1 ,col - 1) != undefined &&  findSquare(row +1 ,col - 1).blackCount == 0 && findSquare(row +1 ,col - 1).pieceColor == 'black' ) {console.log ('16');return true}
    }


    
       return false
   }

//
//      This function sets checkmate to true. It  then makes every possible move for a player in check. After every move, it checks to see if the king has a way out. If after its tried every move, its still checkMate == true
//      then the game is over.  The actual movement of the pieces happens after this function. This function calls those movement functions. 
function
mateChecker(){
    
    checkMate = true;

    if (true == checkSquaresAroundKing()){ checkMate = false;}
      // FEEDBACK
      // similar comment to the checkSquaresAroundKing feedback. Lots of repeated lines here with just a few things change.
      // Could again thinking about storing those differences for each piece type somehow and just looping over them, instead of hard coding
      // each required call to mateDirection
      for (let i = 0; i < squaresArray.length; i++){
        if (squaresArray[i].pieceType == 'rook' && squaresArray[i].pieceColor == currentTurnColor){
      
  mateDirection(squaresArray[i].row + 1,squaresArray[i].col, 'up',findSquare(squaresArray[i].row,squaresArray[i].col)) 
mateDirection(squaresArray[i].row - 1,squaresArray[i].col, 'down',findSquare(squaresArray[i].row,squaresArray[i].col)) 
mateDirection(squaresArray[i].row , squaresArray[i].col + 1,'right',findSquare(squaresArray[i].row,squaresArray[i].col)) 
mateDirection(squaresArray[i].row , squaresArray[i].col -1, 'left',findSquare(squaresArray[i].row,squaresArray[i].col)) 
}

if (squaresArray[i].pieceType == 'bishop' && squaresArray[i].pieceColor == currentTurnColor){

   mateDirection(squaresArray[i].row +1, squaresArray[i].col-1, 'up left',findSquare(squaresArray[i].row,squaresArray[i].col)) 
    mateDirection(squaresArray[i].row +1, squaresArray[i].col + 1,'up right',findSquare(squaresArray[i].row,squaresArray[i].col)) 
    mateDirection(squaresArray[i].row -1, squaresArray[i].col -1,'down left',findSquare(squaresArray[i].row,squaresArray[i].col)) 
    mateDirection(squaresArray[i].row -1, squaresArray[i].col +1,'down right',findSquare(squaresArray[i].row,squaresArray[i].col)) 
    }

    if (squaresArray[i].pieceType == 'queen' && squaresArray[i].pieceColor == currentTurnColor){   

    mateDirection(squaresArray[i].row +1, squaresArray[i].col-1, 'up left',findSquare(squaresArray[i].row,squaresArray[i].col)) 
    mateDirection(squaresArray[i].row +1, squaresArray[i].col + 1,'up right',findSquare(squaresArray[i].row,squaresArray[i].col)) 
    mateDirection(squaresArray[i].row -1, squaresArray[i].col -1,'down left',findSquare(squaresArray[i].row,squaresArray[i].col)) 
    mateDirection(squaresArray[i].row -1, squaresArray[i].col +1,'down right',findSquare(squaresArray[i].row,squaresArray[i].col)) 
        mateDirection(squaresArray[i].row + 1,squaresArray[i].col, 'up',findSquare(squaresArray[i].row,squaresArray[i].col)) 
mateDirection(squaresArray[i].row - 1,squaresArray[i].col, 'down',findSquare(squaresArray[i].row,squaresArray[i].col)) 
mateDirection(squaresArray[i].row , squaresArray[i].col + 1,'right',findSquare(squaresArray[i].row,squaresArray[i].col)) 
mateDirection(squaresArray[i].row , squaresArray[i].col -1, 'left',findSquare(squaresArray[i].row,squaresArray[i].col)) 

        }

        /* for (let i = 0; i < wPawnArray.length; i++){
            if (wPawnArray[i].pieceType == 'pawn' && wPawnArray[i].pieceColor == 'white' && currentTurnColor == 'white') {
                matePawn(wPawnArray[i].row +2,wPawnArray[i].col ,true)
            }
           }
           for (let i = 0; i < pawnArray.length; i++){
            if (pawnArray[i].pieceType == 'pawn' && pawnArray[i].pieceColor == 'black' && currentTurnColor == 'black') {
                matePawn(pawnArray[i].row -2,pawnArray[i].col ,true)
            }
           } 
    */
/*         if (squaresArray[i].pieceType == 'pawn'  && squaresArray[i].pieceColor == currentTurnColor && currentTurnColor == 'white'){
            matePawn(squaresArray[i].row +1,squaresArray[i].col + 1,false)
            matePawn(squaresArray[i].row +1, squaresArray[i].col -1 ,false)
            matePawn(squaresArray[i].row +1,squaresArray[i].col ,true) 
            }
        if (squaresArray[i].pieceType == 'pawn' &&  squaresArray[i].pieceColor == currentTurnColor && currentTurnColor == 'black'){
             matePawn(squaresArray[i].row - 1,squaresArray[i].col + 1,false)
            matePawn(squaresArray[i].row -1, squaresArray[i].col -1 ,false)
            matePawn(squaresArray[i].row -1, squaresArray[i].col  ,true) 
       
            } */
       
        if (squaresArray[i].pieceType == 'knight' && squaresArray[i].pieceColor == currentTurnColor){

          mateDirection(squaresArray[i].row + 2, squaresArray[i].col + 1, 'stop',findSquare(squaresArray[i].row,squaresArray[i].col)) 
            mateDirection(squaresArray[i].row+ 1, squaresArray[i].col + 2, 'stop',findSquare(squaresArray[i].row,squaresArray[i].col)) 
            mateDirection(squaresArray[i].row - 1, squaresArray[i].col + 2, 'stop',findSquare(squaresArray[i].row,squaresArray[i].col)) 
            mateDirection(squaresArray[i].row- 2, squaresArray[i].col + 1, 'stop',findSquare(squaresArray[i].row,squaresArray[i].col)) 
            mateDirection(squaresArray[i].row - 2, squaresArray[i].col - 1, 'stop',findSquare(squaresArray[i].row,squaresArray[i].col)) 
            mateDirection(squaresArray[i].row - 1, squaresArray[i].col - 2, 'stop',findSquare(squaresArray[i].row,squaresArray[i].col)) 
            mateDirection(squaresArray[i].row+ 1, squaresArray[i].col - 2, 'stop',findSquare(squaresArray[i].row,squaresArray[i].col)) 
            mateDirection(squaresArray[i].row + 2, squaresArray[i].col - 1, 'stop',findSquare(squaresArray[i].row,squaresArray[i].col)) 
            } 
        }

        if (true == checkMate) {return document.getElementById('checkmate-id').innerHTML = 'CHECKMATE!!!!!!';
    }else {return 'Not CheckMate'}

    }
    
 function
mateDirection(row, col, direction,startSquare){
// FEEDBACK
// lots of repeated calls to findSquare again, can assign to a variable to prevent searching multiple times

    //already found a way out of checkmate - no need to look further.
if (false == checkMate) {return}


 if (findSquare(row,col) == undefined){
    return
 }


 // ran into a piece of the same color
 if (findSquare(row,col).pieceColor == currentTurnColor  ){

    return
 }


 // ran into a piece of opposite color
 if (findSquare(row,col).pieceColor != currentTurnColor && findSquare(row,col).pieceColor != ''){
 
    altSnapshot(); // This removes any previous placeholder pieces from the board and restores pieces that were traded. Its important we dont accumilate placeholders because that would mean a player was making more than one move.
    
    // This moves the piece that is moving from its original square to reveal if it is pinned or not.
    if (startSquare != undefined){
    startSquare.altPieceColor = '';
    startSquare.altPieceType = '';}


    resetCount(); // This resets the count because previous iterations of this function would have altered the count and those interations dont exist anymore.

    findSquare(row,col).altPieceType = 'placeholder';
    findSquare(row,col).altPieceColor = currentTurnColor;
    countChecker();

    //CheckMate is assumed true unless this is tripped. This simply means that we found a way out of checkmate. 
    if (0 == findBlackKing().whiteCount && currentTurnColor == 'black'){checkMate = false;}
    if (0 == findWhiteKing().blackCount && currentTurnColor == 'white'){checkMate = false;}
    altSnapshot();
    return
   
 }

 if (findSquare(row,col).pieceColor == '')
 
 {
   
    altSnapshot();


    if (startSquare != undefined){
        startSquare.altPieceColor = '';
        startSquare.altPieceType = '';}
    

    resetCount();

    findSquare(row,col).altPieceType = 'placeholder';
    findSquare(row,col).altPieceColor = currentTurnColor;

    countChecker();

    //CheckMate is assumed true unless this is tripped. This simply means that we found a way out of checkmate. 
    if (0 == findBlackKing().whiteCount && currentTurnColor == 'black'){checkMate = false;}
    if (0 == findWhiteKing().blackCount && currentTurnColor == 'white'){checkMate = false;}
    
    altSnapshot();


    if (direction == 'stop'){return}
      // FEEDBACK
      // again lots of repeated code, could store the row & column offsets per directly and just call mateDirection once
      // with the offsets based on the direction.
      //
      // const offsets = {
      //   'up': {row 1, col: 0},
      //   'down': {row: -1, col: 0},
      //   'right': {row: 0, col: 1 },
      //   'left': {row: 0, col: -1 }
      //   etc...
      // }
      // return mateDirection(row + offsets[direction].row, col + offsets[direction].col, direction);

    if (direction == 'up'){
    return mateDirection(row +1, col,'up')}

     if (direction == 'down') {
         return mateDirection(row - 1, col, 'down')
     }

     if (direction == 'right') {
         return mateDirection(row, col + 1, 'right')
     }

     if (direction == 'left') {
         return mateDirection(row, col - 1, 'left')
     }

     if (direction == 'up left') {
         return mateDirection(row + 1, col - 1, 'up left')
     }

     if (direction == 'up right') {
         return mateDirection(row + 1, col + 1, 'up right')
     }

     if (direction == 'down left') {
         return mateDirection(row - 1, col - 1, 'down left')
     }

     if (direction == 'down right') {
         return mateDirection(row - 1, col + 1, 'down right')
     }


}
}

function
matePawn(row,col,forward){
  // FEEDBACK
  // again lots of repeated calls to findSquare
    if(findSquare(row,col) == undefined){return}

    if(findSquare(row,col).altPieceColor == '' && forward == true){ findSquare(row,col).altPieceColor = currentTurnColor;
    findSquare(row,col).altPieceType = 'placeholder';
return}
   
        if (findSquare(row,col).altPieceColor != currentTurnColor ){
           
            findSquare(row,col).altPieceType = 'placeholder';
        findSquare(row,col).altPieceColor = currentTurnColor;
    return;}
}

//
//  This function uses the same basic algorithm of moving the pieces but its job is to mark the lines of sight of pieces. This is to detect for check and checkmate.
function
countChecker(){
   // FEEDBACK
   // same feedback with storing the offsets per piece and looping over them instead of hardcoding each one. Would even
   // be able to reuse the same offsets as the mate checker I think?
    for (let i = 0; i < squaresArray.length; i++){

        if (squaresArray[i].altPieceType == 'rook' && squaresArray[i].altPieceColor != currentTurnColor){
countDirection(squaresArray[i].row + 1,squaresArray[i].col, 'up')
countDirection(squaresArray[i].row -1, squaresArray[i].col,'down' )
countDirection(squaresArray[i].row , squaresArray[i].col - 1,'left' )      
countDirection(squaresArray[i].row , squaresArray[i].col + 1,'right' )          
}

if (squaresArray[i].altPieceType == 'bishop' && squaresArray[i].altPieceColor != currentTurnColor){
    countDirection(squaresArray[i].row + 1,squaresArray[i].col + 1,'up-right')
    countDirection(squaresArray[i].row -1, squaresArray[i].col +1,'down-right' )
    countDirection(squaresArray[i].row +1 , squaresArray[i].col - 1,'up-left' )      
    countDirection(squaresArray[i].row -1 , squaresArray[i].col - 1,'down-left' )          
    }

    if (squaresArray[i].altPieceType == 'queen' && squaresArray[i].altPieceColor != currentTurnColor){
        countDirection(squaresArray[i].row + 1,squaresArray[i].col + 1,'up-right')
        countDirection(squaresArray[i].row -1, squaresArray[i].col +1,'down-right' )
        countDirection(squaresArray[i].row +1 , squaresArray[i].col - 1,'up-left' )      
        countDirection(squaresArray[i].row -1 , squaresArray[i].col - 1,'down-left' )          
        countDirection(squaresArray[i].row + 1,squaresArray[i].col, 'up')
        countDirection(squaresArray[i].row -1, squaresArray[i].col,'down' )
        countDirection(squaresArray[i].row , squaresArray[i].col - 1,'left' )      
        countDirection(squaresArray[i].row , squaresArray[i].col + 1,'right' )         
        }
   
        if (squaresArray[i].altPieceType == 'pawn' && currentTurnColor == 'white' && squaresArray[i].altPieceColor != currentTurnColor){
            countDirection(squaresArray[i].row - 1,squaresArray[i].col + 1,'stop')
            countDirection(squaresArray[i].row -1, squaresArray[i].col -1 ,'stop')
            }
   
        if (squaresArray[i].altPieceType == 'pawn' && currentTurnColor == 'black' && squaresArray[i].altPieceColor != currentTurnColor){
            countDirection(squaresArray[i].row +1,squaresArray[i].col + 1, 'stop')
            countDirection(squaresArray[i].row +1, squaresArray[i].col -1, 'stop' )
            }
       
        if (squaresArray[i].altPieceType == 'knight' && squaresArray[i].altPieceColor != currentTurnColor){
            countDirection(squaresArray[i].row + 2, squaresArray[i].col + 1,'stop')
            countDirection(squaresArray[i].row+ 1, squaresArray[i].col + 2,'stop')
            countDirection(squaresArray[i].row - 1, squaresArray[i].col + 2,'stop')
            countDirection(squaresArray[i].row- 2, squaresArray[i].col + 1,'stop')
            countDirection(squaresArray[i].row - 2, squaresArray[i].col - 1,'stop')
            countDirection(squaresArray[i].row - 1, squaresArray[i].col - 2,'stop')
            countDirection(squaresArray[i].row+ 1, squaresArray[i].col - 2,'stop')
            countDirection(squaresArray[i].row + 2, squaresArray[i].col - 1,'stop')
            }

            if (squaresArray[i].altPieceType == 'king' && squaresArray[i].altPieceColor != currentTurnColor){
                countDirection(squaresArray[i].row + 1, squaresArray[i].col ,'stop')
                countDirection(squaresArray[i].row+ 1, squaresArray[i].col + 1,'stop')
                countDirection(squaresArray[i].row , squaresArray[i].col + 1,'stop')
                countDirection(squaresArray[i].row- 1, squaresArray[i].col + 1,'stop')
                countDirection(squaresArray[i].row - 1, squaresArray[i].col ,'stop')
                countDirection(squaresArray[i].row - 1, squaresArray[i].col - 1,'stop')
                countDirection(squaresArray[i].row, squaresArray[i].col - 1,'stop')
                countDirection(squaresArray[i].row + 1, squaresArray[i].col - 1,'stop')
                }
        }
}





//
//      Movement for marking the lines of sight
function
countDirection(row,col,direction){

if (findSquare(row,col) == undefined) {return}

// Here we ignore running into a kingso that the squares behind the king are also marked. 
if (findSquare(row,col).altPieceType != '' && findSquare(row,col).altPieceType != 'king'  ){
    if (currentTurnColor == 'white'){
        findSquare(row,col).blackCount++;
    }
    if (currentTurnColor == 'black'){
        findSquare(row,col).whiteCount++;
    }
    return 
} else {
  // FEEDBACK
  // this section of code is done in both the if part, and the else part. Could just pull it out of the if statement
  // entirely and only write it once.
        if (currentTurnColor == 'white'){
            findSquare(row,col).blackCount++;
        }
        if (currentTurnColor == 'black'){
            findSquare(row,col).whiteCount++;
        }
       
if (direction == 'stop'){return}
// FEEDBACK
// same thing with storing the offsets and only having to call countDirection once
if (direction == 'up'){
return countDirection(row +1, col,'up')}

 if (direction == 'down') {
     return countDirection(row - 1, col, 'down')
 }

 if (direction == 'right') {
     return countDirection(row, col + 1, 'right')
 }

 if (direction == 'left') {
     return countDirection(row, col - 1, 'left')
 }

 if (direction == 'up-left') {
     return countDirection(row + 1, col - 1, 'up-left')
 }

 if (direction == 'up-right') {
    return countDirection(row + 1, col + 1, 'up-right')
}

 if (direction == 'down-left') {
     return countDirection(row - 1, col - 1, 'down-left')
 }

 if (direction == 'down-right') {
     return countDirection(row - 1, col + 1, 'down-right')
 }
}
}


function
pieceChecker(clickedSquare, row, col,){
    // same thing with storing the offsets per peice and only having to call pieceDirection once

        if ('rook' == clickedSquare.pieceType && clickedSquare.pieceColor == currentTurnColor){
pieceDirection(row + 1,col, 'up')
pieceDirection(row -1, col,'down' )
pieceDirection(row , col - 1,'left' )      
pieceDirection(row , col + 1,'right' )          
}

if ('bishop' == clickedSquare.pieceType && clickedSquare.pieceColor == currentTurnColor){
    pieceDirection(row + 1,col + 1,'up-right')
    pieceDirection(row -1, col +1,'down-right' )
    pieceDirection(row +1 , col - 1,'up-left' )      
    pieceDirection(row -1 , col - 1,'down-left' )          
    }

    if ('queen' == clickedSquare.pieceType &&  clickedSquare.pieceColor == currentTurnColor){
        pieceDirection(row + 1,col + 1,'up-right')
        pieceDirection(row -1, col +1,'down-right' )
        pieceDirection(row +1 , col - 1,'up-left' )      
        pieceDirection(row -1 , col - 1,'down-left' )          
        pieceDirection(row + 1,col, 'up')
        pieceDirection(row -1, col,'down' )
        pieceDirection(row , col - 1,'left' )      
        pieceDirection(row , col + 1,'right' )         
        }
   
/*         if ('pawn' == clickedSquare.pieceType &&  clickedSquare.pieceColor == currentTurnColor){
            pieceDirection(row - 1,col + 1,'stop')
            pieceDirection(row -1, col -1 ,'stop')
            }
   
        if ('pawn' == clickedSquare.pieceType &&  clickedSquare.pieceColor == currentTurnColor){
            pieceDirection(row +1,col + 1, 'stop')
            pieceDirection(row +1, col -1, 'stop' )
            } */
       
        if ('knight' == clickedSquare.pieceType && clickedSquare.pieceColor == currentTurnColor){
            pieceDirection(row + 2, col + 1,'stop')
            pieceDirection(row+ 1, col + 2,'stop')
            pieceDirection(row - 1, col + 2,'stop')
            pieceDirection(row- 2, col + 1,'stop')
            pieceDirection(row - 2, col - 1,'stop')
            pieceDirection(row - 1, col - 2,'stop')
            pieceDirection(row+ 1, col - 2,'stop')
            pieceDirection(row + 2, col - 1,'stop')
            }

            if ('king' == clickedSquare.pieceType && clickedSquare.pieceColor == currentTurnColor){
                pieceDirection(row + 1, col ,'stop')
                pieceDirection(row+ 1, col + 1,'stop')
                pieceDirection(row , col + 1,'stop')
                pieceDirection(row- 1, col + 1,'stop')
                pieceDirection(row - 1, col ,'stop')
                pieceDirection(row - 1, col - 1,'stop')
                pieceDirection(row, col - 1,'stop')
                pieceDirection(row + 1, col - 1,'stop')
                }

                if ('pawn' == clickedSquare.pieceType && 'white' == currentTurnColor){ return wPawn(row,col)}
if ('pawn' == clickedSquare.pieceType && 'black' == currentTurnColor){ return bPawn(row,col)}
        }



//f
//      Movement of the rook down left
//
function
pieceDirection(row, col,  direction){
    // FEEDBACK
    // same again with multile calls to findSquare
 if (findSquare(row,col) == undefined) {return}
   if ( findSquare(row,col).pieceColor == currentTurnColor ){
        
        return
    }
   
    if (findSquare(row,col).pieceColor != '' && findSquare(row,col).pieceColor != currentTurnColor){
        findSquare(row,col).encounter = true;
        
        visualizePossibilities()
        return
   
    }  else {
       
       
    findSquare(row,col).possible = true ;
    
   
    visualizePossibilities()
 
if (direction == 'stop'){return}

// FEEDBACK
// can you guess what the feedback on this section is?
if (direction == 'up'){

return pieceDirection(row +1, col,'up')}

 if (direction == 'down') {
     return pieceDirection(row - 1, col, 'down')
 }

 if (direction == 'right') {
     return pieceDirection(row, col + 1, 'right')
 }

 if (direction == 'left') {
     return pieceDirection(row, col - 1, 'left')
 }

 if (direction == 'up-left') {
     return pieceDirection(row + 1, col - 1, 'up-left')
 }

 if (direction == 'up-right') {
    return pieceDirection(row + 1, col + 1, 'up-right')
}

 if (direction == 'down-left') {
     return pieceDirection(row - 1, col - 1, 'down-left')
 }

 if (direction == 'down-right') {
     return pieceDirection(row - 1, col + 1, 'down-right')
 }
   
}
}


var leftOfPawn;
var leftStartingSquare;
var leftFindTradeSquare;
var leftTradeSquare;
var rightOfPawn;
var rightStartingSquare;
var rightFindTradeSquare;
var rightTradeSquare;
var InitialDivSquare;
var aboveOrBelowInitalSquare;
var deparetureSquare;


function
bEnPassantLeft(row,col){
 
    leftOfPawn = findSquare(row,col - 1)
    leftStartingSquare = findSquare(row - 2,col - 1)
    leftFindTradeSquare = findSquare(row-1,col - 1)

    let bEnPassantArray = [ b4Square,c4Square,d4Square,e4Square,f4Square,g4Square,h4Square]

    for (let i = 0; i < bEnPassantArray.length; i++){
      // FEEDBACK
      // pretty big if statement with multiple parts. Could pull the different pars out into variables with descriptive
      // names, which would make the if statement easier to read
      //
      // const isBlackPawn = bEnPassantArray[i].pieceType == 'pawn' && bEnPassantArray[i].pieceColor == 'black';
      // const leftOfPawnIsWhitePawn = leftOfPawn.pieceType == 'pawn' && leftOfPawn.pieceColor == 'white';
      //   lastObject[0] == leftStartingSquare
      //
      // if (currentTurnColor == 'black' && isBlackPawn && leftOfPawnIsWhitePawn && lastObject[0] == leftStartingSquare){
      //
      // currentTurnColor == 'black' and lastObject[0] == leftStartingSquare also don't depend on anything inside the
      // for loop from what I can tell, so those could probably be pulled out into a separate if statement (use guard clause 👀)
      // to further simplify this if statement

        if (bEnPassantArray[i].pieceType == 'pawn' && bEnPassantArray[i].pieceColor == 'black' && currentTurnColor == 'black' && leftOfPawn.pieceType == 'pawn'
        && leftOfPawn.pieceColor == 'white' && lastObject[0] == leftStartingSquare){
          console.log('enPassant')
            leftTradeSquare = leftFindTradeSquare
           
        }

    }
}



function
bEnPassantRight(row,col){
    // FEEDBACK
    // same feedback as in bEnPassantLeft. Also this function is mostly the same as the other one, so you could probably,
    // find a way to combine them into one, maybe by passing the findSquare offsets in as arguments?
    rightOfPawn = findSquare(row,col + 1)
    rightStartingSquare = findSquare(row - 2,col + 1)
    rightFindTradeSquare = findSquare(row-1,col + 1)

    let bEnPassantArray = [ a4Square,b4Square,c4Square,d4Square,e4Square,f4Square,g4Square]

    for (let i = 0; i < bEnPassantArray.length; i++){
        if (bEnPassantArray[i].pieceType == 'pawn' && bEnPassantArray[i].pieceColor == 'black' && currentTurnColor == 'black' && rightOfPawn.pieceType == 'pawn'
        && rightOfPawn.pieceColor == 'white' && lastObject[0] == rightStartingSquare){
          console.log('enPassant')
            rightTradeSquare = rightFindTradeSquare
           
        }

    }
}

function
bEnPassantLeftMove(row,col){
   
         InitialDivSquare = findSquare(row,col);
        aboveOrBelowInitalSquare = findSquare(row+1,col);
        deparetureSquare = findSquare(row+1,col+1)
        InitialDivSquare.pieceType = 'pawn';
        InitialDivSquare.pieceColor = 'black';
        aboveOrBelowInitalSquare.pieceType = '';
        aboveOrBelowInitalSquare.pieceColor = '';
        deparetureSquare.pieceType = '';
        deparetureSquare.pieceColor = '';
        leftTradeSquare = ''; 

   
 


}


function
bEnPassantRightMove(row,col){
  // FEEDBACK
  // bEnPassantRightMove and bEnPassantLeftMove are identical except that one has +1 for deparetureSquare and the
  // other has -1. Can probably combine them and handle that one difference a different way, rather than duplicating 
  // the whole function. Even the ones for the white en passant moves can probably be combined all into one function
  // that probably takes in the differences (like the color and the left/right offset) as arguments.
         InitialDivSquare = findSquare(row,col);
        aboveOrBelowInitalSquare = findSquare(row+1,col);
        deparetureSquare = findSquare(row+1,col-1)
        InitialDivSquare.pieceType = 'pawn';
        InitialDivSquare.pieceColor = 'black';
        aboveOrBelowInitalSquare.pieceType = '';
        aboveOrBelowInitalSquare.pieceColor = '';
        deparetureSquare.pieceType = '';
        deparetureSquare.pieceColor = '';
        rightTradeSquare = ''; 



}

function
wEnPassantLeft(row,col){
    // FEEDBACK
    // same feedback as the other en passant functions
    leftOfPawn = findSquare(row,col - 1)
    leftStartingSquare = findSquare(row + 2,col - 1)
    leftFindTradeSquare = findSquare(row+1,col - 1)

    let wEnPassantArray = [ b5Square,c5Square,d5Square,e5Square,f5Square,g5Square,h5Square]

    for (let i = 0; i < wEnPassantArray.length; i++){
        if (wEnPassantArray[i].pieceType == 'pawn' && wEnPassantArray[i].pieceColor == 'white' && currentTurnColor == 'white' && leftOfPawn.pieceType == 'pawn'
        && leftOfPawn.pieceColor == 'black' && lastObject[0] == leftStartingSquare){
          console.log('enPassant')
            leftTradeSquare = leftFindTradeSquare
           
        }

    }
}

function
wEnPassantRight(row,col){
    // FEEDBACK
    // same feedback as the other en passant functions
    rightOfPawn = findSquare(row,col + 1)
    rightStartingSquare = findSquare(row + 2,col + 1)
    rightFindTradeSquare = findSquare(row+1,col + 1)

    let wEnPassantArray = [ a5Square,b5Square,c5Square,d5Square,e5Square,f5Square,g5Square]

    for (let i = 0; i < wEnPassantArray.length; i++){
        if (wEnPassantArray[i].pieceType == 'pawn' && wEnPassantArray[i].pieceColor == 'white' && currentTurnColor == 'white' && rightOfPawn.pieceType == 'pawn'
        && rightOfPawn.pieceColor == 'black' && lastObject[0] == rightStartingSquare){
          console.log('enPassant')
            rightTradeSquare = rightFindTradeSquare
           
        }

    }
}



function
wEnPassantRightMove(row,col){
   
         InitialDivSquare = findSquare(row,col);
        aboveOrBelowInitalSquare = findSquare(row-1,col);
        deparetureSquare = findSquare(row-1,col-1)
        InitialDivSquare.pieceType = 'pawn';
        InitialDivSquare.pieceColor = 'white';
        aboveOrBelowInitalSquare.pieceType = '';
        aboveOrBelowInitalSquare.pieceColor = '';
        deparetureSquare.pieceType = '';
        deparetureSquare.pieceColor = '';
        rightTradeSquare = ''; 


}


function
wEnPassantLeftMove(row,col){
   
         InitialDivSquare = findSquare(row,col);
        aboveOrBelowInitalSquare = findSquare(row-1,col);
        deparetureSquare = findSquare(row-1,col+1)
        InitialDivSquare.pieceType = 'pawn';
        InitialDivSquare.pieceColor = 'white';
        aboveOrBelowInitalSquare.pieceType = '';
        aboveOrBelowInitalSquare.pieceColor = '';
        deparetureSquare.pieceType = '';
        deparetureSquare.pieceColor = '';
        leftTradeSquare = ''; 
   

}
let wPawnArray = [ a2Square,b2Square,c2Square,d2Square,e2Square,f2Square,g2Square,h2Square]
//f
//      Movement possibilties of the white pawn.  
//
function
wPawn(row,col){

   
   
    let currentSquare = findSquare(row,col)
    let doubleJumpEncounterSquare = findSquare(row+1,col)
 
   
  // FEEDBACk
  // could simplify this using an array  and Array.includes() I think
  // if([b2Square,c2Square,d2Square,e2Square,f2Square,g2Square,h2Square].includes(currentSquare)){

   if (currentSquare == b5Square || currentSquare ==c5Square || currentSquare ==d5Square || currentSquare ==e5Square
    || currentSquare ==f5Square || currentSquare ==g5Square || currentSquare ==h5Square){wEnPassantLeft(row,col)}
 
    if (currentSquare == b5Square || currentSquare ==c5Square || currentSquare ==d5Square || currentSquare ==e5Square
        || currentSquare ==f5Square || currentSquare ==g5Square || currentSquare ==a5Square){wEnPassantRight(row,col)}
   


    for (let i = 0; i < wPawnArray.length; i++)

    if (  currentSquare == wPawnArray[i] && doubleJumpEncounterSquare.pieceColor == ''){
        wPawnUp(row+2,col)
    }

    wPawnUpRight(row+1, col+1)
    wPawnUpLeft(row+1, col-1)
    wPawnUp (row+1,col)


//f
//      Movement of the pawn up right
//
function
wPawnUpRight(row, col){

 let currentSquare = findSquare(row,col)
   

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
   
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
        return
   
    }
}

//f
//      Movement of the wPawn up left
//
function
wPawnUpLeft(row, col){

 let currentSquare = findSquare(row,col)
   

 if (currentSquare == undefined) {return}
   else if ( currentSquare.pieceColor == currentTurnColor || currentSquare == undefined){
        console.log(currentSquare)
     
        return
    }
   
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
     
        return
   
   
 
   
}
}


//f
//      Movement of the pawn down left
//
function
wPawnUp(row, col){

 let currentSquare = findSquare(row,col)
   

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor != '' ){
        console.log(currentSquare)
        return
    }
   
     else {
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
   
    visualizePossibilities()
    return
   
}
}

}


let pawnArray = [ a7Square,b7Square,c7Square,d7Square,e7Square,f7Square,g7Square,h7Square]

//f
//      Movement possibilties of the bPawn.  
//
function
bPawn(row,col){

    let doubleJumpEncounterSquare = findSquare(row-1,col)
   
    let currentSquare = findSquare(row,col)
    // FEEDBACK
    // again can simplify using an array and Array.includes()
    if (currentSquare == b4Square || currentSquare ==c4Square || currentSquare ==d4Square || currentSquare ==e4Square
        || currentSquare ==f4Square || currentSquare ==g4Square || currentSquare ==h4Square){bEnPassantLeft(row,col)}

        if (currentSquare == b4Square || currentSquare ==c4Square || currentSquare ==d4Square || currentSquare ==e4Square
            || currentSquare ==f4Square || currentSquare ==g4Square || currentSquare ==a4Square){bEnPassantRight(row,col)}

    for (let i = 0; i < pawnArray.length; i++)

    if ( currentSquare == pawnArray[i] && doubleJumpEncounterSquare.pieceColor == ''){
        bPawnUp(row-2,col)
    }
 

   



    bPawnUpRight(row-1, col+1)
    bPawnUpLeft(row-1, col-1)
    bPawnUp (row-1,col)


//f
//      Movement of the bPawn up right
//
function
bPawnUpRight(row, col){

 let currentSquare = findSquare(row,col)
   

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
   
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
        return
   
    }
}

//f
//      Movement of the bPawn up left
//
function
bPawnUpLeft(row, col){

 let currentSquare = findSquare(row,col)
   

 if (currentSquare == undefined) {return}
   else if ( currentSquare.pieceColor == currentTurnColor || currentSquare == undefined){
        console.log(currentSquare)
     
        return
    }
   
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
     
        return
      
}
}


//f
//      Movement of the black pawn up
//
function
bPawnUp(row, col){

 let currentSquare = findSquare(row,col)
   

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor != '' ){
        console.log(currentSquare)
        return
    }
   
     else {
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
   
    visualizePossibilities()
    return
   
}
}

}


function
clickingNonPossibleSquare(){
    resetPossibleAndEncounter();
    unvisualizePossibilities(); checkChecker();
    possibilityState = false;
}

function
clickingPossibleSquare(squareName){
    squareName.pieceType = currentObject.pieceType;
    squareName.pieceColor = currentObject.pieceColor;
    currentObject.pieceType = '';
    currentObject.pieceColor = '';    
    changeTurn()

}

function
clickingEncounterSquare(squareName){
    squareName.pieceType = currentObject.pieceType;
    squareName.pieceColor = currentObject.pieceColor;
     currentObject.pieceType = '';
     currentObject.pieceColor = '';
   

changeTurn()
}


for (let index = 0; index < divArray.length; index ++){

    //      Create and event listener that runs a function with the paremeter telling the function what square to work on.
    divArray[index].addEventListener('click',() => {mainEventFunction(squaresArray[index])})
}

function
mainEventFunction(currentSquare){

    if (rightTradeSquare == currentSquare && currentTurnColor == 'black'){  bEnPassantRightMove(currentSquare.row,currentSquare.col); ; changeTurn();  return}
    if (leftTradeSquare == currentSquare && currentTurnColor == 'black'){  bEnPassantLeftMove(currentSquare.row,currentSquare.col); changeTurn();  return}

    if (rightTradeSquare == currentSquare && currentTurnColor == 'white'){  wEnPassantRightMove(currentSquare.row,currentSquare.col);  changeTurn();  return}
    if (leftTradeSquare == currentSquare && currentTurnColor == 'white'){  wEnPassantLeftMove(currentSquare.row,currentSquare.col);  changeTurn();  return}

    if (true == possibilityState && false == currentSquare.possible && false == currentSquare.encounter) {
        clickingNonPossibleSquare()
        return
    }



    if (true == currentSquare.possible) {
        clickingPossibleSquare(currentSquare)
        return


    }
    if (true == currentSquare.encounter) {
        clickingEncounterSquare(currentSquare)
        return
    }



    
    //      This checks to make sure piece color and turn color are the same before running possibilities
  
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == currentSquare.pieceColor) {
        // The block within this if statement is exactly the same as the block within the next one (for black's turn)
        // except for the order of the pieceChecker call and possibilityState = true. If that ordering is not actually
        // important (which I think is the case) then you could remove the if checks entirely
        currentObject = currentSquare;
        pieceChecker(currentSquare, currentSquare.row, currentSquare.col);
        possibilityState = true;

        return

    } else if ('black' == currentSquare.pieceColor && 'black' == currentTurnColor) {
        currentObject = currentSquare;
        possibilityState = true;
        pieceChecker(currentSquare, currentSquare.row, currentSquare.col);

        return

    }
}


//      Castling

g1Div.addEventListener('click', () => {
  // FEEDBACK
  // another big if statement that could be broken down into well named variables, which would help with readability
    if (currentObject == e1Square && false == wKingMoved && false == h1RookMoved && f1Square.pieceType == '' && g1Square.pieceType == ''
        && 0 == g1Square.blackCount && 0 == f1Square.blackCount&& 0 == e1Square.blackCount) {
        e1Square.pieceType = '';
        h1Square.pieceType = '';
        e1Square.pieceColor = '';
        h1Square.pieceColor = '';

        f1Square.pieceType = 'rook';
        f1Square.pieceColor = 'white';
        g1Square.pieceType = 'king';
        g1Square.pieceColor = 'white'

        changeTurn()

        return
    }})


    g8Div.addEventListener('click', () => {

        if (currentObject == e8Square && false == bKingMoved && false == h8RookMoved && f8Square.pieceType == '' && g8Square.pieceType == ''
            && 0 == g8Square.whiteCount && 0 == f8Square.whiteCount && 0 == e8Square.whiteCount) {
            e8Square.pieceType = '';
            h8Square.pieceType = '';
            e8Square.pieceColor = '';
            h8Square.pieceColor = '';
    
            f8Square.pieceType = 'rook';
            f8Square.pieceColor = 'black';
            g8Square.pieceType = 'king';
            g8Square.pieceColor = 'black'
    
            changeTurn()
    
            return
        }})

        c1Div.addEventListener('click', () => {

            if (currentObject == e1Square && false == wKingMoved && false == a1RookMoved && b1Square.pieceType == '' && c1Square.pieceType == ''
                && 0 == c1Square.blackCount && 0 == e1Square.blackCount && 0 == d1Square.blackCount && d1Square.pieceType == '') {
                a1Square.pieceType = '';
  
                a1Square.pieceColor = '';
           
                e1Square.pieceColor = '';
                e1Square.pieceType = '';


               d1Square.pieceType = 'rook';
                d1Square.pieceColor = 'white';
                c1Square.pieceType = 'king';
                c1Square.pieceColor = 'white'
        
                changeTurn()
        
                return
            }})
        




            c8Div.addEventListener('click', () => {

                if (currentObject == e8Square  && false == bKingMoved && false == a8RookMoved && b8Square.pieceType == '' && c8Square.pieceType == ''
                    && 0 == c8Square.whiteCount && 0 == e8Square.whiteCount && 0 == d8Square.whiteCount && d8Square.pieceType == '') {
                    a8Square.pieceType = '';
                    b8Square.pieceType = '';
                    a8Square.pieceColor = '';
                    b8Square.pieceColor = '';
            
                   d8Square.pieceType = 'rook';
                    d8Square.pieceColor = 'black';
                    c8Square.pieceType = 'king';
                    c8Square.pieceColor = 'black'
            
                    changeTurn();
            
                    return
                }})
            
            