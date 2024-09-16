import { Canvas } from "@react-three/fiber"
import "./styles.css"
import { Environment, ScrollControls } from "@react-three/drei"
import { MacContainer } from "./components/mac"

export default function App() {

  return (
    <div className="w-full h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-6 text-white font-helvetica flex gap-16 pb-3 px-4 border-b border-stone-700">
      {["iPhone", "iPad", "Airpods", "Macos", "Services"].map((e) => (
        <a href="" key={e} className="text-xs ">{e}</a>
      ))}
      </div>
      <div className="absolute flex flex-col items-center top-24 gap-2 left-1/2 -translate-x-1/2 text-white font-helvetica">
        <h3 className="masked text-7xl tracking-tighter font-bold" data-text="macbook pro.">macbook pro.</h3>
        <div className="flex flex-col items-center">
          <h5 className="font-light tracking-tighter">Oh so pro!</h5>
          <h6 className="w-3/4 text-center text-sm font-thin tracking-tight">Unleash the power of performance with the ultimate tool for creativity and productivity.</h6>
        </div>
      </div>
      <Canvas camera={{fov: 10, position: [0, -10, 220]}}>
        <Environment files= {["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]} />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}
