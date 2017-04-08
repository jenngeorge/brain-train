import React from 'react';
import { BrowserRouter as Router, Route, withRouter, Redirect} from 'react-router-dom';
import Library from '../library/library';
import DeckEditContainer from '../deck/deck_edit_container.jsx';
import Study from '../study/study';

import SubjectContainer from '../subject/subject_container';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (!this.props.currentUser) {
      return(
				<Redirect to="/welcome" />
			);
    } else {
      return(
        <div className="home-container">
          <Route path="/library" component={Library}/>
          <Route path="/edit/:deckId" component={DeckEditContainer} />
          <Route path="/study/:deckId" component={Study} />
        </div>
      );
    }
  }
}


export default withRouter(Home);
