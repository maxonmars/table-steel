import s from "../style/TableHead.module.css"
import classNames from "classnames"

export const ACTIVE_OPTION = {
	ANY: 'any',
	ACTIVE: 'active',
	INACTIVE: 'inactive',
}

export const SORT_BY = {
	BALANCE: 'balance',
	EMAIL: 'email',
}

export const TableHead = ({selectActive, setFilterToActive, changeSortHandler, sortType}) => {

	const ascDescBtn = sortType.isReverse ? s.ascSort : s.descSort

	return (
		<tr className={s.head}>
			<th className={s.colId}>id</th>
			<th className={s.colName}>Name</th>
			<th className={s.colIsActive}>
				<span>isActive</span>
				<select value={selectActive} onChange={(e) => setFilterToActive(e.target.value)}>
					<option value={ACTIVE_OPTION.ANY}>any</option>
					<option value={ACTIVE_OPTION.ACTIVE}>active</option>
					<option value={ACTIVE_OPTION.INACTIVE}>inactive</option>
				</select>
			</th>
			<th className={classNames(s.colBalance, s.sortBtn, sortType.sortBy === SORT_BY.BALANCE && ascDescBtn)}
				onClick={() => changeSortHandler(SORT_BY.BALANCE)}>
				<span>Balance</span></th>
			<th className={classNames(s.colEmail, s.sortBtn, sortType.sortBy === SORT_BY.EMAIL && ascDescBtn)}
				onClick={() => changeSortHandler(SORT_BY.EMAIL)}>
				<span>Email</span></th>
		</tr>
	)
}