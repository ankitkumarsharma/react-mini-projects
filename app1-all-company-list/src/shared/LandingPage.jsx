import Home from "../components/Home";
import Footer from "./Footer";
import Header from "./Header";

const LandingPage = () => {
    return (
        <div className="flex flex-col w-full">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default LandingPage;