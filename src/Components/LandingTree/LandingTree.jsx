import * as THREE from 'three';
import { OrbitControls,Stars }from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import style from './LandingThree.module.css';
import Perfil from '../About/img/perfil.jpg'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll';


const sizes={
    width: window.innerWidth,
    height: window.innerHeight,
}
const Text = ({text, position, vAlign ='center', hAlign ='center'})=>{
    const font= useLoader(THREE.FontLoader, '/bold.blob')

    const config= useMemo(
        ()=>({
        font:font,
        size:0.5,
        height:0.2,
        curveSegments:32,
        bevelEnabled:true,
        bevelThickness:0.03,
        bevelSize:0.02,
        bevelOffset:0,
        bevelSegments:5,

    }),[font]
    )
    const mesh=useRef()
    useFrame(({clock})=>{
        const size = new THREE.Vector3()
        mesh.current.geometry.computeBoundingBox()
        mesh.current.geometry.boundingBox.getSize(size)
        mesh.current.position.x =
        hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
        mesh.current.position.y =
        vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
        mesh.current.rotation.y = mesh.current.rotation.x = mesh.current.rotation.z = 
        Math.sin(clock.getElapsedTime()) * 0.3;
    });
    return(
        <group position={position}>
            <mesh ref={mesh}>
                <textGeometry center args={[text,config]} />
                <meshNormalMaterial/>
            </mesh>
        </group>
    )
}
export default function LandingTree(){

    return(
        <div>

            <div className={style.container}>

                <p className={style.txt}>Hi! Welcome to <br/> my portfolio</p>
            <div>

                <Link className={style.link} to='navbar'>Go there</Link>
            </div>
            </div>
                    
                     
        <Canvas className={style.canvas}>
            <OrbitControls/>
            <Suspense fallback={null}>
                <perspectiveCamera
                fov={75}
                aspect={sizes.width / sizes.height}
                position={[0,0,3]}
                near={0.3}
                far={100}
                >
                    <Stars
                     radius={100}
                     depth={50}
                     count={5000}
                     factor={5}
                     saturation={2}
                     fade
                    />
                </perspectiveCamera>
            </Suspense>
            <ambientLight/>
        </Canvas>
        </div>
    )
}