/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const heightDict = names.map((name, ind) => {
      return [name, heights[ind]]
    })

    heightDict.sort((a,b) => b[1] - a[1])

    return heightDict.map(pair => pair[0])
};

console.log(sortPeople(["Mary","John","Emma"], [180,165,170]));