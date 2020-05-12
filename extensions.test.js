const {sortExtensionsName, sortExtensionsByExtType, sumByQuarter, averageByQuarter, getUnUsedKeys, Sequence} = require('./extensions')

/**
 * Q1&Q2 test data
 * @type {({ext: string, firstName: string, lastName: string, extType: string}|{ext: string, firstName: string, lastName: string, extType: string}|{ext: string, firstName: string, lastName: string, extType: string}|{ext: string, firstName: string, lastName: string, extType: string}|{ext: string, firstName: string, lastName: string, extType: string})[]}
 */
let extensionArray = [
    {firstName: 'san', lastName: 'Zhang', ext: 'txt', extType: 'DigitalUser'},
    {firstName: 'wu', lastName: 'Wang', ext: 'ppt', extType: 'Dept'},
    {firstName: 'si', lastName: 'Li', ext: 'doc', extType: 'VirtualUser'},
    {firstName: 'yun', lastName: 'ma', ext: 'ppt', extType: 'AO'},
    {firstName: 'shen', lastName: 'Li', ext: 'xml', extType: 'FaxUser'},
    {firstName: 'Jack', lastName: 'Jones', ext: 'xml', extType: 'FaxUser'},
]

// Q1 单元测试 按照 firstName lastName Ext 升序
test("sortExtensionsName by firstName + lastName + ext ASC", () => {
    expect(sortExtensionsName(extensionArray)).toStrictEqual([
        {firstName: 'Jack', lastName: 'Jones', ext: 'xml', extType: 'FaxUser'},
        {firstName: "si", lastName: "Li", ext: "doc", extType: "VirtualUser"},
        {firstName: "shen", lastName: "Li", ext: "xml", extType: "FaxUser"},
        {firstName: "san", lastName: "Zhang", ext: "txt", extType: "DigitalUser"},
        {firstName: "wu", lastName: "Wang", ext: "ppt", extType: "Dept"},
        {firstName: "yun", lastName: "ma", ext: "ppt", extType: "AO"}
    ])
})

// Q2
test("sort extensions by given orders ASC", () => {
    expect(sortExtensionsByExtType(extensionArray)).toStrictEqual(
        [{firstName: "san", lastName: "Zhang", ext: "txt", extType: "DigitalUser"},
            {firstName: "si", lastName: "Li", ext: "doc", extType: "VirtualUser"},
            {firstName: "shen", lastName: "Li", ext: "xml", extType: "FaxUser"},
            {firstName: 'Jack', lastName: 'Jones', ext: 'xml', extType: 'FaxUser'},
            {firstName: "yun", lastName: "ma", ext: "ppt", extType: "AO"},
            {firstName: "wu", lastName: "Wang", ext: "ppt", extType: "Dept"},
        ]
    )
})
// Q3 & Q4 test data
let saleItems = [
    {transationId: "1", month: 1, date: '1', salePrice: '1000'},
    {transationId: "2", month: 2, date: '1', salePrice: '2000'},
    {transationId: "3", month: 3, date: '1', salePrice: '3000'},
    {transationId: "4", month: 4, date: '1', salePrice: '4000'},
    {transationId: "5", month: 5, date: '1', salePrice: '5000'},
    {transationId: "6", month: 6, date: '1', salePrice: '6000'},
    {transationId: "7", month: 7, date: '1', salePrice: '7000'},
    {transationId: "8", month: 8, date: '1', salePrice: '8000'},
    {transationId: "9", month: 9, date: '1', salePrice: '9000'},
    {transationId: "10", month: 10, date: '1', salePrice: '10000'},
    {transationId: "11", month: 11, date: '1', salePrice: '11000'},
    {transationId: "12", month: 12, date: '1', salePrice: '12000'},
]
// Q3
test("sum by quarter", () => {
    expect(sumByQuarter(saleItems)).toStrictEqual(
        [{quarter: 1, totalPrices: 6000, transactionNums: 3},
            {quarter: 2, totalPrices: 15000, transactionNums: 3},
            {quarter: 3, totalPrices: 24000, transactionNums: 3},
            {quarter: 4, totalPrices: 33000, transactionNums: 3}
        ]
    )
})

// Q4
test("average by quarter", () => {
    expect(averageByQuarter(saleItems)).toStrictEqual([
        {quarter: 1, averagePrices: 2000, transactionNums: 3},
        {quarter: 2, averagePrices: 5000, transactionNums: 3},
        {quarter: 3, averagePrices: 8000, transactionNums: 3},
        {quarter: 4, averagePrices: 11000, transactionNums: 3}
    ])
})

// Q5
test("generate Sequence", () => {
    let sequence1 = new Sequence()
    expect(sequence1.next()).toBe(1)
    expect(sequence1.next()).toBe(2)
    let sequence2 = new Sequence()
    expect(sequence2.next()).toBe(3)
    expect(sequence2.next()).toBe(4)
})

// Q6
test("get unused keys", () => {
    expect(getUnUsedKeys([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 4]))
        .toStrictEqual([0, 1, 5, 6, 7, 8, 9])
})
