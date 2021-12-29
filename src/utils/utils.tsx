
const filterList = (itemsList: any[], filteredKey: string, filteredValue: string) => {
    let returnList = itemsList || []
    if (filteredValue.length !== 0 && Array.isArray(itemsList)) {
        returnList = itemsList.filter((item) => {
            const itemStr = lowerString(item[filteredKey])
            return itemStr.search(lowerString(filteredValue)) > -1
        })
    }
    return returnList
}

const lowerString = (str: string) => str.toString().toLowerCase()

const parseJSON = (data: any) => data.json()

export { filterList, parseJSON, lowerString }