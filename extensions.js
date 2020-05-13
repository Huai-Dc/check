/**
 extensions is an Array and each item has such format:
 {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
 lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
 **/

/**
 * Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
 * @param extensions
 */
function sortExtensionsName(extensions) {
    // ASC
    return extensions.sort(sortExtensionsNameASC)
}

/**
 * sort By fitstName lastName ext ASC
 * @param a
 * @param b
 * @returns {number}
 */
function sortExtensionsNameASC(a, b) {
    let code = 0;
    compareChar(a, b, "firstName", (flagFirst) => {
        if (flagFirst !== 0) code = flagFirst
        else compareChar(a, b, "lastName", (flagLast) => {
            if (flagLast !== 0) code = flagLast
            else compareChar(a, b, "ext", (flagExt) => {
                code = flagExt;
            })
        })
    });

    return code
}

/**
 * compare charCode
 * @param objA
 * @param objB
 * @param keyStr
 * @param callback
 * @returns {number}
 */
function compareChar(objA, objB, keyStr, callback) {
    let aChar = objA[keyStr].charAt(0),
        bChar = objB[keyStr].charAt(0);
    let flag = 0;
    if (aChar > bChar || aChar.length === 0) {
        flag = 1;
    } else if (aChar < bChar || bChar.length === 0) {
        flag = -1;
    }

    if (typeof callback == "function") {
        callback(flag);
    }

    return flag
}


/**
 Question 2: sort extensions by extType follow these orders ASC
 DigitalUser < VirtualUser < FaxUser < AO < Dept.
 **/

/**
 * sort by extType
 * @param extensions
 * @returns {Array<TestRunner.Test>}
 */
function sortExtensionsByExtType(extensions) {
    let sortExtType = ["DigitalUser", "VirtualUser", "FaxUser", "AO", "Dept"];

    return extensions.sort((a, b) => {
        return sortExtType.indexOf(a.extType) - sortExtType.indexOf(b.extType);
    })
}

/**
 saleItems is an Array has each item has such format:
 {
	month: n, //[1-12],
	date: n, //[1-31],
	transationId: "xxx",
	salePrice: number
  }
 **/

/**
 Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
 [
 {quarter: 1, totalPrices: xxx, transactionNums: n},
 {....}
 ]
 **/
/**
 * sum by quarter
 * @param saleItems
 * @returns {[]}
 */
function sumByQuarter(saleItems) {
    let result = [];
    saleItems.forEach(((item) => {
        let currentQuarter = Math.floor((+item.month + 2) / 3);
        let rsIndex = currentQuarter - 1;
        if (!result[rsIndex]) {
            result[rsIndex] = {quarter: currentQuarter, totalPrices: 0, transactionNums: 0};
        }
        result[rsIndex]["totalPrices"] += parseFloat(item.salePrice) || 0;
        result[rsIndex]["transactionNums"] += 1;
    }));

    return result
}

/**
 Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
 [
 {quarter: 1, averagePrices: xxx, transactionNums: n},
 {....}
 ]
 **/
/**
 * average salePrice by quarter
 * @param saleItems
 * @returns {*[]}
 */
function averageByQuarter(saleItems) {
    let quarterSumArray = sumByQuarter(saleItems);

    quarterSumArray.forEach((quarter) => {
        quarter["averagePrices"] = quarter.totalPrices / 3;
        delete quarter.totalPrices;
    });

    return quarterSumArray
}

/**
 Question 5: please create a tool to generate Sequence
 Expected to be used like:
 var sequence1 = new Sequence();
 sequence1.next() --> return 1;
 sequence1.next() --> return 2;

 in another module:
 var sequence2 = new Sequence();
 sequence2.next() --> 3;
 sequence2.next() --> 4;
 **/
/**
 * generate sequence
 * @type {Sequence}
 */
const Sequence = (() => {
    let _num = 0;

    function Sequence() {}

    Sequence.prototype.next = () => {
        return ++_num
    };

    return Sequence;
})();


/**
 Question 6:
 AllKeys: 0-9;
 usedKeys: an array to store all used keys like [2,3,4];
 We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
 **/
/**
 * get unused keys
 * @param allKeys
 * @param usedKeys
 * @returns {*}
 */
function getUnUsedKeys(allKeys, usedKeys) {
    if(usedKeys.length === 0) return allKeys;
    return allKeys.filter(item => {
        return usedKeys.indexOf(item) === -1
    })
}


module.exports = {
    sortExtensionsName, sortExtensionsByExtType, sumByQuarter, averageByQuarter, getUnUsedKeys, Sequence
}
