
import BambooCluster from "./BambooCluster";
import GroundLayer from "./GroundLayer";
import TulsiPlant from "./TulsiPlant";
import EarthenPots from "./EarthenPots";



export default function JB() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <BambooCluster/>
      <GroundLayer />
      <TulsiPlant />
      <EarthenPots />
    </div>
  );
}