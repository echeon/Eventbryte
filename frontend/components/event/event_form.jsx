import React from 'react';
import ThumbMap from './thumb_map';
import update from 'react-addons-update';
import TypeSelector from './type_selector';
import CategorySelector from './category_selector';

export default class Eventform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleEvent: {
        title: "",
        description: "",
        organizerId: this.props.currentUser.id,
        typeId: 0,
        categoryId: 0,
        subcategoryId: 0,
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        venueName: "",
        latLong: "",
        imageUrl: ""
      },
      address: {
        address: "",
        city: "",
        state: "",
        zip: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop) {
    return e => {
      e.preventDefault();
      this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const singleEvent = this.state;
    this.props.createEvent(singleEvent);
  }

  getFullDate() {
    const timeNow = new Date();
    let year, month, date;
    year = timeNow.getFullYear();
    month = `0${timeNow.getMonth() + 2}`.slice(-2);
    date = `0${timeNow.getDate()}`.slice(-2);
    return `${year}-${month}-${date}`;
  }

  handleAddressChange(prop) {
    return e => {
      e.preventDefault();
      const val = e.currentTarget.value;
      this.setState( oldState => update(oldState, {
        address: { [prop]: {$set: val} }
      }));
    };
  }

  componentDidMount() {
    this.props.requestTypes();
    this.props.requestCategories();
  }

  render() {
    const eventTitle = (
      <div className="event-detail-container">
        <h3>event title</h3>
        <input type="text"
               placeholder="Give it a short distinct name"
               onChange={this.handleChange("title")}/>
      </div>
    );

    const venueAddress = Object.keys(this.state.address).map(k => {
      return this.state.address[k];
    }).join(" ");

    const address = (
      <div className="event-detail-container address">
        <h3>location</h3>
        <div className="column">
          <div>
            <input type="text"
                   placeholder="Enter the venue's name"
                   onChange={this.handleChange("venueName")}/>
            <input type="text"
                   placeholder="Address"
                   onChange={this.handleAddressChange("address")}/>
            <input type="text" placeholder="Address 2 (optional)" />
            <input type="text"
                   placeholder="City"
                   onChange={this.handleAddressChange("city")}/>
            <div className="column-inside-column">
              <input type="text"
                     placeholder="State"
                     onChange={this.handleAddressChange("state")}/>
              <input type="text"
                     placeholder="Zip/Postal"
                     onChange={this.handleAddressChange("zip")} />
            </div>
          </div>
          <div className="map-container">
            <ThumbMap address={venueAddress}/>
          </div>
        </div>
      </div>
    );

    const dateTime = (
      <div className="event-detail-container column date-time">
        <div>
          <h3>starts</h3>
          <input type="date"
                 className="date-picker"
                 onChange={this.handleChange("startDate")}/>
          <input type="time"
                 className="time-picker"
                 onChange={this.handleChange("startTime")}/>
        </div>
        <div>
          <h3>ends</h3>
          <input type="date"
                 className="date-picker"
                 onChange={this.handleChange("endDate")}/>
          <input type="time"
                 className="time-picker"
                 onChange={this.handleChange("endTime")}/>
        </div>
      </div>
    );

    const eventDescription = (
      <div className="event-detail-container">
        <h3>event description</h3>
        <textarea placeholder="Give it a short distinct name"
                  onChange={this.handleChange("title")}/>
      </div>
    );

    return (
      <section className="event-form-section">
        <h1>Create An Event</h1>
        <hr/>
        <form className="create-event-form">
          <div className="title-container">
            <span className="index">1</span>
            <span className="title">Event Details</span>
          </div>
          {eventTitle}
          {address}
          {dateTime}
          {eventDescription}

          <div className="title-container">
            <span className="index">2</span>
            <span className="title">Create Tickets</span>
          </div>

          <div className="title-container">
            <span className="index">3</span>
            <span className="title">Additional Settings</span>
          </div>
          <TypeSelector types={this.props.types} />
          <CategorySelector categories={this.props.categories} />

        </form>

        <div className="save-button-container">
          <h1>Nice job! You're almost done.</h1>
          <button onClick={this.handleSubmit}>save</button>
        </div>
      </section>
    );
  }
}
