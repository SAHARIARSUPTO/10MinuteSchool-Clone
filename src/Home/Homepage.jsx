import FifthContent from "../FifthContent/FifthContent";
import FourthContent from "../FourthContent/FourthContent";
import Navbar from "../Navbar/Navbar";
import SecondContents from "../SecondContents/SecondContents";
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
        </div>
    );
};

export default Homepage;
