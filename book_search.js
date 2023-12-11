/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    //for each book, check each sample of text in it for the searchTerm, if found record metadata and continues
    scannedTextObj.forEach(text =>{
        if(text.Content){
        text.Content.forEach(samples =>{
            if (samples.Text && samples.Text.includes(searchTerm)){
                const metaMatch = {
                    "ISBN": text.ISBN,
                    "Page": samples.Page,
                    "Line": samples.Line
                };
                result.Results.push(metaMatch);
            }
            });
        }
    });

    return result; 
}


/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
//Empty input 
const empty = []

//No matches - everySentence with "because"

//multiple searchterm matches with same line of text 
// "the"
const multiplePerText = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "The now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 1,
                "Line": 9,
                "Text": "ness was the then the profound; athe nd however good the the Canadian\'s the"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and The"
            } 
        ] 
    }
]

//Match is apart of a substring, not full word
//"The" - There
const substringMatch = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  There dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and The"
            } 
        ] 
    }
]

//Completly wrong input, different flags 
const randjson = [
    {
        "Thing1": 29382832,
        "Thing2": "letters and words",
        "Thing3": 29382832,
        "Thing4": "letters and words",
        "Thing5": 29382832,
        "Thing6": "letters and words",
        "Thing7": 29382832,
        "Thing8": "letters and words",
    }
]

//correct input json empty strings 
const emptyFields = [
    {
        "Title": "",
        "ISBN": "",
        "Content": [
            {}
        ] 
    }
]

//no ISBN but other stuff filled 
const noISBN = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

//Several books 
const multipleBook = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }, {
        "Title": "Second",
        "ISBN": "2780000528531",
        "Content": [
            {}
        ] 
    },  {
        "Title": "Third",
        "ISBN": "3780023528531",
        "Content": [
            {
                "Page": 1,
                "Line": 2,
                "Text": "now simply wents sada The on by her own momentum.  The dark-"
            },
            {
                "Page": 3,
                "Line": 4,
                "Text": "ness wasdjlsd skjlkdjslsdjadjskl ajsdk sld however good the Canadian\'s"
            },
            {
                "Page": 5,
                "Line": 6,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },  {
        "Title": "Four",
        "ISBN": "4780000528972",
        "Content": [
            {
                "Page": 1,
                "Line": 2,
                "Text": "now sildfl;ksdfk sdfl kjsdf lk jsdfl;k jada The on by her own momentum.  The dark-"
            },
            {
                "Page": 3,
                "Line": 4,
                "Text": "ness wasdjk salks Thesj then profound; and howevsf asas afweer good the Canadian\'s"
            },        {
                "Page": 5,
                "Line": 6,
                "Text": "ness wasdjk salks Thesj then profound;sdfsdfsfd dasda and however good the Canadian\'s"
            },        {
                "Page": 7,
                "Line": 8,
                "Text": "ness wasdjk salks Thesj then profosdfsdf sund; and however good the Canadian\'s"
            },
            {
                "Page": 9,
                "Line": 10,
                "Text": "eyes were, I asked mysa sdasd aelf how he had managed to see, and"
            } 
        ] 
    },   {
        "Title": "five",
        "ISBN": "5780000528972",
        "Content": [
            {
                "Page": 3,
                "Line": 4,
                "Text": "ness wasdjk salks Thesj then profound; and however good the Canadian\'s"
            },
            {
                "Page": 5,
                "Line": 6,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */
/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}



//Applicant Unit Tests:

//Empty searchterm - "" selects all lines 
const emptySearch = findSearchTermInBooks("", twentyLeaguesIn); 
if (emptySearch.Results.length == 3) {
    console.log("PASS: Empty search");
} else {
    console.log("FAIL: empty search");
    console.log("Expected: all items (3)");
    console.log("Received:", emptySearch);
}

//Empty Input json
const emptyJson = findSearchTermInBooks("", empty); 
if (emptyJson.Results.length == 0) {
    console.log("PASS: empty json input");
} else {
    console.log("FAIL: empty json input");
    console.log("Expected: empty return");
    console.log("Received:", emptyJson);
}

//several books 
const multibook = findSearchTermInBooks("the", multipleBook); 
if (multibook.Results.length == 6 && multibook.Results[0].Page == 31 ) {
    console.log("PASS: multiple books");
} else {
    console.log("FAIL: empty json input");
    console.log("Expected: empty return");
    console.log("Received:", multibook);
}

//search terms is found multiple times in text
const  multMatches = findSearchTermInBooks("the", multiplePerText); 
if (multMatches.Results.length == 1 && multMatches.Results[0].Page == 1 ) {
    console.log("PASS: multiple terms per line ");
} else {
    console.log("FAIL: multiple terms per line");
    console.log("Expected: empty return");
    console.log("Received:", multMatches);
}

//Match is apart of a substring, not full work
    //ex "The" should match "...There"
const  substrings = findSearchTermInBooks("The", substringMatch); 
if (substrings.Results.length == 2 && substrings.Results[0].Page == 31 ) {
    console.log("PASS: substring searches");
} else {
    console.log("FAIL: substring searches");
    console.log("Expected: empty return");
    console.log("Received:", substrings);
}

//Completly wrong json input, different flags 
const  unknownJSON = findSearchTermInBooks("The", randjson); 
if (unknownJSON.Results.length == 0 ) {
    console.log("PASS: unknown Json input");
} else {
    console.log("FAIL: unknown Json input");
    console.log("Expected: empty return");
    console.log("Received:", unknownJSON);
}

//no ISBN but other fields are
const  noIsmbReturn = findSearchTermInBooks("The", noISBN); 
if (noIsmbReturn.Results.length == 1 && noIsmbReturn.Results[0].ISBN == undefined) {
    console.log("PASS: no ISBN field");
} else {
    console.log("FAIL: no ISBN field");
    console.log("Expected: undefined ISBN");
    console.log("Received:", noIsmbReturn);
}

//correct input json empty strings 
const  emptyJsonReturn = findSearchTermInBooks("The", emptyFields); 
if (emptyJsonReturn.Results.length == 0 ) {
    console.log("PASS: empty json fields");
} else {
    console.log("FAIL: empty json fields");
    console.log("Expected: empty return");
    console.log("Received:", emptyJsonReturn);
}

//long searchterm 
const  longSearch = findSearchTermInBooks("The now simply went on by her own momentum.  The dark-", multiplePerText); 
if (longSearch.Results.length == 1 && longSearch.Results[0].Page == 31) {
    console.log("PASS: large search length");
} else {
    console.log("FAIL: large search length");
    console.log("Expected: single return");
    console.log("Received:", longSearch);
}
