// Problem1
function problem1() {
    var output = []
    var inputArray = prompt("Enter your input").split(',')
    for (var i = 0; i < inputArray.length; i++) {
        var a, b, temp = 0;
        no = Number(inputArray[i])
        b = no;
        while (no > 0) {
            a = no % 10;
            no = parseInt(no / 10);
            temp = temp * 10 + a;
        }
        if (temp == b) {
            output.push(b)

        } else {
            function permut(string) {
                if (string.length < 2) return string;

                var permutations = [];
                for (var i = 0; i < string.length; i++) {
                    var char = string[i];

                    if (string.indexOf(char) != i)
                        continue;

                    var remainingString = string.slice(0, i) + string.slice(i + 1, string
                        .length);
                    for (var subPermutation of permut(remainingString))
                        permutations.push(char + subPermutation)
                }
                return permutations;
            }

            var allArray = permut(inputArray[i])
            var flag = 0;
            for (var j = 0; j < allArray.length; j++) {
                var a, b, temp = 0;
                no = Number(allArray[j])
                b = no;
                while (no > 0) {
                    a = no % 10;
                    no = parseInt(no / 10);
                    temp = temp * 10 + a;
                }
                if (temp == b) {
                    flag = 1;
                }
            }
            if (flag) {
                output.push(inputArray[i])
            }
        }

    }

    var finalOut = output.length > 0 ? output : "[]"
    console.log(finalOut)
}

// Problem2
function problem2() {
    var array = prompt("Enter your input").split(',')
    if (array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0],
        maxCount = 1;
    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    console.log(maxEl)
}
// Problem3
function problem3() {
    var directions = prompt("Enter your input").split(',')
    console.log(directions)
    var x = Number(directions[1]) - Number(directions[3])
    var y = Number(directions[0]) - Number(directions[2])

    console.log(`[${x},${y}]`)
}

// Problem4
function problem4() {
    Array.prototype.remove = function () {
        var what, a = arguments,
            L = a.length,
            ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };
    var input = prompt("Enter your input").split(',')
    var incompleteWord = input[0].split('')
    var completeWord = input[1].split('')
    var indexTrack = 0
    for (var i = 0; i < completeWord.length; i++) {
        var index = incompleteWord.indexOf(completeWord[i])
        if (index > -1) {
            if (index > 0) {
                indexTrack = 1;
            }
            incompleteWord.splice(index, 1)
        }
    }

    if (incompleteWord.length > 0 || indexTrack == 1) {
        console.log('false')
    } else {
        console.log('true')
    }
}

// Problem5
function problem5() {
    var diceInput = prompt("Enter your input").split('d')
    var initialVal, finalVal, finalNum
    var modVal = diceInput[1].slice(1, 3)
    if (diceInput[0] == "") {
        initialVal = eval(1 + modVal)
    } else {
        initialVal = eval(diceInput[0] + modVal)
    }

    if (diceInput[0] > 1) {
        finalVal = eval(diceInput[0] * 6 + modVal)
    } else {
        if (diceInput[0] == 0) {
            finalVal = eval(diceInput[0] + modVal)
        } else {
            finalVal = eval(diceInput[1])
        }
    }

    console.log('[' + initialVal + ',' + finalVal + ']')
}

// Problem6 
function problem6() {
    var names = prompt("Enter your input").split(',')

    function compare(a, b) {
        var splitA = a.split(" ");
        var splitB = b.split(" ");
        var lastA = splitA[splitA.length - 1];
        var lastB = splitB[splitB.length - 1];

        if (lastA < lastB) return -1;
        if (lastA > lastB) return 1;
        return 0;
    }
    var sorted = names.sort(compare);
    console.log(sorted)
}

// Problem7 
function problem7() {
    var email = prompt("Enter your input")
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase()) == true) {
        console.log(`valid email`)
    } else {
        console.log(`invalid email`)
    }
}

// Problem 8
function problem8() {
    var inputArray = prompt("Enter your input").split(',')
    var cuts = prompt("Enter your input").split(',')
    var outputArray = new Array;
    for (var i = 0; i < cuts.length; i++) {
        var intermediateArray = new Array;
        var flag = 0;
        for (var j = 0; j < inputArray.length; j++) {
            var intermediate = (Number(inputArray[j]) - Number(cuts[i]))
            if (intermediate == 0) {
                flag = 1
            } else {
                intermediateArray.push(intermediate)
            }
        }
        if (flag) {
            outputArray.push("Done")
        } else {
            outputArray.push(intermediateArray);
            inputArray = intermediateArray
            intermediateArray = []
        }
    }
    console.log(outputArray);

}