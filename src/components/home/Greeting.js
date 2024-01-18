var name = "Vinncent"; //will need to import from settings page after created

function Greeting() {
    return (
        <div className="greeting--box">
            <h1 className="hello">
               Hi, <br/> {name}!
            </h1>
        </div>
    );
}

export default Greeting;