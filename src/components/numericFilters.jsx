import React from 'react';
import { useContext, useState } from 'react';
import Context from '../context/StarWarsContext';
import { pegandoNumerosAction, iniciaFiltros, removeClick } from '../actions';

const NumericFilter = () => {
  /* constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.selectButton = this.selectButton.bind(this);
  } */
  const {
    numericFunction,
    removeFilter,
    selectedOption: options,
    filterByNumericValues,
  } = useContext(Context);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [valor, setValor] = useState('');
  const filtros = filterByNumericValues.map((el) => el.column);

  function selectButton(options, filtros) {
    return (
      <div>
        <select data-testid="column-filter" onChange={(event) => setColumn(event.target.value)}>
          <option value="" disabled defaultValue />
          {options
            .filter((el) => !filtros.includes(el))
            .map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(event) => setComparison(event.target.value)}
        >
          <option value="">Choose your comparison</option>
          <option value="menor que">menor que</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
    );
  }
  return (
    <div>
      {selectButton(options, filtros)}
      <input
        type="number"
        data-testid="value-filter"
        onChange={(event) => setValor(event.target.value)}
      />
      <button
        data-testid="button-filter"
        onClick={() => numericFunction({ column, comparison, value: valor })}
      >
        Acionar
      </button>
      <div>
        {filtros.map((filtro) => (
          <div data-testid="filter" key={filtro}>
            <button onClick={(event) => removeFilter(event.target.id)} id={filtro}>
              X
            </button>
            {filtro}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  options: state.filters.selectedOption,
  filtros: state.filters.filterByNumericValues.map((el) => el.column),
});
const mapDispatchToProps = (dispatch) => ({
  pegarNumero: (filter) => dispatch(pegandoNumerosAction(filter)),
  excluiOpcao: (opcao) => dispatch(iniciaFiltros(opcao)),
  removeClick: (column) => dispatch(removeClick(column.target.id)),
});
export default NumericFilter;
