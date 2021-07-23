let prizeArray = [
	{name:'prize1', weight:2},
	{name:'prize2', weight:3},
	{name:'prize3', weight:2},
	{name:'prize4', weight:5}
]
// let sumWeight = 0

let getRandomPrize = (weightArray) => {
	const totalWeight = weightArray.reduce((pre,cur,idx) => {
		cur.startWeight = pre;
		return cur.endWeight = pre + cur.weight;
	},0)
	
	// console.log(totalWeight)
	// sumWeight = totalWeight
	// console.log(weightArray)

	let random = Math.ceil(Math.random() * totalWeight)

	// console.log(random)
	
	let selectPrize = weightArray.find(item => item.startWeight<random && item.endWeight >= random)

	// console.log(selectPrize)

	return selectPrize.name
}

// test random rate
let prizes = []
for(var i=0;i<=100000;i++) {
	prizes.push(getRandomPrize(prizeArray))
}


//console.log(getRandomPrize(prizeArray))
var getCount = function(array) {
    return array.reduce((total,currentVal) => {
        if(currentVal in total)
        {
            total[currentVal]++;
        }
        else
        {
            total[currentVal] = 1;
        }
        return total;
    },{})
}

let results = getCount(prizes)

Object.keys(results).forEach(key => {
	console.log(key,Math.round(100*results[key]/prizes.length)/100,Math.round(100*prizeArray.filter(item => item.name == key)[0].weight/sumWeight)/100)
})