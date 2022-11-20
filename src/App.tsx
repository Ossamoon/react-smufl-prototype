import {
  Score,
  Staff,
  StaffPath,
  GClef,
  TimeSig2,
  NoteheadHalf,
} from "./lib/bravura";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Score width={600} height={400} staffSpaceHeight={16}>
        <Staff width={32} x={2} y={3}>
          <GClef line={2} x={0.2} />
          <TimeSig2 line={4} x={3.4} transform="scale(0.92,0.92)" />
          <TimeSig2 line={2} x={3.4} transform="scale(0.92,0.92)" />
          <NoteheadHalf line={1.5} x={8} transform="scale(0.92,0.92)" />
        </Staff>
      </Score>
    </div>
  );
}

export default App;
