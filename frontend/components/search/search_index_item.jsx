import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchIndexItem extends React.Component {
  constructor(){
    super();

    this.state = {
      open: false
    };

    this.handleFollow = this.handleFollow.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  handleFollow(){
    console.log("following!");
  }

  toggleOpen(){
    this.setState({open: !this.state.open});
  }

  render(){
    return(
      <div>
        <h2>{this.props.subject.title}</h2>
        <section className={this.state.open ? "show-details" : "hide-details"}>
          <p>here are some subject details including decks, etc</p>
        </section>
      </div>
    );
  }
}


export default withRouter(SearchIndexItem);
