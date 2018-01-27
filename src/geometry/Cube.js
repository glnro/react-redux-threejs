import React, { Component } from 'react';
import * as THREE from 'three';

const Cube = () => {
  let geometry = new THREE.BoxGeometry( 1, 1, 1 );
  let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  let cube = new THREE.Mesh( geometry, material );
  cube.position.x = (Math.random() * 5) - 5/2
  cube.position.y = (Math.random() * 5) - 5/2
  cube.position.z = (Math.random() * 5) - 5/2
  return cube;

}


export default Cube
