import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDMap: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Zones setup: Forest, Snow, and Desert
    const zoneData = [
      { color: 0x228B22, position: -10 }, // Forest (Green)
      { color: 0xF0E68C, position: 0 },   // Desert (Sandy)
      { color: 0xFFFFFF, position: 10 },  // Snow (White)
    ];

    zoneData.forEach(zone => {
      const groundGeometry = new THREE.PlaneGeometry(20, 10); // Each zone is 10 units long
      const groundMaterial = new THREE.MeshBasicMaterial({ color: zone.color });
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.position.set(0, -0.5, zone.position);
      scene.add(ground);
    });

    // Create the road (make it longer through all the zones)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 15),
      new THREE.Vector3(0.5, 0, 10),
      new THREE.Vector3(-0.5, 0, 5),
      new THREE.Vector3(0.5, 0, 0),
      new THREE.Vector3(-0.5, 0, -5),
      new THREE.Vector3(0.5, 0, -10),
    ]);

    // Create the TubeGeometry to represent the road
    const tubeGeometry = new THREE.TubeGeometry(curve, 200, 0.4, 8, false);
    const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
    const road = new THREE.Mesh(tubeGeometry, roadMaterial);
    scene.add(road);

    // Create a tree function
    const createTree = (x: number, z: number, snow: boolean = false) => {
      const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 12);
      const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);

      const foliageGeometry = new THREE.SphereGeometry(0.6, 16, 16);
      const foliageMaterial = new THREE.MeshBasicMaterial({ color: snow ? 0xFFFFFF : 0x228B22 });
      const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);

      foliage.position.set(0, 0.8, 0);

      const tree = new THREE.Group();
      tree.add(trunk);
      tree.add(foliage);
      tree.position.set(x, 0, z);

      scene.add(tree);
    };

    // Create rocks
    const createRock = (x: number, z: number) => {
      const rockGeometry = new THREE.DodecahedronGeometry(0.3, 0);
      const rockMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
      const rock = new THREE.Mesh(rockGeometry, rockMaterial);
      rock.position.set(x, 0, z);
      scene.add(rock);
    };

    // Create water areas
    const createWater = (x: number, z: number, width: number, length: number) => {
      const waterGeometry = new THREE.PlaneGeometry(width, length);
      const waterMaterial = new THREE.MeshBasicMaterial({ color: 0x1E90FF, side: THREE.DoubleSide });
      const water = new THREE.Mesh(waterGeometry, waterMaterial);
      water.rotation.x = -Math.PI / 2;
      water.position.set(x, -0.01, z);
      scene.add(water);
    };

    // Add some trees, rocks, and water
    createTree(-1, 4); // Tree in Forest
    createTree(1, 8);  // Tree in Forest
    createTree(1, -1); // Tree in Desert
    createTree(-2, -7, true); // Tree in Snow

    createRock(1, 0); // Rock in Desert
    createRock(-1, -5); // Rock in Snow

    createWater(0, 12, 2, 1); // Water in Forest

    // Set camera to top-down view
    camera.position.set(0, 15, 0);
    camera.lookAt(0, 0, 0);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeDMap;
