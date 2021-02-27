import {RowContainer} from "./RowContainer";
import {dataSort} from "../utils/dataSort";
import {useMemo, useState} from "react";
import {dataMapping} from "../utils/dataMapping";
import {ACTIVE_OPTION, SORT_BY, TableHead} from "./TableHead";
import {filterActiveStatus} from "../utils/filterActiveStatus";
import s from "../style/ExpandingTable.module.css"

export const ExpandingTable = ({data}) => {
	const [sortType, setSortType] = useState({isReverse: false, sortBy: SORT_BY.BALANCE})
	const [filterToActive, setFilterToActive] = useState(ACTIVE_OPTION.ANY)

	const preparedData = useMemo(() => dataMapping(data), [data])

	const changeSortHandler = (sortBy) => {
		if (sortBy === sortType.sortBy) {
			setSortType(({isReverse}) => ({isReverse: !isReverse, sortBy}))
		} else {
			setSortType({isReverse: false, sortBy})
		}
	}

	const filteredData = useMemo(() => filterActiveStatus(preparedData, filterToActive), [preparedData, filterToActive])

	const sortData = useMemo(() => dataSort(filteredData, sortType), [filteredData, sortType])

	return (
		<table className={s.exTable}>
			<thead>
			<TableHead filterToActive={filterToActive} sortType={sortType} setFilterToActive={setFilterToActive}
					   changeSortHandler={changeSortHandler}/>
			</thead>
			<tbody>
			{sortData.map(item => <RowContainer key={item.id} item={item} sortType={sortType}
												filterToActive={filterToActive}/>)}
			</tbody>
		</table>
	)
}
