import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <div className="container">
                <main className="container">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout
