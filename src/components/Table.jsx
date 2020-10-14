import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Body from './Body';
import Head from './Head';

function pegaFiltro(filtroPlanetario, planetas) {
  const { value, comparison, column } = filtroPlanetario;
  if (comparison === 'maior que') {
    return planetas[column] * 1 > value * 1;
  } else if (comparison === 'menor que') {
    return planetas[column] * 1 < value * 1;
  }
  return planetas[column] * 1 === value * 1;
}
const colunasNumericas = [
  'population',
  'rotation_period',
  'diameter',
  'surface_water',
  'orbital_period',
];

function ordenaCol(filtroPorPlaneta, reduxOrder) {
  if (colunasNumericas.includes(reduxOrder.column)) {
    if (reduxOrder.sort === 'ASC') {
      return filtroPorPlaneta.sort(
        (a, b) => a[reduxOrder.column.toLowerCase()] - b[reduxOrder.column.toLowerCase()]
      );
    }
    return filtroPorPlaneta.sort(
      (b, a) => a[reduxOrder.column.toLowerCase()] - b[reduxOrder.column.toLowerCase()]
    );
  }
  if (reduxOrder.sort === 'ASC') {
    return filtroPorPlaneta.sort((a, b) =>
      a[reduxOrder.column.toLowerCase()] > b[reduxOrder.column.toLowerCase()] ? 1 : -1
    );
  }
  return filtroPorPlaneta.sort((a, b) =>
    a[reduxOrder.column.toLowerCase()] < b[reduxOrder.column.toLowerCase()] ? 1 : -1
  );
}

function Table() {
  const { data: planetas, filterByName: name, filterByNumericValues } = useContext(StarWarsContext);
  let filtroPorPlaneta = planetas.filter((planeta) => planeta.name.indexOf(name) >= 0);
  filterByNumericValues.forEach((filtro) => {
    filtroPorPlaneta = filtroPorPlaneta.filter((planeta) => pegaFiltro(filtro, planeta));
  });
  return (
    <div>
      StarWars Datatable with Filters
      <br />
      <br />
      <br />
      <br />
      <br />
      <table>
        <Head />
        {filtroPorPlaneta.map((planeta) => (
        <Body data={planeta} />
      ))}
      </table>
    </div>
  );
}

/* export default class Table extends Component {

  render() {
    const { planetas, name, filtragemPlanetas, reduxOrder } = this.props;
    /* let filtroPorPlaneta = planetas.filter((planeta) => planeta.name.indexOf(name) >= 0);
    filtragemPlanetas.forEach((filtro) => {
      filtroPorPlaneta = filtroPorPlaneta.filter((planeta) => pegaFiltro(filtro, planeta));
    });
    filtroPorPlaneta = ordenaCol(filtroPorPlaneta, reduxOrder);
    return (
      <div>
        
      </div>
    );
  }
} */

export default Table;
