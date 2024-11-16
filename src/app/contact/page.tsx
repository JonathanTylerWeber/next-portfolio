import MagnetLink from "@/components/MagnetLink";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar hoverColor="bg-blue-500" />
      <div className="h-screen flex justify-center items-center">
        <MagnetLink>
          <h1 className="text-7xl">contact</h1>
        </MagnetLink>
      </div>
    </>
  );
}
