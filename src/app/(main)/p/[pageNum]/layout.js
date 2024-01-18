"use client";
import "@app/(main)/globals.css";
import SideBar from "@components/Sidebar/sidebar";
import Image from "next/image";
import SideBlog from "@components/Sideblog/Sideblog";
import { useEffect, useState } from "react";

const page = 0;
export default function RootLayout({ children, params }) {
  const [SideBlog, setSideBlog] = useState(null);

  useEffect(() => {
    const importComponent = async () => {
      const sideblog = (await import("@components/Sideblog/Sideblog")).default;
      setSideBlog(() => sideblog);
    };
    importComponent();
  }, []);

  return (
    <html lang="en">
      <body
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          margin: "0",
        }}
      >
        <SideBar />
        {/* <Image
          src="/images/back.avif"
          width={555}
          height={555}
          style={{
            position: "absolute",
            left: "3vw",
            height: "100%",
            minWidth: "72%",
            maxWidth: "72%",
            zIndex: "0",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          alt={""}
          quality={90}
          priority={true}
        /> */}
        {SideBlog && <SideBlog />}
        {children}
      </body>
    </html>
  );
}
