import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import modelURL from "./mode.glb";

const DashBoard = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let scene, camera, renderer, model;

    // Create scene
    scene = new THREE.Scene();
    sceneRef.current = scene;

    const light = new THREE.AmbientLight(0xffffff, 1);
    // const light = new THREE.tops(0xffffff, 1);
    scene.add(light);

    // Mouse down event listener
    const handleMouseDown = (event) => {
      isDragging.current = true;
      previousMousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    // Mouse up event listener
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Mouse move event listener
    const handleMouseMove = (event) => {
      if (!isDragging.current) return;

      const { x, y } = event;

      const deltaMove = {
        x: x - previousMousePosition.current.x,
        y: y - previousMousePosition.current.y,
      };

      // Rotate model based on mouse movement
      if (model) {
        model.rotation.y += deltaMove.x * 0.01;
        model.rotation.x += deltaMove.y * 0.01;
      }

      previousMousePosition.current = { x, y };
    };

    // Create camera
    camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.5,
      500
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Create renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);

    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      modelURL,
      (gltf) => {
        model = gltf.scene;
        model.scale.set(0.1, 0.1, 0.1); // Decrease the size by 1/10
        scene.add(model);
        modelRef.current = model;
      },
      undefined,
      (error) => {
        console.error("Error loading GLB model:", error);
      }
    );

    // Add event listeners for mouse interactions
    containerRef.current.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    containerRef.current.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Render scene with camera
      renderer.render(scene, camera);
    };

    // Start animation loop
    animate();
  }, []);

  return (
      <div ref={containerRef} ></div>
  );
};

export default DashBoard;
