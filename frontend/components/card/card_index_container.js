import { connect } from 'react-redux';
import CardIndex from './card_index';

const mapStateToProps = (state) => ({
  cards: state.cards.byId
});


export default connect(
  mapStateToProps
)(CardIndex);
