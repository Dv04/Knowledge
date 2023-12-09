import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Typewriter from '../Typewriter';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Skills from '../Skills';
import { StyledHome, Section } from './styles';

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
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '-1'; // Ensure canvas is behind other content
        currentRef.appendChild(renderer.domElement);

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        currentRef.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 0;
        controls.maxDistance = 7;
        controls.enablePan = false;
        controls.update();


        const particlesCnt = 10000;
        // Efficiently create particles geometry
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particlesCnt * 3);
        for (let i = 0; i < particlesCnt * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: '#ffffff',
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Animation loop optimization
        const animate = () => {
            requestAnimationFrame(animate);
            // Any particle updates go here
            renderer.render(scene, camera);
        };

        animate();
        // Ensure the canvas gets the same z-index but lower than content
        renderer.domElement.style.zIndex = "1";

        // Add resize listener to update camera and renderer size
        const handleResize = () => {
            const { clientWidth, clientHeight } = mountRef.current;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            if (currentRef && renderer.domElement) { // Check that the elements are not null
                currentRef.removeChild(renderer.domElement);
            }
        };
    }, []);

    const phrases = ['AI Enthusiast', 'Blockchain Developer', 'Innovator']; // Define the phrases for the typewriter

    return (
        <StyledHome ref={mountRef}>
            <h1 id='Main'>Welcome to Dev Sanghvi's Portfolio <br></br> <Typewriter phrases={['AI Enthusiast', 'Blockchain Developer', 'Innovator']} /> </h1>

            <div className="filler"></div>
            {/* About Section */}
            <Section id="about">
                <About />
            </Section>
            <div className="filler"></div>
            {/* Projects Section */}
            <Section id="projects">
                <Projects />
            </Section>
            <div className="filler"></div>
            {/* Skills Section */}
            <Section id="skills">
                <Skills />
            </Section>
            <div className="filler"></div>
            {/* Contact Section */}
            <Section id="contact">
                <Contact />
            </Section>
        </StyledHome>
    );
};

export default Home;


{/* About Section */ }
<Section id="about">
    <About />
</Section>

{/* Projects Section */ }
<Section id="projects">
    <Projects />
</Section>

{/* Skills Section */ }
<Section id="skills">
    <Skills />
</Section>

{/* Contact Section */ }
<Section id="contact">
    <Contact />
</Section>