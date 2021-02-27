import {dataSort} from "../utils/dataSort";
import {Row} from "./Row";
import {useMemo, useState} from "react";
import {filterActiveStatus} from "../utils/filterActiveStatus";


export const RowContainer = (props) => {
	const {sortType, filterToActive, recursiveOffset, item} = props
	const {children} = item

	const [isExpanded, setIsExpanded] = useState(false)

	const onChangeIsExpanded = () => {
		if (children) setIsExpanded((prev) => !prev)
	}

	const filteredData = useMemo(() => isExpanded && children && filterActiveStatus(children, filterToActive),
		[filterToActive, isExpanded, children])

	const sortData = useMemo(() => isExpanded && children && dataSort(filteredData, sortType),
		[filteredData, sortType, isExpanded, children])

	const offsetDepth = recursiveOffset ? recursiveOffset + 10 : 1

	return (
		<>
			<Row offsetDepth={offsetDepth}  {...props} onChangeIsExpanded={onChangeIsExpanded} isExpanded={isExpanded}/>
			{isExpanded && (
				sortData.map(item => {
					return <RowContainer recursiveOffset={offsetDepth}
										 key={item.id} item={item}
										 sortType={sortType}
										 filterToActive={filterToActive}
					/>
				})
			)}
		</>
	)
}
