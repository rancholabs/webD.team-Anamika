/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 scene.gltf
Author: JeremyW (https://sketchfab.com/JeremyW)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/star-b092c1d27d954c8e9c051299ef74038d
Title: Star
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="star" position={[0, 0.601, 0.418]} scale={8}>
              <mesh name="star_0" geometry={nodes.star_0.geometry} material={materials.glassesFrames} />
              <mesh name="star_1" geometry={nodes.star_1.geometry} material={materials.lens} />
              <mesh name="star_2" geometry={nodes.star_2.geometry} material={materials.Star} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
