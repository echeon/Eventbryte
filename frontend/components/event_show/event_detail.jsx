import React from 'react';
import dateFormat from 'dateformat';

const EventDetail = ({ thisEvent }) => {
  console.log(thisEvent.image_url);
  const startDate = thisEvent.start_date ? new Date(thisEvent.start_date) : "";
  const endDate = thisEvent.end_date ? new Date(thisEvent.end_date): "";
  const startTime = thisEvent.start_time ? new Date(thisEvent.start_time) : "";
  const endTime = thisEvent.end_time ? new Date(thisEvent.end_time) : "";

  return (
    <section className="event-show-detail-container">
      <div className="event-detail-header">
        <div className="event-image-container">
          <img src={thisEvent.image_url}/>
        </div>
        <div className="event-summary">
          <div className="event-main-info">
            <p className="event-month">{dateFormat(startDate, "mmm")}</p>
            <p className="event-date">{dateFormat(startDate, "dd")}</p>
          </div>
          <div className="event-price-info">FREE</div>
        </div>
      </div>
      <div className="event-detail-main">
        <div className="event-detail">
          <div className="event-detail-left">
            <h3>description</h3>
            <p>{thisEvent.description}</p>
            <h3>tags</h3>
          </div>
          <div className="event-detail-right">
            <h3>date and time</h3>
            <p>{dateFormat(startDate, "ddd, mmmm d, yyyy")}</p>
            <p>
              {dateFormat(startTime, "h:MM TT")}
              -
              {dateFormat(endTime, "h:MM TT")}
            </p>
            <h3>location</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetail;
