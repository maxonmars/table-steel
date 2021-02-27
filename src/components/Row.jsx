import s from "../style/Row.module.css"
import classNames from "classnames"

export const Row = ({item, onChangeIsExpanded, offsetDepth, isExpanded}) => {
	const {id, name, balance, email, isActive, children} = item

	const rowStyle = classNames(s.row, isExpanded && s.rowActive)
	const cellNameStyle = classNames(s.cellName, children ? isExpanded ? s.openRow : s.closedRow : s.emptyRow)

	return (
		<tr className={rowStyle} onClick={onChangeIsExpanded}>
			<td>{id}</td>
			<td className={cellNameStyle} style={{paddingLeft: `${offsetDepth}px`}}>
				<span>{name}</span>
			</td>
			<td>{`${isActive}`}</td>
			<td>{balance}</td>
			<td>{email}</td>
		</tr>
	)
}
