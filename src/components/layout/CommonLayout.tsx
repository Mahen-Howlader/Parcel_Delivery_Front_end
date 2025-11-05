import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


interface IProps {
    children: ReactNode
}

function CommonLayout({ children }: IProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="bg-primary pt-5">
                <Navbar></Navbar>
                <div className="grow-1 container mx-auto px-4 ">
                    {children}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default CommonLayout;