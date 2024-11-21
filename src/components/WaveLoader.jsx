import { waveform } from "ldrs";
function WaveLoader() {
  waveform.register();

  return (
    <div
      className="
        w-full flex  items-center justify-center mt-24"
    >
      <l-waveform size="150" stroke="5" speed="1.2" color="#DF3602"></l-waveform>
    </div>
  );
}

export default WaveLoader;
