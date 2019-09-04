import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSearch} from '../../store/actions';

function Search() {

  const searchTerm = useSelector(state => state.searchTerm);

  const dispatch = useDispatch();

  return (
      <div className='pa2'>
        <input className='pa3 ba b--green bg-light-blue' type='search'
               placeholder='Search Robots' value={searchTerm}
               onChange={e => dispatch(setSearch(e.target.value))} />
      </div>
  );
}

export default Search;