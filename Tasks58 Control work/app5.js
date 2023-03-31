function getDiffDate(date1, date2) {
    let a = date1.split(".").map((item) => +item);
    let b = date2.split(".").map((item) => +item);

    if ((a[2] > b[2]) || ((a[2] == b[2]) && (a[1] > b[1])) || ((a[2] == b[2]) && a[1] == b[1] && a[0] > b[0])) {
        return 1;
    }

    if (a[2] == b[2] && a[1] == b[1] && a[0] == b[0]) {
        return 0;
    }

    return -1;
}

array = ["01.01.2000", "02.01.1999", "01.01.2015"];

array.sort(getDiffDate);
console.log(array);
















