import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

const Moods = ({ handleSelection, coffees, snacks, naps, studies }) => {
  const state = { coffees, snacks, naps, studies };
  const face = getFace(state);
  const actions = [
    { name: 'DRINK_COFFEE', text: 'coffees', count: coffees },
    { name: 'EAT_SNACK', text: 'snacks', count: snacks },
    { name: 'TAKE_NAP', text: 'naps', count: naps },
    { name: 'STUDY', text: 'study', count: studies }
  ];

  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection} />
      <Face emoji={face} />
    </>
  );
};

const mapStateToProps = state => ({
  coffees: state.drinkCoffee,
  snacks: state.snack,
  naps: state.nap,
  studies: state.study,
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  }
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;
export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

export default MoodsContainer;

