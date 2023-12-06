// src/components/Home/index.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Container } from './styles';

const Home = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add your Three.js objects here
        // ...

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            // Update your objects
            // ...
            renderer.render(scene, camera);
        };

        animate();

        return () => mountRef.current.removeChild(renderer.domElement);
    }, []);

    return (
        <Container ref={mountRef}>
            <h1>Welcome to Dev Sanghvi's Portfolio</h1>
        </Container>
    );
};

export default Home;
