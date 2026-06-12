import ExcelJS from 'exceljs'

// Read complete excel dynamically
async function readExcel(filePath, sheetName) {

    const workbook = new ExcelJS.Workbook()

    await workbook.xlsx.readFile(filePath)

    const worksheet = workbook.getWorksheet(sheetName)

    const data = []

    const headers = []


    // Get all headers dynamically
    worksheet.getRow(1).eachCell((cell) => {

        headers.push(cell.value)
    })


    // Read all rows dynamically
    worksheet.eachRow((row, rowNumber) => {

        // Skip header row
        if (rowNumber === 1) {
            return
        }

        let rowData = {}

        row.eachCell((cell, colNumber) => {

            rowData[headers[colNumber - 1]] = cell.value
        })

        data.push(rowData)
    })

    return data
}



// Get specific row dynamically
async function getRowData(filePath, sheetName, rowNumber) {

    const data = await readExcel(filePath, sheetName)

    return data[rowNumber - 2]
}



// Get specific cell dynamically
async function getCellData(filePath, sheetName, rowNumber, columnName) {

    const data = await readExcel(filePath, sheetName)

    return data[rowNumber - 2][columnName]
}



export {
    readExcel,
    getRowData,
    getCellData
} 