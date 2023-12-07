// // src/components/Home/index.js
// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { Container } from './styles';

// const Home = () => {
//     const mountRef = useRef(null);

//     useEffect(() => {
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer();
//         const currentRef = mountRef.current;
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         mountRef.current.appendChild(renderer.domElement);

//         // Add your Three.js objects here
//         // ...

//         camera.position.z = 5;

//         const animate = () => {
//             requestAnimationFrame(animate);
//             // Update your objects
//             // ...
//             renderer.render(scene, camera);
//         };

//         animate();

//         return () => currentRef.removeChild(renderer.domElement);
//     }, []);

//     return (
//         <Container ref={mountRef}>
//             <h1>Welcome to Dev Sanghvi's Portfolio</h1>
//         </Container>
//     );
// };

// export default Home;


// src/components/Home/index.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { StyledHome } from './styles';

const Home = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let frameId;
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 2;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 1;
        controls.maxDistance = 1000;
        controls.enablePan = false;
        controls.update();

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCnt = 5000;
        const posArray = new Float32Array(particlesCnt * 3);
        for (let i = 0; i < particlesCnt * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5;
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

    return (
        <StyledHome ref={mountRef}>
            <h1>Welcome to Dev Sanghvi's Portfolio</h1>
        </StyledHome>
    );
};

export default Home;
