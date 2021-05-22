import styles from './SearchFilter.module.css';

const SearchFilter: React.FC<{
	value: string;
	onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
	return (
		<form className={styles.search_filter}>
			<div>
				<input type="text" value={props.value} onChange={props.onChangeHandler} />
			</div>
		</form>
	);
};

export default SearchFilter;
