const pickRandom = (arr) => {
	const randIndex = Math.floor(Math.random() * arr.length);
	return arr[randIndex];
};

export default pickRandom;
