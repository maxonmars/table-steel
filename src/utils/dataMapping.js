export const dataMapping = (data) => {
	const mappedData = data.reduce((obj, el) => {
		obj[el.id] = {...el}
		return obj
	}, {})

	Object.values(mappedData).forEach(el => {
		if (el.parentId !== 0) {
			if (mappedData[el.parentId].children) {
				mappedData[el.parentId].children.push(el)
			} else {
				mappedData[el.parentId].children = [el]
			}
		}
	})

	return 	Object.values(mappedData).filter(el => el.parentId === 0)
}
