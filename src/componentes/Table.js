import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/context';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import requestAPI from '../services/index';
import SearchBar from './SearchBar';
import SearchNumbers from './SearchNumbers';
import SelectedFilter from './SelectedFilter';

function Table() {
  const { setData, setLoading, loading } = useContext(StarWarsContext);

  const getData = (response) => {
    setLoading(true);
    setData([...response.results]);
    setLoading(false);
  };

  useEffect(() => {
    requestAPI().then((response) => getData(response));
  }, []);

  return (
    loading
      ? <p>Loading...</p>
      :
      <div>
        <SearchBar />
        <SearchNumbers />
        <SelectedFilter />
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
  );
}

export default Table;
