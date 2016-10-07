import React from 'react';

export default class TypeSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { types } = this.props;

    const typeList = Object.keys(types).map(key => {
      const type = types[key];
      return <option key={key} value={type.id}>{type.name}</option>;
    });

    return (
      <div className="event-detail-container">
        <h3>event type</h3>
        <div className="type-selector-container">
          <select>
            <option value="" disabled selected>Select the type of event</option>
            {typeList}
          </select>
        </div>
      </div>
    );
  }
}
