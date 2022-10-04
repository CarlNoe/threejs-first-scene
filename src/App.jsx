import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import "./App.css";

function App() {
  //A cube that rotates and moves from left and right
  const [active, setActive] = useState(false);

  const cubeColor = active ? "hotpink" : "orange";

  return (
    <Canvas>
      <mesh
        onClick={() => {
          setActive(!active);
        }}
        scale={active ? [2, 2, 2] : [1, 1, 1]}
        rotation={[0, 0, 0]}
      >
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="hotpink" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </mesh>
    </Canvas>
  );
}

export default App;
