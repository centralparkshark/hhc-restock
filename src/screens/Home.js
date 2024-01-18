import Settings from "../components/home/Settings";
import Greeting from "../components/home/Greeting";
import RestockButton from "../components/home/RestockButton";
import hhclogo from "../components/home/hhclogo.png";
import "./Home.css";

function Home() {
    return (
        <div className="box">
            <Settings />
            <Greeting />
            <RestockButton />
            <img className="logo" alt="Heinz History Center Cog Logo" style={{width: 214, height: 214}} src={hhclogo} />
        </div>
    );
}

export default Home;