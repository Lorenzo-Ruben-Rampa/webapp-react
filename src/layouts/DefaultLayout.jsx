import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default DefaultLayout
