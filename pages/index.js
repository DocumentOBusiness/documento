import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
    weight: "400",
});

export default function Home() {
    return (
        <div className={roboto.className}>
            <div className="bg-gradient-to-r from-purple-400 to-yellow-400 items-center">
                <div id="navbar">
                    <Navbar />
                </div>
                <div id="intro">
                    <Intro />
                </div>
                <div id="services">
                    <Services />
                </div>
                <div id="timeline">
                    <Timeline />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </div>
        </div>
    );
}
