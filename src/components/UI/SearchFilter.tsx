import { useContext } from 'react';
import styles from './SearchFilter.module.css';
import { ThemeContext } from '../../store/theme-context';

const SearchFilter: React.FC<{
	value: string;
	onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
	const themeCtx = useContext(ThemeContext);

	return (
		<form className={themeCtx.selectTheme(`${styles.search_filter}`, `${styles.search_filter_dark}`)}>
			<div>
				<input type="text" value={props.value} onChange={props.onChangeHandler} />
			</div>
		</form>
	);
};

export default SearchFilter;
