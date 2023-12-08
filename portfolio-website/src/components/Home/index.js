import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Typewriter from '../Typewriter'; // Import the Typewriter component
import { StyledHome } from './styles';

const Home = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let frameId;
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 5000);
        camera.position.z = 2;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 0;
        controls.maxDistance = 50;
        controls.enablePan = false;
        controls.update();

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCnt = 300000;
        const posArray = new Float32Array(particlesCnt * 3);
        for (let i = 0; i < particlesCnt * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 50;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: '#ffffff',
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            const { clientWidth, clientHeight } = currentRef;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        });

        return () => {
            cancelAnimationFrame(frameId);
            currentRef.removeChild(renderer.domElement);
        };
    }, []);
    const phrases = ['AI Enthusiast', 'Blockchain Developer', 'Innovator']; // Define the phrases for the typewriter

    return (
        <StyledHome ref={mountRef}>
            <h1>Welcome to Dev Sanghvi's Portfolio</h1>
            <Typewriter phrases={phrases} /> {/* Use the Typewriter component */}
            {/* You can style the typewriter text or wrap it with additional elements if needed */}
        </StyledHome>
    );
};

export default Home;
