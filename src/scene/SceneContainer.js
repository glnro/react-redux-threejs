import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addCube} from './SceneActions';
import Scene from './Scene.jsx';

const mapStateToProps = (state) => ({
  cubes: state.sceneReducer.cubes
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addCube: addCube }, dispatch);

const SceneContainer = connect(mapStateToProps, mapDispatchToProps)(Scene);

export default SceneContainer;
