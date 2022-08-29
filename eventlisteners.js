


//
//  Event Listener for a1 square
//
a1Div.addEventListener('click', () => {


    if (true == possibilityState && false == a1Square.possible && false == a1Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == a1Square.possible) {
        clickingPossibleSquare(a1Square)
        return


    }
    if (true == a1Square.encounter) {
        clickingEncounterSquare(a1Square)
        return
    }



    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == a1Square.pieceColor) {
        currentObject = a1Square;
        pieceChecker(a1Square, 0, 0);
        possibilityState = true;

        return

    } else if ('black' == a1Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = a1Square;
        possibilityState = true;
        pieceChecker(a1Square, 0, 0);

        return

    }

})





//
//  Event Listener for a2 square
//
a2Div.addEventListener('click', () => {


    if (true == possibilityState && false == a2Square.possible && false == a2Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == a2Square.possible) {
        a2Square.pieceType = currentObject.pieceType;
        a2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(a2Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == a2Square.encounter) {
        a2Square.pieceType = currentObject.pieceType;
        a2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(a2Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == a2Square.pieceColor) {
        currentObject = a2Square;
        pieceChecker(a2Square, 1, 0);
        possibilityState = true;

        return

    } else if ('black' == a2Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = a2Square;
        possibilityState = true;
        pieceChecker(a2Square, 1, 0);

        return

    }

})

//
//  Event Listener for a3 square
//
a3Div.addEventListener('click', () => {
   
    if (leftTradeSquare == a3Square && currentTurnColor == 'black'){  bEnPassantLeftMove(2,0); leftTradeSquare = ''; changeTurn();  return}


    if (true == possibilityState && false == a3Square.possible && false == a3Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == a3Square.possible) {
        a3Square.pieceType = currentObject.pieceType;
        a3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(a3Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == a3Square.encounter) {
        a3Square.pieceType = currentObject.pieceType;
        a3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(a3Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == a3Square.pieceColor) {
        currentObject = a3Square;
        pieceChecker(a3Square, 2, 0);
        possibilityState = true;

        return

    } else if ('black' == a3Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = a3Square;
        possibilityState = true;
        pieceChecker(a3Square, 2, 0);

        return

    }

})

//
//  Event Listener for a4 square
//
a4Div.addEventListener('click', () => {

    if (true == possibilityState && false == a4Square.possible && false == a4Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == a4Square.possible) {
        a4Square.pieceType = currentObject.pieceType;
        a4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(a4Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == a4Square.encounter) {
        a4Square.pieceType = currentObject.pieceType;
        a4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(a4Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == a4Square.pieceColor) {
        currentObject = a4Square;
        pieceChecker(a4Square, 3, 0);
        possibilityState = true;

        return

    } else if ('black' == a4Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = a4Square;
        possibilityState = true;
        pieceChecker(a4Square, 3, 0);

        return

    }

})

//
//  Event Listener for a5 square
//
a5Div.addEventListener('click', () => {

    if (true == possibilityState && false == a5Square.possible && false == a5Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == a5Square.possible) {
        a5Square.pieceType = currentObject.pieceType;
        a5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(a5Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == a5Square.encounter) {
        a5Square.pieceType = currentObject.pieceType;
        a5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(a5Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == a5Square.pieceColor) {
        currentObject = a5Square;
        pieceChecker(a5Square, 4, 0);
        possibilityState = true;

        return

    } else if ('black' == a5Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = a5Square;
        possibilityState = true;
        pieceChecker(a5Square, 4, 0);

        return

    }

})

//
//  Event Listener for a6 square
//
a6Div.addEventListener('click', () => {

    if (leftTradeSquare == a6Square && currentTurnColor == 'white'){  wEnPassantLeftMove(5,0); leftTradeSquare = ''; changeTurn();  return}

    if (true == possibilityState && false == a6Square.possible && false == a6Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == a6Square.possible) {
        a6Square.pieceType = currentObject.pieceType;
        a6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(a6Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == a6Square.encounter) {
        a6Square.pieceType = currentObject.pieceType;
        a6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(a6Square);
        console.log(currentObject)
        changeTurn()
        return
    }



    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == a6Square.pieceColor) {
        currentObject = a6Square;
        pieceChecker(a6Square, 5, 0);
        possibilityState = true;

        return

    } else if ('black' == a6Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = a6Square;
        possibilityState = true;
        pieceChecker(a6Square, 5, 0);

        return

    }

})

//
//  Event Listener for a7 square
//
a7Div.addEventListener('click', () => {

    if (true == possibilityState && false == a7Square.possible && false == a7Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == a7Square.possible) {
        a7Square.pieceType = currentObject.pieceType;
        a7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(a7Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == a7Square.encounter) {
        a7Square.pieceType = currentObject.pieceType;
        a7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(a7Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == a7Square.pieceColor) {
        currentObject = a7Square;
        pieceChecker(a7Square, 6, 0);
        possibilityState = true;

        return

    } else if ('black' == a7Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = a7Square;
        possibilityState = true;
        pieceChecker(a7Square, 6, 0);

        return

    }

})

//
//  Event Listener for a8 square
//
a8Div.addEventListener('click', () => {

    if (true == possibilityState && false == a8Square.possible && false == a8Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == a8Square.possible) {
        a8Square.pieceType = currentObject.pieceType;
        a8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(a8Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == a8Square.encounter) {
        a8Square.pieceType = currentObject.pieceType;
        a8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(a8Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == a8Square.pieceColor) {
        currentObject = a8Square;
        pieceChecker(a8Square, 7, 0);
        possibilityState = true;

        return

    } else if ('black' == a8Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = a8Square;
        possibilityState = true;
        pieceChecker(a8Square, 7, 0);

        return

    }

})





//
//  Event Listener for b1 square
//
b1Div.addEventListener('click', () => {


    if (true == possibilityState && false == b1Square.possible && false == b1Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == b1Square.possible) {
        b1Square.pieceType = currentObject.pieceType;
        b1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(b1Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == b1Square.encounter) {
        b1Square.pieceType = currentObject.pieceType;
        b1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(b1Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == b1Square.pieceColor) {
        currentObject = b1Square;
        pieceChecker(b1Square, 0, 1);
        possibilityState = true;

        return

    } else if ('black' == b1Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = b1Square;
        possibilityState = true;
        pieceChecker(b1Square, 0, 1);

        return

    }

})





//
//  Event Listener for b2 square
//
b2Div.addEventListener('click', () => {


    if (true == possibilityState && false == b2Square.possible && false == b2Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == b2Square.possible) {
        b2Square.pieceType = currentObject.pieceType;
        b2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(b2Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == b2Square.encounter) {
        b2Square.pieceType = currentObject.pieceType;
        b2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(b2Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == b2Square.pieceColor) {
        currentObject = b2Square;
        pieceChecker(b2Square, 1, 1);
        possibilityState = true;

        return

    } else if ('black' == b2Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = b2Square;
        possibilityState = true;
        pieceChecker(b2Square, 1, 1);

        return

    }

})

//
//  Event Listener for b3 square
//
b3Div.addEventListener('click', () => {

    if (rightTradeSquare == b3Square && currentTurnColor == 'black'){  bEnPassantRightMove(2,1); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == b3Square && currentTurnColor == 'black'){  bEnPassantLeftMove(2,1); leftTradeSquare = ''; changeTurn();  return}

    if (true == possibilityState && false == b3Square.possible && false == b3Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == b3Square.possible) {
        b3Square.pieceType = currentObject.pieceType;
        b3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(b3Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == b3Square.encounter) {
        b3Square.pieceType = currentObject.pieceType;
        b3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(b3Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == b3Square.pieceColor) {
        currentObject = b3Square;
        pieceChecker(b3Square, 2, 1);
        possibilityState = true;

        return

    } else if ('black' == b3Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = b3Square;
        possibilityState = true;
        pieceChecker(b3Square, 2, 1);

        return

    }

})

//
//  Event Listener for b4 square
//
b4Div.addEventListener('click', () => {

    if (true == possibilityState && false == b4Square.possible && false == b4Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == b4Square.possible) {
        b4Square.pieceType = currentObject.pieceType;
        b4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(b4Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == b4Square.encounter) {
        b4Square.pieceType = currentObject.pieceType;
        b4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(b4Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == b4Square.pieceColor) {
        currentObject = b4Square;
        pieceChecker(b4Square, 3, 1);
        possibilityState = true;

        return

    } else if ('black' == b4Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = b4Square;
        possibilityState = true;
        pieceChecker(b4Square, 3, 1);

        return

    }

})

//
//  Event Listener for b5 square
//
b5Div.addEventListener('click', () => {

    if (true == possibilityState && false == b5Square.possible && false == b5Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == b5Square.possible) {
        b5Square.pieceType = currentObject.pieceType;
        b5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(b5Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == b5Square.encounter) {
        b5Square.pieceType = currentObject.pieceType;
        b5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(b5Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == b5Square.pieceColor) {
        currentObject = b5Square;
        pieceChecker(b5Square, 4, 1);
        possibilityState = true;

        return

    } else if ('black' == b5Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = b5Square;
        possibilityState = true;
        pieceChecker(b5Square, 4, 1);

        return

    }

})

//
//  Event Listener for b6 square
//
b6Div.addEventListener('click', () => {

    if (rightTradeSquare == b6Square && currentTurnColor == 'white'){  wEnPassantRightMove(5,1); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == b6Square && currentTurnColor == 'white'){  wEnPassantLeftMove(5,1); leftTradeSquare = ''; changeTurn();  return}

    if (true == possibilityState && false == b6Square.possible && false == b6Square.encounter) {
        clickingNonPossibleSquare()
        return
    }


    if (true == b6Square.possible) {
        b6Square.pieceType = currentObject.pieceType;
        b6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(b6Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == b6Square.encounter) {
        b6Square.pieceType = currentObject.pieceType;
        b6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(b6Square);
        console.log(currentObject)
        changeTurn()
        return
    }

 

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == b6Square.pieceColor) {
        currentObject = b6Square;
        pieceChecker(b6Square, 5, 1);
        possibilityState = true;

        return

    } else if ('black' == b6Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = b6Square;
        possibilityState = true;
        pieceChecker(b6Square, 5, 1);

        return

    }

})

//
//  Event Listener for b7 square
//
b7Div.addEventListener('click', () => {

    if (true == possibilityState && false == b7Square.possible && false == b7Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == b7Square.possible) {
        b7Square.pieceType = currentObject.pieceType;
        b7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(b7Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == b7Square.encounter) {
        b7Square.pieceType = currentObject.pieceType;
        b7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(b7Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == b7Square.pieceColor) {
        currentObject = b7Square;
        pieceChecker(b7Square, 6, 1);
        possibilityState = true;

        return

    } else if ('black' == b7Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = b7Square;
        possibilityState = true;
        pieceChecker(b7Square, 6, 1);

        return

    }

})

//
//  Event Listener for b8 square
//
b8Div.addEventListener('click', () => {

    if (true == possibilityState && false == b8Square.possible && false == b8Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == b8Square.possible) {
        b8Square.pieceType = currentObject.pieceType;
        b8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(b8Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == b8Square.encounter) {
        b8Square.pieceType = currentObject.pieceType;
        b8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(b8Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == b8Square.pieceColor) {
        currentObject = b8Square;
        pieceChecker(b8Square, 7, 1);
        possibilityState = true;

        return

    } else if ('black' == b8Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = b8Square;
        possibilityState = true;
        pieceChecker(b8Square, 7, 1);

        return

    }

})






//
//  Event Listener for c1 square
//
c1Div.addEventListener('click', () => {




    if (true == possibilityState && false == c1Square.possible && false == c1Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == c1Square.possible) {
        c1Square.pieceType = currentObject.pieceType;
        c1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(c1Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == c1Square.encounter) {
        c1Square.pieceType = currentObject.pieceType;
        c1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(c1Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == c1Square.pieceColor) {
        currentObject = c1Square;
        pieceChecker(c1Square, 0, 2);
        possibilityState = true;

        return

    } else if ('black' == c1Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = c1Square;
        possibilityState = true;
        pieceChecker(c1Square, 0, 2);

        return

    }

})





//
//  Event Listener for c2 square
//
c2Div.addEventListener('click', () => {


    if (true == possibilityState && false == c2Square.possible && false == c2Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == c2Square.possible) {
        c2Square.pieceType = currentObject.pieceType;
        c2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(c2Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == c2Square.encounter) {
        c2Square.pieceType = currentObject.pieceType;
        c2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(c2Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == c2Square.pieceColor) {
        currentObject = c2Square;
        pieceChecker(c2Square, 1, 2);
        possibilityState = true;

        return

    } else if ('black' == c2Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = c2Square;
        possibilityState = true;
        pieceChecker(c2Square, 1, 2);

        return

    }

})

//
//  Event Listener for c3 square
//
c3Div.addEventListener('click', () => {

    if (rightTradeSquare == c3Square && currentTurnColor == 'black'){  bEnPassantRightMove(2,2); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == c3Square && currentTurnColor == 'black'){  bEnPassantLeftMove(2,2); leftTradeSquare = ''; changeTurn();  return}

    if (true == possibilityState && false == c3Square.possible && false == c3Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == c3Square.possible) {
        c3Square.pieceType = currentObject.pieceType;
        c3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(c3Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == c3Square.encounter) {
        c3Square.pieceType = currentObject.pieceType;
        c3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(c3Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == c3Square.pieceColor) {
        currentObject = c3Square;
        pieceChecker(c3Square, 2, 2);
        possibilityState = true;

        return

    } else if ('black' == c3Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = c3Square;
        possibilityState = true;
        pieceChecker(c3Square, 2, 2);

        return

    }

})

//
//  Event Listener for c4 square
//
c4Div.addEventListener('click', () => {

    if (true == possibilityState && false == c4Square.possible && false == c4Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == c4Square.possible) {
        c4Square.pieceType = currentObject.pieceType;
        c4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(c4Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == c4Square.encounter) {
        c4Square.pieceType = currentObject.pieceType;
        c4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(c4Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == c4Square.pieceColor) {
        currentObject = c4Square;
        pieceChecker(c4Square, 3, 2);
        possibilityState = true;

        return

    } else if ('black' == c4Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = c4Square;
        possibilityState = true;
        pieceChecker(c4Square, 3, 2);

        return

    }

})

//
//  Event Listener for c5 square
//
c5Div.addEventListener('click', () => {

    if (true == possibilityState && false == c5Square.possible && false == c5Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == c5Square.possible) {
        c5Square.pieceType = currentObject.pieceType;
        c5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(c5Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == c5Square.encounter) {
        c5Square.pieceType = currentObject.pieceType;
        c5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(c5Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == c5Square.pieceColor) {
        currentObject = c5Square;
        pieceChecker(c5Square, 4, 2);
        possibilityState = true;

        return

    } else if ('black' == c5Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = c5Square;
        possibilityState = true;
        pieceChecker(c5Square, 4, 2);

        return

    }

})

//
//  Event Listener for c6 square
//
c6Div.addEventListener('click', () => {
    if (rightTradeSquare == c6Square && currentTurnColor == 'white'){  wEnPassantRightMove(5,2); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == c6Square && currentTurnColor == 'white'){  wEnPassantLeftMove(5,2); leftTradeSquare = ''; changeTurn();  return}
    if (true == possibilityState && false == c6Square.possible && false == c6Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == c6Square.possible) {
        c6Square.pieceType = currentObject.pieceType;
        c6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(c6Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == c6Square.encounter) {
        c6Square.pieceType = currentObject.pieceType;
        c6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(c6Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == c6Square.pieceColor) {
        currentObject = c6Square;
        pieceChecker(c6Square, 5, 2);
        possibilityState = true;

        return

    } else if ('black' == c6Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = c6Square;
        possibilityState = true;
        pieceChecker(c6Square, 5, 2);

        return

    }

})

//
//  Event Listener for c7 square
//
c7Div.addEventListener('click', () => {

    if (true == possibilityState && false == c7Square.possible && false == c7Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == c7Square.possible) {
        c7Square.pieceType = currentObject.pieceType;
        c7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(c7Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == c7Square.encounter) {
        c7Square.pieceType = currentObject.pieceType;
        c7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(c7Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == c7Square.pieceColor) {
        currentObject = c7Square;
        pieceChecker(c7Square, 6, 2);
        possibilityState = true;

        return

    } else if ('black' == c7Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = c7Square;
        possibilityState = true;
        pieceChecker(c7Square, 6, 2);

        return

    }

})

//
//  Event Listener for c8 square
//
c8Div.addEventListener('click', () => {

    if (true == possibilityState && false == c8Square.possible && false == c8Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == c8Square.possible) {
        c8Square.pieceType = currentObject.pieceType;
        c8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(c8Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == c8Square.encounter) {
        c8Square.pieceType = currentObject.pieceType;
        c8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(c8Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == c8Square.pieceColor) {
        currentObject = c8Square;
        pieceChecker(c8Square, 7, 2);
        possibilityState = true;

        return

    } else if ('black' == c8Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = c8Square;
        possibilityState = true;
        pieceChecker(c8Square, 7, 2);

        return

    }

})


//
//  Event Listener for d1 square
//
d1Div.addEventListener('click', () => {

    if (true == possibilityState && false == d1Square.possible && false == d1Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == d1Square.possible) {
        d1Square.pieceType = currentObject.pieceType;
        d1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(d1Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == d1Square.encounter) {
        d1Square.pieceType = currentObject.pieceType;
        d1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(d1Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //

    else if ('white' == currentTurnColor && 'white' == d1Square.pieceColor) {
        currentObject = d1Square;
        pieceChecker(d1Square, 0, 3);
        possibilityState = true;

        return

    } else if ('black' == d1Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = d1Square;
        possibilityState = true;
        pieceChecker(d1Square, 0, 3);

        return

    }

})







//
//  Event Listener for d2 square
//
d2Div.addEventListener('click', () => {
    if (true == possibilityState && false == d2Square.possible && false == d2Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == d2Square.possible) {
        d2Square.pieceType = currentObject.pieceType;
        d2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(d2Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == d2Square.encounter) {
        d2Square.pieceType = currentObject.pieceType;
        d2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(d2Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }



    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return



    } else if ('white' == currentTurnColor && 'white' == d2Square.pieceColor) {
        currentObject = d2Square;
        pieceChecker(d2Square, 1, 3);
        possibilityState = true;

        return

    } else if ('black' == d2Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = d2Square;
        possibilityState = true;
        pieceChecker(d2Square, 1, 3);

        return

    }

})

//
//  Event Listener for d3 square
//
d3Div.addEventListener('click', () => {
    if (rightTradeSquare == d3Square && currentTurnColor == 'black'){  bEnPassantRightMove(2,3); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == d3Square && currentTurnColor == 'black'){  bEnPassantLeftMove(2,3); leftTradeSquare = ''; changeTurn();  return}

    if (true == possibilityState && false == d3Square.possible && false == d3Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == d3Square.possible) {
        d3Square.pieceType = currentObject.pieceType;
        d3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(d3Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == d3Square.encounter) {
        d3Square.pieceType = currentObject.pieceType;
        d3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(d3Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == d3Square.pieceColor) {
        currentObject = d3Square;
        pieceChecker(d3Square, 2, 3);
        possibilityState = true;

        return

    } else if ('black' == d3Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = d3Square;
        possibilityState = true;
        pieceChecker(d3Square, 2, 3);

        return

    }

})

//
//  Event Listener for d4 square
//
d4Div.addEventListener('click', () => {

    if (true == possibilityState && false == d4Square.possible && false == d4Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == d4Square.possible) {
        d4Square.pieceType = currentObject.pieceType;
        d4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(d4Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == d4Square.encounter) {
        d4Square.pieceType = currentObject.pieceType;
        d4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(d4Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == d4Square.pieceColor) {
        currentObject = d4Square;
        pieceChecker(d4Square, 3, 3);
        possibilityState = true;

        return

    } else if ('black' == d4Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = d4Square;
        possibilityState = true;
        pieceChecker(d4Square, 3, 3);

        return

    }

})

//
//  Event Listener for d5 square
//
d5Div.addEventListener('click', () => {
    if (true == possibilityState && false == d5Square.possible && false == d5Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == d5Square.possible) {
        d5Square.pieceType = currentObject.pieceType;
        d5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(d5Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == d5Square.encounter) {
        d5Square.pieceType = currentObject.pieceType;
        d5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(d5Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == d5Square.pieceColor) {
        currentObject = d5Square;
        pieceChecker(d5Square, 4, 3);
        possibilityState = true;

        return

    } else if ('black' == d5Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = d5Square;
        possibilityState = true;
        pieceChecker(d5Square, 4, 3);

        return

    }

})

//
//  Event Listener for d6 square
//
d6Div.addEventListener('click', () => {
    if (rightTradeSquare == d6Square && currentTurnColor == 'white'){  wEnPassantRightMove(5,3); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == d6Square && currentTurnColor == 'white'){  wEnPassantLeftMove(5,3); leftTradeSquare = ''; changeTurn();  return}

    if (true == possibilityState && false == d6Square.possible && false == d6Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == d6Square.possible) {
        d6Square.pieceType = currentObject.pieceType;
        d6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(d6Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == d6Square.encounter) {
        d6Square.pieceType = currentObject.pieceType;
        d6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(d6Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == d6Square.pieceColor) {
        currentObject = d6Square;
        pieceChecker(d6Square, 5, 3);
        possibilityState = true;

        return

    } else if ('black' == d6Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = d6Square;
        possibilityState = true;
        pieceChecker(d6Square, 5, 3);

        return

    }

})

//
//  Event Listener for d7 square
//
d7Div.addEventListener('click', () => {

    if (true == possibilityState && false == d7Square.possible && false == d7Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == d7Square.possible) {
        d7Square.pieceType = currentObject.pieceType;
        d7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(d7Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == d7Square.encounter) {
        d7Square.pieceType = currentObject.pieceType;
        d7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(d7Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == d7Square.pieceColor) {
        currentObject = d7Square;
        pieceChecker(d7Square, 6, 3);
        possibilityState = true;

        return

    } else if ('black' == d7Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = d7Square;
        possibilityState = true;
        pieceChecker(d7Square, 6, 3);

        return

    }

})

//
//  Event Listener for d8 square
//
d8Div.addEventListener('click', () => {


    if (true == possibilityState && false == d8Square.possible && false == d8Square.encounter) {
        clickingNonPossibleSquare()
        return
    }
    if (true == d8Square.possible) {
        d8Square.pieceType = currentObject.pieceType;
        d8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(d8Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == d8Square.encounter) {
        d8Square.pieceType = currentObject.pieceType;
        d8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(d8Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == d8Square.pieceColor) {
        currentObject = d8Square;
        pieceChecker(d8Square, 7, 3);
        possibilityState = true;

        return

    } else if ('black' == d8Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = d8Square;
        possibilityState = true;
        pieceChecker(d8Square, 7, 3);

        return

    }

})



//
//  Event Listener for e1 square
//
e1Div.addEventListener('click', () => {

    if (true == possibilityState && false == e1Square.possible && false == e1Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == e1Square.possible) {
        e1Square.pieceType = currentObject.pieceType;
        e1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(e1Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == e1Square.encounter) {
        e1Square.pieceType = currentObject.pieceType;
        e1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(e1Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //

    else if ('white' == currentTurnColor && 'white' == e1Square.pieceColor) {
        currentObject = e1Square;
        pieceChecker(e1Square, 0, 4);
        possibilityState = true;

        return

    } else if ('black' == e1Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = e1Square;
        possibilityState = true;
        pieceChecker(e1Square, 0, 4);

        return

    }

})







//
//  Event Listener for e2 square
//
e2Div.addEventListener('click', () => {
    if (true == possibilityState && false == e2Square.possible && false == e2Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == e2Square.possible) {
        e2Square.pieceType = currentObject.pieceType;
        e2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(e2Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == e2Square.encounter) {
        e2Square.pieceType = currentObject.pieceType;
        e2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(e2Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }



    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return



    } else if ('white' == currentTurnColor && 'white' == e2Square.pieceColor) {
        currentObject = e2Square;
        pieceChecker(e2Square, 1, 4);
        possibilityState = true;

        return

    } else if ('black' == e2Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = e2Square;
        possibilityState = true;
        pieceChecker(e2Square, 1, 4);

        return

    }

})

//
//  Event Listener for e3 square
//
e3Div.addEventListener('click', () => {
    if (rightTradeSquare == e3Square && currentTurnColor == 'black'){  bEnPassantRightMove(2,4); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == e3Square && currentTurnColor == 'black'){  bEnPassantLeftMove(2,4); leftTradeSquare = ''; changeTurn();  return}

    if (true == possibilityState && false == e3Square.possible && false == e3Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == e3Square.possible) {
        e3Square.pieceType = currentObject.pieceType;
        e3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(e3Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == e3Square.encounter) {
        e3Square.pieceType = currentObject.pieceType;
        e3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(e3Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == e3Square.pieceColor) {
        currentObject = e3Square;
        pieceChecker(e3Square, 2, 4);
        possibilityState = true;

        return

    } else if ('black' == e3Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = e3Square;
        possibilityState = true;
        pieceChecker(e3Square, 2, 4);

        return

    }

})

//
//  Event Listener for e4 square
//
e4Div.addEventListener('click', () => {
    if (true == possibilityState && false == e4Square.possible && false == e4Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == e4Square.possible) {
        e4Square.pieceType = currentObject.pieceType;
        e4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(e4Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == e4Square.encounter) {
        e4Square.pieceType = currentObject.pieceType;
        e4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(e4Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == e4Square.pieceColor) {
        currentObject = e4Square;
        pieceChecker(e4Square, 3, 4);
        possibilityState = true;

        return

    } else if ('black' == e4Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = e4Square;
        possibilityState = true;
        pieceChecker(e4Square, 3, 4);

        return

    }

})

//
//  Event Listener for e5 square
//
e5Div.addEventListener('click', () => {
    if (true == possibilityState && false == e5Square.possible && false == e5Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == e5Square.possible) {
        e5Square.pieceType = currentObject.pieceType;
        e5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(e5Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == e5Square.encounter) {
        e5Square.pieceType = currentObject.pieceType;
        e5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(e5Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == e5Square.pieceColor) {
        currentObject = e5Square;
        pieceChecker(e5Square, 4, 4);
        possibilityState = true;

        return

    } else if ('black' == e5Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = e5Square;
        possibilityState = true;
        pieceChecker(e5Square, 4, 4);

        return

    }

})

//
//  Event Listener for e6 square
//
e6Div.addEventListener('click', () => {
    if (rightTradeSquare == e6Square && currentTurnColor == 'white'){  wEnPassantRightMove(5,4); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == e6Square && currentTurnColor == 'white'){  wEnPassantLeftMove(5,4); leftTradeSquare = ''; changeTurn();  return}
    if (true == possibilityState && false == e6Square.possible && false == e6Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == e6Square.possible) {
        e6Square.pieceType = currentObject.pieceType;
        e6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(e6Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == e6Square.encounter) {
        e6Square.pieceType = currentObject.pieceType;
        e6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(e6Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == e6Square.pieceColor) {
        currentObject = e6Square;
        pieceChecker(e6Square, 5, 4);
        possibilityState = true;

        return

    } else if ('black' == e6Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = e6Square;
        possibilityState = true;
        pieceChecker(e6Square, 5, 4);

        return

    }

})

//
//  Event Listener for e7 square
//
e7Div.addEventListener('click', () => {

    if (true == possibilityState && false == e7Square.possible && false == e7Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == e7Square.possible) {
        e7Square.pieceType = currentObject.pieceType;
        e7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(e7Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == e7Square.encounter) {
        e7Square.pieceType = currentObject.pieceType;
        e7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(e7Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == e7Square.pieceColor) {
        currentObject = e7Square;
        pieceChecker(e7Square, 6, 4);
        possibilityState = true;

        return

    } else if ('black' == e7Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = e7Square;
        possibilityState = true;
        pieceChecker(e7Square, 6, 4);

        return

    }

})

//
//  Event Listener for e8 square
//
e8Div.addEventListener('click', () => {


    if (true == possibilityState && false == e8Square.possible && false == e8Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == e8Square.possible) {
        e8Square.pieceType = currentObject.pieceType;
        e8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(e8Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == e8Square.encounter) {
        e8Square.pieceType = currentObject.pieceType;
        e8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(e8Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == e8Square.pieceColor) {
        currentObject = e8Square;
        pieceChecker(e8Square, 7, 4);
        possibilityState = true;

        return

    } else if ('black' == e8Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = e8Square;
        possibilityState = true;
        pieceChecker(e8Square, 7, 4);

        return

    }

})




//
//  Event Listener for f1 square
//
f1Div.addEventListener('click', () => {

    if (true == possibilityState && false == f1Square.possible && false == f1Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == f1Square.possible) {
        f1Square.pieceType = currentObject.pieceType;
        f1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(f1Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == f1Square.encounter) {
        f1Square.pieceType = currentObject.pieceType;
        f1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(f1Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //

    else if ('white' == currentTurnColor && 'white' == f1Square.pieceColor) {
        currentObject = f1Square;
        pieceChecker(f1Square, 0, 5);
        possibilityState = true;

        return

    } else if ('black' == f1Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = f1Square;
        possibilityState = true;
        pieceChecker(f1Square, 0, 5);

        return

    }

})







//
//  Event Listener for f2 square
//
f2Div.addEventListener('click', () => {
    if (true == possibilityState && false == f2Square.possible && false == f2Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == f2Square.possible) {
        f2Square.pieceType = currentObject.pieceType;
        f2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(f2Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == f2Square.encounter) {
        f2Square.pieceType = currentObject.pieceType;
        f2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(f2Square);
        console.log(currentObject)
        changeTurn()
        return
    }




    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return



    } else if ('white' == currentTurnColor && 'white' == f2Square.pieceColor) {
        currentObject = f2Square;
        pieceChecker(f2Square, 1, 5);
        possibilityState = true;

        return

    } else if ('black' == f2Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = f2Square;
        possibilityState = true;
        pieceChecker(f2Square, 1, 5);

        return

    }

})

//
//  Event Listener for f3 square
//
f3Div.addEventListener('click', () => {
    if (rightTradeSquare == f3Square && currentTurnColor == 'black'){  bEnPassantRightMove(2,5); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == f3Square && currentTurnColor == 'black'){  bEnPassantLeftMove(2,5); leftTradeSquare = ''; changeTurn();  return}

    if (true == possibilityState && false == f3Square.possible && false == f3Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == f3Square.possible) {
        f3Square.pieceType = currentObject.pieceType;
        f3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(f3Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == f3Square.encounter) {
        f3Square.pieceType = currentObject.pieceType;
        f3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(f3Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == f3Square.pieceColor) {
        currentObject = f3Square;
        pieceChecker(f3Square, 2, 5);
        possibilityState = true;

        return

    } else if ('black' == f3Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = f3Square;
        possibilityState = true;
        pieceChecker(f3Square, 2, 5);

        return

    }

})

//
//  Event Listener for f4 square
//
f4Div.addEventListener('click', () => {
    if (true == possibilityState && false == f4Square.possible && false == f4Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == f4Square.possible) {
        f4Square.pieceType = currentObject.pieceType;
        f4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(f4Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == f4Square.encounter) {
        f4Square.pieceType = currentObject.pieceType;
        f4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(f4Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == f4Square.pieceColor) {
        currentObject = f4Square;
        pieceChecker(f4Square, 3, 5);
        possibilityState = true;

        return

    } else if ('black' == f4Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = f4Square;
        possibilityState = true;
        pieceChecker(f4Square, 3, 5);

        return

    }

})

//
//  Event Listener for f5 square
//
f5Div.addEventListener('click', () => {
    if (true == possibilityState && false == f5Square.possible && false == f5Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == f5Square.possible) {
        f5Square.pieceType = currentObject.pieceType;
        f5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(f5Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == f5Square.encounter) {
        f5Square.pieceType = currentObject.pieceType;
        f5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(f5Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == f5Square.pieceColor) {
        currentObject = f5Square;
        pieceChecker(f5Square, 4, 5);
        possibilityState = true;

        return

    } else if ('black' == f5Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = f5Square;
        possibilityState = true;
        pieceChecker(f5Square, 4, 5);

        return

    }

})

//
//  Event Listener for f6 square
//
f6Div.addEventListener('click', () => {
    if (rightTradeSquare == f6Square && currentTurnColor == 'white'){  wEnPassantRightMove(5,5); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == f6Square && currentTurnColor == 'white'){  wEnPassantLeftMove(5,5); leftTradeSquare = ''; changeTurn();  return}
    if (true == possibilityState && false == f6Square.possible && false == f6Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == f6Square.possible) {
        f6Square.pieceType = currentObject.pieceType;
        f6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(f6Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == f6Square.encounter) {
        f6Square.pieceType = currentObject.pieceType;
        f6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(f6Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == f6Square.pieceColor) {
        currentObject = f6Square;
        pieceChecker(f6Square, 5, 5);
        possibilityState = true;

        return

    } else if ('black' == f6Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = f6Square;
        possibilityState = true;
        pieceChecker(f6Square, 5, 5);

        return

    }

})

//
//  Event Listener for f7 square
//
f7Div.addEventListener('click', () => {

    if (true == possibilityState && false == f7Square.possible && false == f7Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == f7Square.possible) {
        f7Square.pieceType = currentObject.pieceType;
        f7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(f7Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == f7Square.encounter) {
        f7Square.pieceType = currentObject.pieceType;
        f7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(f7Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == f7Square.pieceColor) {
        currentObject = f7Square;
        pieceChecker(f7Square, 6, 5);
        possibilityState = true;

        return

    } else if ('black' == f7Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = f7Square;
        possibilityState = true;
        pieceChecker(f7Square, 6, 5);

        return

    }

})

//
//  Event Listener for f8 square
//
f8Div.addEventListener('click', () => {


    if (true == possibilityState && false == f8Square.possible && false == f8Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == f8Square.possible) {
        f8Square.pieceType = currentObject.pieceType;
        f8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(f8Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == f8Square.encounter) {
        f8Square.pieceType = currentObject.pieceType;
        f8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(f8Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == f8Square.pieceColor) {
        currentObject = f8Square;
        pieceChecker(f8Square, 7, 5);
        possibilityState = true;

        return

    } else if ('black' == f8Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = f8Square;
        possibilityState = true;
        pieceChecker(f8Square, 7, 5);

        return

    }

})





//
//  Event Listener for g1 square
//

    if (true == possibilityState && false == g1Square.possible && false == g1Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == g1Square.possible) {
        g1Square.pieceType = currentObject.pieceType;
        g1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(g1Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == g1Square.encounter) {
        g1Square.pieceType = currentObject.pieceType;
        g1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(g1Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //

    else if ('white' == currentTurnColor && 'white' == g1Square.pieceColor) {
        currentObject = g1Square;
        pieceChecker(g1Square, 0, 6);
        possibilityState = true;

        return

    } else if ('black' == g1Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = g1Square;
        possibilityState = true;
        pieceChecker(g1Square, 0, 6);

        return

    }

})







//
//  Event Listener for g2 square
//
g2Div.addEventListener('click', () => {
    if (true == possibilityState && false == g2Square.possible && false == g2Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == g2Square.possible) {
        g2Square.pieceType = currentObject.pieceType;
        g2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(g2Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == g2Square.encounter) {
        g2Square.pieceType = currentObject.pieceType;
        g2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(g2Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }



    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return



    } else if ('white' == currentTurnColor && 'white' == g2Square.pieceColor) {
        currentObject = g2Square;
        pieceChecker(g2Square, 1, 6);
        possibilityState = true;

        return

    } else if ('black' == g2Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = g2Square;
        possibilityState = true;
        pieceChecker(g2Square, 1, 6);

        return

    }

})

//
//  Event Listener for g3 square
//
g3Div.addEventListener('click', () => {
    if (rightTradeSquare == g3Square && currentTurnColor == 'black'){  bEnPassantRightMove(2,6); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == g3Square && currentTurnColor == 'black'){  bEnPassantLeftMove(2,6); leftTradeSquare = ''; changeTurn();  return}

    if (true == possibilityState && false == g3Square.possible && false == g3Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == g3Square.possible) {
        g3Square.pieceType = currentObject.pieceType;
        g3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(g3Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == g3Square.encounter) {
        g3Square.pieceType = currentObject.pieceType;
        g3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(g3Square);
        console.log(currentObject)
        changeTurn()
        return
    }




    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == g3Square.pieceColor) {
        currentObject = g3Square;
        pieceChecker(g3Square, 2, 6);
        possibilityState = true;

        return

    } else if ('black' == g3Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = g3Square;
        possibilityState = true;
        pieceChecker(g3Square, 2, 6);

        return

    }

})

//
//  Event Listener for g4 square
//
g4Div.addEventListener('click', () => {
    if (true == possibilityState && false == g4Square.possible && false == g4Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == g4Square.possible) {
        g4Square.pieceType = currentObject.pieceType;
        g4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(g4Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == g4Square.encounter) {
        g4Square.pieceType = currentObject.pieceType;
        g4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(g4Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == g4Square.pieceColor) {
        currentObject = g4Square;
        pieceChecker(g4Square, 3, 6);
        possibilityState = true;

        return

    } else if ('black' == g4Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = g4Square;
        possibilityState = true;
        pieceChecker(g4Square, 3, 6);

        return

    }

})

//
//  Event Listener for g5 square
//
g5Div.addEventListener('click', () => {
    if (true == possibilityState && false == g5Square.possible && false == g5Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == g5Square.possible) {
        g5Square.pieceType = currentObject.pieceType;
        g5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(g5Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == g5Square.encounter) {
        g5Square.pieceType = currentObject.pieceType;
        g5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(g5Square);
        console.log(currentObject)
        changeTurn()
        return
    }


    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == g5Square.pieceColor) {
        currentObject = g5Square;
        pieceChecker(g5Square, 4, 6);
        possibilityState = true;

        return

    } else if ('black' == g5Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = g5Square;
        possibilityState = true;
        pieceChecker(g5Square, 4, 6);

        return

    }

})

//
//  Event Listener for g6 square
//
g6Div.addEventListener('click', () => {
    if (rightTradeSquare == g6Square && currentTurnColor == 'white'){  wEnPassantRightMove(5,6); rightTradeSquare = ''; changeTurn();  return}
    if (leftTradeSquare == g6Square && currentTurnColor == 'white'){  wEnPassantLeftMove(5,6); leftTradeSquare = ''; changeTurn();  return}
    if (true == possibilityState && false == g6Square.possible && false == g6Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == g6Square.possible) {
        g6Square.pieceType = currentObject.pieceType;
        g6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(g6Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == g6Square.encounter) {
        g6Square.pieceType = currentObject.pieceType;
        g6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(g6Square);
        console.log(currentObject)
        changeTurn()
        return
    }



    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == g6Square.pieceColor) {
        currentObject = g6Square;
        pieceChecker(g6Square, 5, 6);
        possibilityState = true;

        return

    } else if ('black' == g6Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = g6Square;
        possibilityState = true;
        pieceChecker(g6Square, 5, 6);

        return

    }

})

//
//  Event Listener for g7 square
//
g7Div.addEventListener('click', () => {

    if (true == possibilityState && false == g7Square.possible && false == g7Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == g7Square.possible) {
        g7Square.pieceType = currentObject.pieceType;
        g7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(g7Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == g7Square.encounter) {
        g7Square.pieceType = currentObject.pieceType;
        g7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(g7Square);
        console.log(currentObject)
        changeTurn()
        return
    }



    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == g7Square.pieceColor) {
        currentObject = g7Square;
        pieceChecker(g7Square, 6, 6);
        possibilityState = true;

        return

    } else if ('black' == g7Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = g7Square;
        possibilityState = true;
        pieceChecker(g7Square, 6, 6);

        return

    }

})

//
//  Event Listener for g8 square
//
g8Div.addEventListener('click', () => {


    if (true == possibilityState && false == g8Square.possible && false == g8Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == g8Square.possible) {
        g8Square.pieceType = currentObject.pieceType;
        g8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(g8Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == g8Square.encounter) {
        g8Square.pieceType = currentObject.pieceType;
        g8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(g8Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == g8Square.pieceColor) {
        currentObject = g8Square;
        pieceChecker(g8Square, 7, 6);
        possibilityState = true;

        return

    } else if ('black' == g8Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = g8Square;
        possibilityState = true;
        pieceChecker(g8Square, 7, 6);

        return

    }

})



//
//  Event Listener for h1 square
//
h1Div.addEventListener('click', () => {

    if (true == possibilityState && false == h1Square.possible && false == h1Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == h1Square.possible) {
        h1Square.pieceType = currentObject.pieceType;
        h1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(h1Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == h1Square.encounter) {
        h1Square.pieceType = currentObject.pieceType;
        h1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(h1Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //

    else if ('white' == currentTurnColor && 'white' == h1Square.pieceColor) {
        currentObject = h1Square;
        pieceChecker(h1Square, 0, 7);
        possibilityState = true;

        return

    } else if ('black' == h1Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = h1Square;
        possibilityState = true;
        pieceChecker(h1Square, 0, 7);

        return

    }

})







//
//  Event Listener for h2 square
//
h2Div.addEventListener('click', () => {
    if (true == possibilityState && false == h2Square.possible && false == h2Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == h2Square.possible) {
        h2Square.pieceType = currentObject.pieceType;
        h2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(h2Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == h2Square.encounter) {
        h2Square.pieceType = currentObject.pieceType;
        h2Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(h2Square);
        console.log(currentObject)
        changeTurn()
        return
    }





    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return



    } else if ('white' == currentTurnColor && 'white' == h2Square.pieceColor) {
        currentObject = h2Square;
        pieceChecker(h2Square, 1, 7);
        possibilityState = true;

        return

    } else if ('black' == h2Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = h2Square;
        possibilityState = true;
        pieceChecker(h2Square, 1, 7);

        return

    }

})

//
//  Event Listener for h3 square
//
h3Div.addEventListener('click', () => {
    if (rightTradeSquare == h3Square && currentTurnColor == 'black'){  bEnPassantRightMove(2,7); rightTradeSquare = ''; changeTurn();  return}
 

    if (true == possibilityState && false == h3Square.possible && false == h3Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == h3Square.possible) {
        h3Square.pieceType = currentObject.pieceType;
        h3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(h3Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == h3Square.encounter) {
        h3Square.pieceType = currentObject.pieceType;
        h3Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(h3Square);
        console.log(currentObject)
        changeTurn()
        return
    }



    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == h3Square.pieceColor) {
        currentObject = h3Square;
        pieceChecker(h3Square, 2, 7);
        possibilityState = true;

        return

    } else if ('black' == h3Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = h3Square;
        possibilityState = true;
        pieceChecker(h3Square, 2, 7);

        return

    }

})

//
//  Event Listener for h4 square
//
h4Div.addEventListener('click', () => {
    if (true == possibilityState && false == h4Square.possible && false == h4Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == h4Square.possible) {
        h4Square.pieceType = currentObject.pieceType;
        h4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(h4Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == h4Square.encounter) {
        h4Square.pieceType = currentObject.pieceType;
        h4Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(h4Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == h4Square.pieceColor) {
        currentObject = h4Square;
        pieceChecker(h4Square, 3, 7);
        possibilityState = true;

        return

    } else if ('black' == h4Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = h4Square;
        possibilityState = true;
        pieceChecker(h4Square, 3, 7);

        return

    }

})

//
//  Event Listener for h5 square
//
h5Div.addEventListener('click', () => {
    if (true == possibilityState && false == h5Square.possible && false == h5Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == h5Square.possible) {
        h5Square.pieceType = currentObject.pieceType;
        h5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(h5Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == h5Square.encounter) {
        h5Square.pieceType = currentObject.pieceType;
        h5Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(h5Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == h5Square.pieceColor) {
        currentObject = h5Square;
        pieceChecker(h5Square, 4, 7);
        possibilityState = true;

        return

    } else if ('black' == h5Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = h5Square;
        possibilityState = true;
        pieceChecker(h5Square, 4, 7);

        return

    }

})

//
//  Event Listener for h6 square
//
h6Div.addEventListener('click', () => {
    if (rightTradeSquare == h6Square && currentTurnColor == 'white'){  wEnPassantRightMove(5,7); rightTradeSquare = ''; changeTurn();  return}
    if (true == possibilityState && false == h6Square.possible && false == h6Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == h6Square.possible) {
        h6Square.pieceType = currentObject.pieceType;
        h6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(h6Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == h6Square.encounter) {
        h6Square.pieceType = currentObject.pieceType;
        h6Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(h6Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == h6Square.pieceColor) {
        currentObject = h6Square;
        pieceChecker(h6Square, 5, 7);
        possibilityState = true;

        return

    } else if ('black' == h6Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = h6Square;
        possibilityState = true;
        pieceChecker(h6Square, 5, 7);

        return

    }

})

//
//  Event Listener for h7 square
//
h7Div.addEventListener('click', () => {

    if (true == possibilityState && false == h7Square.possible && false == h7Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == h7Square.possible) {
        h7Square.pieceType = currentObject.pieceType;
        h7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(h7Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == h7Square.encounter) {
        h7Square.pieceType = currentObject.pieceType;
        h7Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(h7Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == h7Square.pieceColor) {
        currentObject = h7Square;
        pieceChecker(h7Square, 6, 7);
        possibilityState = true;

        return

    } else if ('black' == h7Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = h7Square;
        possibilityState = true;
        pieceChecker(h7Square, 6, 7);

        return

    }

})

//
//  Event Listener for h8 square
//
h8Div.addEventListener('click', () => {


    if (true == possibilityState && false == h8Square.possible && false == h8Square.encounter) {
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
    }
    if (true == h8Square.possible) {
        h8Square.pieceType = currentObject.pieceType;
        h8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';
        console.log(h8Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == h8Square.encounter) {
        h8Square.pieceType = currentObject.pieceType;
        h8Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = '';
        currentObject.pieceColor = '';

        console.log(h8Square);
        console.log(currentObject)
        changeTurn()
        return
    }

    if (true == possibilityState) {
        return
    }
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState) {
        return

    } else if ('white' == currentTurnColor && 'white' == h8Square.pieceColor) {
        currentObject = h8Square;
        pieceChecker(h8Square, 7, 7);
        possibilityState = true;

        return

    } else if ('black' == h8Square.pieceColor && 'black' == currentTurnColor) {
        currentObject = h8Square;
        possibilityState = true;
        pieceChecker(h8Square, 7, 7);

        return

    }

})