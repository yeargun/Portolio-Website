import "@app/(main)/globals.css";
import SideBar from "@components/Sidebar/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
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

        {children}
      </body>
    </html>
  );
}
