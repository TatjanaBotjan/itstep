function setData(date1, date2) {
    let a = date1.split(".").map((item) => parseInt(item));
    let b = date2.split(".").map((item) => parseInt(item));

    if((a[2] > b[2]) || ((a[2] == b[2]) && (a[1] > b[1])) || ((a[2] == b[2]) && (a[1] == b[1]) && (a[0] > b[0]))){
        return 1;
    } else if ((a[2] == b[2]) && (a[1] == b[1]) && (a[0] == b[0])){
        return 0;
    } else {
        return -1;
    }

};

console.log(setData("01.01.1999", "01.02.1999"));

