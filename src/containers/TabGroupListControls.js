import { connect } from 'react-redux';
import TabGroupListControls from '../components/TabGroupListControls';
import {
  setSaveSelected,
  tabGroupNameChange,
  saveTabGroup,
  setSaveAndCloseHoverState,
} from '../actions';

const mapStateToProps = state => state.tabGroupListControls;
const mapDispatchToProps = dispatch => ({
  onClickSetSaveSelected: saveSelected => dispatch(setSaveSelected({ saveSelected, sync: true })),
  onTabGroupNameChange: e => dispatch(tabGroupNameChange(e.target.value)),
  onSaveTabGroupClick: ({ tabGroupName, close, saveSelected }) =>
    dispatch(saveTabGroup({ tabGroupName, close, saveSelected })),
  onSaveAndCloseMouseEnter: () => dispatch(setSaveAndCloseHoverState(true)),
  onSaveAndCloseMouseLeave: () => dispatch(setSaveAndCloseHoverState(false)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabGroupListControls);
