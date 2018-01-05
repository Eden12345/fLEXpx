import { connect } from 'react-redux';

import ProfilePage from './profile_page';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

//eventually we'll need a mapDispatchToProps for getPhoto (an action I'll write later)
//so that we can fetch the banner photo and avatar photo from the database
//(maybe even getUser, too?)

export default withRouter(connect(mapStateToProps)(ProfilePage));
