type BadgeProps = { label: string; level: number };

function Badge({ label, level }: BadgeProps) {
  return <p>{label}: {level > 70 ? "LOUD" : "ok"}</p>;
}

export default function App() {
  const levels = [62, 71, 58];
  return (
    <>
      <h1>Mics</h1>
      <Badge label="mic1" level={levels[0]} />
      <Badge label="mic2" level={levels[1]} />
      <Badge label="mic3" level={levels[2]} />
    </>
  );
}

// Prediction: mic1: ok, mic2: LOUD