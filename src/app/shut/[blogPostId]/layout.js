import '@/app/globals.css';
import SideBar from "@/components/Sidebar/sidebar";
import Image from "next/image";

const page = 0;
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body style={{width:'100%', height: '100%', position:'absolute', display: "flex", margin: '0'}}>
        <SideBar />

        {children}</body>
        </html>
    );
}
