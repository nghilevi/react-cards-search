import { Card } from "./model";

interface StatsObj{
    [key: string]: number
}

const makeStatsArr = (originArr: string[]) => {
    const statsArr = [];

    //make a stats obj: count the number of occurence of an elm in an array
    const statsObj = originArr.reduce(function (acc: StatsObj, curr) {
        acc[curr] = (typeof acc[curr] == 'undefined') ? 1 : acc[curr] + 1
        return acc;
    }, {});

    //transform a statsObj to a stats array : {Web: 15} -> ["Web (15)"]
    for (var key in statsObj) {
        statsObj.hasOwnProperty(key) && statsArr.push(key + ' (' + statsObj[key] + ')'); //single line if
    }

    return statsArr;
}

export const generateAutocompleteArray = (data: Card[]) => {
    //Generate autocomplete array
    const projectNameArr = []
    let catArr: string[] = []
    let techArr: string[] = []

    for (var i = 0; i < data.length; i++) {
        projectNameArr.push(data[i].name);
        catArr = catArr.concat((data[i] as Card).cat.split(', '));
        techArr = techArr.concat(data[i].technologies.split(', ')); //split each tech word first, then concat
    }

    // What we want is a stat array, so instead ['Web', 'Web','Mobile'], we will have ['Web (2)','Mobile (1)']
    catArr = makeStatsArr(catArr); //categories
    techArr = makeStatsArr(techArr); // technologies

    return projectNameArr.concat(catArr, techArr);
}
