import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Home=() =>{
    return(
        <div>
            <Nav/>
        <h1> <Link to="/about"> click to go to about </Link> This is home Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt amet iusto numquam rem corrupti optio quo eum ab neque, harum vel excepturi, quaerat debitis adipisci nobis cumque nemo accusantium?
        </h1>
        </div>
        

    )
    
}

export default Home;