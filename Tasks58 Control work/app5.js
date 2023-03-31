
function sortDate(myarray) {
    myarray.sort(function (a, b) {
        
        return new Date(b.date) - new Date(a.date);
    });

};
myarray = ["01.01.2000", "02.01.1999"];
console.log(sortDate(myarray));















