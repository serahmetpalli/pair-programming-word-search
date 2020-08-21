function transpose(array) {
    //console.log('before array: ', array); 
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < i; j++) {
            const tmp = array[i][j];
            array[i][j] = array[j][i];
            array[j][i] = tmp;
        }
    }
    //console.log(array);
    return array;
};

const searchHorizontal = function(letters, word) {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

const searchVertical = function(letters, word) {
    const horizontalArray = transpose(letters);
    if (!searchHorizontal(horizontalArray)) {
        return false;
    }
    return true;
}

const wordSearch = (letters, word) => {
    // validate
    // word is not ''
    if (word === '') {
        return false
    }
    // letters not an array
    if (!Array.isArray(letters)) {
        return false;
    }

    const horizontalArray = searchHorizontal(letters, word);
    const verticalArray = searchVertical(letters, word);

    if (horizontalArray || verticalArray) {
        return true
    } else {
        return false;
    }
}

module.exports = wordSearch;