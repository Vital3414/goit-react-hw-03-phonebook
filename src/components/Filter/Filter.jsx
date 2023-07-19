import css from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ filter, handleFilterChange }) {
  return (
    <label className={css.search}>
      <span className={css.searchName}>Find contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};