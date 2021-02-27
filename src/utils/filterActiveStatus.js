import {ACTIVE_OPTION} from "../components/TableHead";

export const filterActiveStatus = (arr, filterToActive) => {
	return  arr.filter(item => {
		if (filterToActive === ACTIVE_OPTION.ACTIVE) {
			return item.isActive
		} else if (filterToActive === ACTIVE_OPTION.INACTIVE) {
			return !item.isActive
		} else {
			return item
		}
	})

}