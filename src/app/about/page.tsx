import MagnetLink from "@/components/MagnetLink";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <MagnetLink>
          <h1 className="text-7xl">about</h1>
        </MagnetLink>
      </div>
    </>
  );
}
