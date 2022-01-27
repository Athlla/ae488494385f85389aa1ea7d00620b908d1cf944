import styles from './Search.module.scss';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange }: Props) => {
  return (
    <div className={styles.Search}>
      <span className="material-icons">place</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Location"
      />
    </div>
  );
};

export default Search;
