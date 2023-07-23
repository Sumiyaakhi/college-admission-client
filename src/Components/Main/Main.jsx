import Navbar from '../../Home/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';

const Main = () => {
    return (
        <div className=" ">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    );
};

export default Main;