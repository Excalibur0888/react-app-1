const arr = [1,2,4,5,7,8,9,12,34,154,334]
function binary (arr, item) {
	let low = 0
	let high = arr.length-1
	while (low <= high) {
		mid = low + high
		guess = arr[mid]
		if (guess === item) {
			return mid
		}
		if (guess>item) {
			high = mid - 1
		}
		else {
			low = mid - 1
		}
	}
	return null
}

console.log(binary(arr, 8))