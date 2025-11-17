// src/app/LayoutWrapper.js
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Presale from "./component/Presale.js";

export default function LayoutWrapper({ children }) {
  return (
    <>

        <Navbar />


<div className="flex flex-col lg:flex-row w-full min-h-screen mx-auto bg-black px-4 md:px-8 gap-6">
  {/* Left Scrollable Content */}
  <main className="w-full lg:w-[70%] pt-20 flex flex-col justify-center items-center ">
    {children}
  </main>

  {/* Right Presale Section */}
  <aside
    className="
      w-full 
      lg:w-[30%]
      hidden
      lg:block
      lg:sticky 
      lg:top-20 
      self-start
      h-auto 
      p-4 
    "
  >
    <Presale />
  </aside>
</div>

      <Footer />
    </>
  );
}
