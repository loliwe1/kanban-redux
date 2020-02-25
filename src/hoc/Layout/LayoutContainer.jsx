import { connect } from 'react-redux';
import Layout from './Layout';

const mapStateToProps = (state) => ({
  columns: state.columns,
  name: state.app.name,
  currentCardId: state.app.currentCardId,
});

export default connect(mapStateToProps)(Layout);
