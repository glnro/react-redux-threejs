import React, { Component } from 'react';
import * as THREE from 'three';

const Cube = () => {
  let geometry = new THREE.BoxGeometry( 1, 1, 1 );
  let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  let cube = new THREE.Mesh( geometry, material );

  return cube;

}


export default Cube
