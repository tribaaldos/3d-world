import { useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function ThreeDWorld() {
  const loader = new GLTFLoader();
  return (
    loader.load( '../models/gltf/wolf.gltf')
  )//
}