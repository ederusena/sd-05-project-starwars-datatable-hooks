// import React from 'react';

// function filterByNumber(arrayPlanets, filter) {
//   if (filter.comparison === 'maior que') {
//     return arrayPlanets.filter((planet) => Number(planet[filter.column]) > Number(filter.value));
//   }
//   if (filter.comparison === 'menor que') {
//     return arrayPlanets.filter((planet) => Number(planet[filter.column]) < Number(filter.value));
//   }
//   if (filter.comparison === 'igual a') {
//return arrayPlanets.filter((planet) => Number(planet[filter.column]) === Number(filter.value));
//   }
//   return arrayPlanets;
// }

// // tabela que receberá o corpo da função
// export function TableInfo () {
//   render() {
//     const { data, text, filterByNumericValues } = this.props;

//     // Filtro por numero
//     let filterPlanets = data;
//     filterByNumericValues.forEach((filter) => {
//       filterPlanets = filterByNumber(filterPlanets, filter);
//     });

//     filterPlanets = filterPlanets.filter(
//       (input) => input.name.toUpperCase().includes(text.name.toUpperCase()),
//     );

//     return filterPlanets.map((planet) => (
//       <tbody key={planet.name}>
//         <tr>
//           <td>{planet.name}</td>
//           <td>{planet.rotation_period}</td>
//           <td>{planet.orbital_period}</td>
//           <td>{planet.diameter}</td>
//           <td>{planet.climate}</td>
//           <td>{planet.gravity}</td>
//           <td>{planet.terrain}</td>
//           <td>{planet.surface_water}</td>
//           <td>{planet.population}</td>
//           <td>{planet.films}</td>
//           <td>{planet.created}</td>
//           <td>{planet.edited}</td>
//           <td>{planet.url}</td>
//         </tr>
//       </tbody>
//     ));
//   }
// }

// const mapStateToProps = (state) => ({
//   data: state.planetReducer.data,
//   text: state.filters.filterByName,
//   filterByNumericValues: state.filters.filterByNumericValues,
// });

// export default connect(mapStateToProps)(TableInfo);
