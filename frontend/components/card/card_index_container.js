import { connect } from 'react-redux';
import CardIndex from './card_index';

const mapStateToProps = (state) => ({
  cards: state.cards.byId,
  cardIds: state.cards.allIds
});


export default connect(
  mapStateToProps
)(CardIndex);
