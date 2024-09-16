import { useGLTF, useScroll, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function MacContainer () {
    let model = useGLTF("./mac.glb")
    let meshes = {}
    model.scene.traverse((e) => {
        //@ts-ignore
        meshes[e.name] = e
    })
    let tex = useTexture("./red.jpg")
    //@ts-ignore
    meshes["screen"].rotation.x = THREE.MathUtils.degToRad(180)
    //@ts-ignore
    meshes["matte"].material.map = tex
    //@ts-ignore
    meshes["matte"].material.emissiveIntensity = 0
    //@ts-ignore
    meshes["matte"].material.metalness = 0
    //@ts-ignore
    meshes["matte"].material.roughness = 1

    let data = useScroll()

    useFrame(() => {
        //@ts-ignore
        meshes["screen"].rotation.x = THREE.MathUtils.degToRad(180 - data.offset*90)
    })

    return (
        <group position={[0, -10, 0]}>
            <primitive object={model.scene} />
        </group>
    )
}