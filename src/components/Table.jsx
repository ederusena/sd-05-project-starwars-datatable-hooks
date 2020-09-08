import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import planetAPI from '../services/api';
import TableHead from './TableHead';

function allFilters(data, filter) {
  if (filter.comparison === 'maior que') {
    return data.filter((planet) => Number(planet[filter.column]) > Number(filter.value));
  }
  if (filter.comparison === 'menor que') {
    return data.filter((planet) => Number(planet[filter.column]) < Number(filter.value));
  }
  if (filter.comparison === 'igual a') {
    return data.filter((planet) => Number(planet[filter.column]) === Number(filter.value));
  }
  return data;
}

export default function Table() {
  const { isFetching,
    setIsFetching,
    data,
    setData,
    name,
    filterByNumbers,
  } = useContext(StarWarsContext);

  useEffect(() => {
    setIsFetching(true);
    planetAPI().then((response) => setData(response.results));
    setIsFetching(false);
  }, [setIsFetching, setData]);

  let planets = data;
  filterByNumbers.forEach((filter) => { planets = allFilters(planets, filter); });
  planets = planets.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));

  return isFetching ? (
    <h1>Carregando...</h1>
  ) : (
    <table>
      <TableHead />
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
            <td key={planet.name}>{planet.name}</td>
            <td key={planet.rotation_period}>{planet.rotation_period}</td>
            <td key={planet.orbital_period}>{planet.orbital_period}</td>
            <td key={planet.diameter}>{planet.diameter}</td>
            <td key={planet.climate}>{planet.climate}</td>
            <td key={planet.gravity}>{planet.gravity}</td>
            <td key={planet.terrain}>{planet.terrain}</td>
            <td key={planet.surface_water}>{planet.surface_water}</td>
            <td key={planet.population}>{planet.population}</td>
            <td key={planet.films}>{planet.films}</td>
            <td key={planet.created}>{planet.created}</td>
            <td key={planet.edited}>{planet.edited}</td>
            <td key={planet.url}>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
