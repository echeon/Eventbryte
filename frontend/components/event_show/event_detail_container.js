import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { requestCategories } from '../../actions/category_actions';
import { requestBookmarks, destroyBookmark, createBookmark } from '../../actions/bookmark_actions';
import { requestTickets, destroyTicket, createTicket } from '../../actions/ticket_actions';
import { updateFilter } from '../../actions/filter_actions';
import { requestEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    bookmarks: state.bookmarks,
    tickets: state.tickets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestEvent: id => dispatch(requestEvent(id)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    requestBookmarks: user => dispatch(requestBookmarks(user)),
    destroyBookmark: id => dispatch(destroyBookmark(id)),
    createBookmark: bookmark => dispatch(createBookmark(bookmark)),
    requestTickets: user => dispatch(requestTickets(user)),
    destroyTicket: id => dispatch(destroyTicket(id)),
    createTicket: ticket => dispatch(createTicket(ticket))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
