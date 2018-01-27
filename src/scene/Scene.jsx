import React, { Component } from 'react';
import * as THREE from 'three';
import Cube from '../geometry/Cube';

export default class Scene extends Component{

  componentDidMount(){
      this.start = this.start.bind(this)
      this.stop = this.stop.bind(this)
      this.animate = this.animate.bind(this)
      const width = 800;
      const height = 600;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75, width/height,1,1000
      )
      camera.position.z = 3;
      const renderer = new THREE.WebGLRenderer({antialias: true})
      renderer.setClearColor('#000000')
      renderer.setSize(width, height)
      let geometry = new THREE.BoxGeometry( 1, 1, 1 );
      let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

      let newCube = Cube()
      let newCube2 = Cube()

      this.scene = scene
      this.camera = camera
      this.renderer = renderer
      let cube = Cube()
      this.addElement(cube)
      this.mount.appendChild(this.renderer.domElement)
      this.start()
  }

  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.props.cubes.map(cube => this.addElement(cube))
    this.renderScene()
    this.frameId =  window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  addElement(element){
    this.scene.add(element)
  }

  render() {

    const {cubes, addCube } = this.props;
    return (
      <div>
        <div
          id="WebGL-output"
          ref={(mount) => { this.mount = mount }}
        />
        <button className="cube-button" onClick={addCube}>+</button>

      </div>

    )
  }
}
