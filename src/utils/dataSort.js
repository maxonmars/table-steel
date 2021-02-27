export const dataSort = (arr, {isReverse, sortBy}) => {
	return [...arr].sort((a, b) => {
		return (isReverse ? 1 : -1) * a[sortBy].localeCompare(b[sortBy])
	})
}