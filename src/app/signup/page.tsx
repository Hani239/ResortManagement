import Footer from "@/container/Footer";
import Nav from "@/component/Nav_Exp";
import Register from "@/component/Register";

export default function Home() {
    return (
        <main className=''>
            <div className="relative flex z-10">
                <Nav></Nav>
            </div>
            <div>
                <Register/>
            </div>
            <div>
                <Footer />
            </div>
        </main>
    )
}