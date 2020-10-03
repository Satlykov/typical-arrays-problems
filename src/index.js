exports.min = function min(array) {
    if (array == undefined || array.length === 0) {
        return 0;
    } else {
        array.sort((a, b) => a - b);
        console.log(array[0]);
        return array[0];
    }
};
exports.max = function max(array) {
    if (array == undefined || array.length === 0) {
        return 0;
    } else {
        array.sort((a, b) => a - b);
        let indexLast = array.length - 1;
        console.log(array[indexLast]);
        return array[indexLast];
    }
};

exports.avg = function avg(array) {
    if (array == undefined || array.length === 0) {
        return 0;
    } else {
        const summ = (accumulator, currentValue) => accumulator + currentValue;
        let avg = array.reduce(summ) / array.length;
        console.log(avg);
        return avg;
    }
};
