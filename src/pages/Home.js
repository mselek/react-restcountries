import Countries from "../components/Countries";
import Navigation from "../components/Navigation";

const Home = () => {
return (
    <div className="home">
        <Navigation />
        <h1>Liste des Pays</h1>
        <Countries />
    </div>
)
}

export default Home;