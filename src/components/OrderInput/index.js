import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RI from '../RadioInput';
import SortButton from '../SortButton';
import StarWarsContext from '../../context/StarWarsContext';

class Ordering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnOptions: [
        'name',
        'rotation_period',
        'orbital_period',
        'diameter',
        'climate',
        'gravity',
        'terrain',
        'surface_water',
        'population',
        'films',
        'created',
        'edited',
        'url',
      ],
      radio: 'ASC',
      columnValue: 'name',
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { columnOptions, radio, columnValue } = this.state;
    return (
      <div>
        <select
          name="columnValue"
          onChange={this.handleEvent}
          data-testid="column-sort">
          {columnOptions.map((each) => (
            <option key={each}>{each}</option>
          ))}
        </select>
        <RI value1="ASC" value2="DESC" onClick={this.handleEvent} />
        <br />
        <SortButton columnValue={columnValue} radio={radio} />
      </div>
    );
  }
}

export default Ordering;
