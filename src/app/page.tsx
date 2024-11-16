import MagnetLink from "@/components/MagnetLink";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center text-teal-400">
        <MagnetLink>
          <h1 className="text-7xl">home</h1>
        </MagnetLink>
      </div>
    </>
  );
}
