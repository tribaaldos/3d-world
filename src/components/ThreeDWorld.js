import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDWorld = () => {
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;
    document.body.appendChild(renderer.domElement);

    // Add a cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene with the camera
      renderer.render(scene, camera);
    };

    animate();

    // Clean up function
    return () => {
      // Remove the renderer's DOM element when the component is unmounted
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // No need to render any JSX, everything is done in the useEffect
};

export default ThreeDWorld;
