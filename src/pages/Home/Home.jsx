import { SectionHead } from "@pages/Home/components";
import "./styles/style.css";
function Home() {
  return (
    <div className={"relative"}>
      <SectionHead />
      {/* <div class="slanted-div bg-primary text-white pt-3">
        <h4>
          <marquee behavior="scroll" direction="">
            Report, Secure, and Protect
          </marquee>
        </h4>
      </div> */}
      <marquee behavior="scroll">This is the home</marquee>
    </div>
  );
}

export default Home;
