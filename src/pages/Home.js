import pawBg from '../assets/paw-bg.jpg';

export default function Home() {
  return (
    <div className="text-center p-10 bg-cover" style={{ backgroundImage: `url(${pawBg})` }}>
      <h1 className="text-4xl font-bold">Welcome to Cadence's Dog House! 🐾</h1>
      <p className="mt-4 text-xl">Sit. Stay. Explore my portfolio!</p>
    </div>
  );
}
