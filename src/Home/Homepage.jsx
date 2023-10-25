import FifthContent from "../FifthContent/FifthContent";
import Footer from "../Footer/Footer";
import FourthContent from "../FourthContent/FourthContent";
import Navbar from "../Navbar/Navbar";
import SecondContents from "../SecondContents/SecondContents";
import SeventhContent from "../SeventhContent/SeventhContent";
import SixthContent from "../SixthContent/SixthContent";
import ThirdContent from "../ThirdContent/ThirdContent";
import UpperContent from "../UpperContent/UpperContent";

const Homepage = () => {
    return (
        <div>
          <Navbar></Navbar>
          <UpperContent></UpperContent>
          <SecondContents></SecondContents>
          <ThirdContent></ThirdContent>
          <FourthContent></FourthContent>
          <FifthContent></FifthContent>
          <SixthContent></SixthContent>
          <SeventhContent></SeventhContent>
          <Footer></Footer>
        </div>
    );
};

export default Homepage;
