import "../styles/home.css";
import Header from "./Header";
import SideBar from "./SideBar";
import HeroProducts from "./HeroProducts"
export default function Home(){
    return(
        <>
        <Header />
        <div className="home-container">
        <main>
            <SideBar />
            <HeroProducts />
        </main>
        </div></>
    );
}