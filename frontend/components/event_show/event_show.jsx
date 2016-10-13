import React from 'react';
import EventDetailContainer from './event_detail_container';

export default class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestEvent(this.props.eventId);
    this.props.requestTypes();
    this.props.requestCategories();
  }

  render() {
    const { thisEvent, types, categories } = this.props;

    return (
      <main className="event-show-container">
        <div className="event-show-header-image">
          <img src={this.props.thisEvent.image_url}/>
        </div>
        <EventDetailContainer thisEvent={thisEvent}
                              types={types}
                              categories={categories} />
      </main>
    );
  }
}
