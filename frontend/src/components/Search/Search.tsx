import React, { FC } from 'react';

const Search: FC<SearchProps> = () => {
  return (
    <form>
      <label htmlFor='search'>
        <span className={styles.hidden}>Найти сладкий мемес</span>
      </label>
      <input
        type='text'
        id='search'
        placeholder='Найти сладкий мемес'
        name='searchPanel'
        className={styles.input}
      />
      <button className={styles.button} type='submit'>Поиск</button>
    </form>
  );
}

export default Search;