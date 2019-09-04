import React, {useEffect} from 'react';
import 'tachyons';
import {useDispatch, useSelector} from 'react-redux';

import CardList from '../components/organisms/CardList';
import Search from '../components/atmos/Search';
import './App.css';
import Scroll from '../components/organisms/Scroll';
import {fetchRobotsStart} from '../store/actions';
import Header from '../components/atmos/Header';

function App() {

  const isFetching = useSelector(state => state.isFetching);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRobotsStart());
  }, [dispatch]);

  return (
      (isFetching && <h1 className='f1'>Loading...</h1>) ||
      <div className='tc'>
        <Header />
        < Search />
        <Scroll>
          <CardList />
        </Scroll>
      </div>
  );
}

export default App;