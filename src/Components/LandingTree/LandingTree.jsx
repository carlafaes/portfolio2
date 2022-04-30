import * as THREE from 'three';
import { OrbitControls,Stars }from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import style from './LandingThree.module.css';
import Perfil from '../About/img/perfil.jpg'
import Typewriter from 'typewriter-effect'
import { Link as Scroll } from 'react-scroll';
import {Link} from 'react-router-dom';
import '../buttons.css';



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

    const tab = <>&nbsp;</>;

    return(
        <div>
            <div className={style.container_general}>
                <div className={style.titulos}>

                <div className={style.title}>
                <h2 className={style.title_}>Hi! Welcome</h2>
                <h2 className={style.title_}>Hi! Welcome</h2>
                </div>
                {tab}
                <div className={style.title2}>
                <h2 className={style.title_}> to  my portfolio</h2>
                <h2 className={style.title_}> to my portfolio</h2>
                </div>
                </div>
                    
                <div className={style.container_btn}>

                    <Link to='/home'>
                    <button className='btn_'>
                        <span id='span1'></span>
                        <span id='span2'></span>
                        <span id='span3'></span>
                        <span id='span4'></span>
                        Go there
                    </button>
                    </Link>
                </div>
            </div>                  
        <Canvas className={style.canvas}>
            <OrbitControls/>
            <Suspense fallback={null}>
                <perspectiveCamera
                fov={95}
                aspect={sizes.width / sizes.height}
                position={[0,0,1]}
                near={0.2}
                far={100}
                >
                    <Stars
                     radius={100}
                     depth={20}
                     count={7000}
                     factor={7}
                     saturation={1}
                     fade
                    />
                </perspectiveCamera>
            </Suspense>
            <ambientLight/>
        </Canvas> 
        </div>
    )
}