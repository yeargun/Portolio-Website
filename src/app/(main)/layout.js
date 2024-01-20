"use client";
import "./globals.css";
import SideBar from "@components/Sidebar/sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const page = 0;
export default function RootLayout({ children, params }) {
  const [SideBlog, setSideBlog] = useState(null);
  const [NewsletterComp, setNewsletterComp] = useState(null);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/" || pathName.split("/")[1] === "p") {
      const importSideBlogComp = async () => {
        const sideblog = (await import("@components/Sideblog/Sideblog"))
          .default; //ssr would have be better
        setSideBlog(() => sideblog);
      };
      importSideBlogComp().then(() => {
        import("@components/Newsletter/Newsletter").then((module) => {
          setNewsletterComp(() => module.default);
        });
      });
    }
  }, [pathName]);

  return (
    <html lang="en">
      <head>
        <title>yeargun</title>
        <meta property="og:title" content="yeargun" />
        <meta property="og:description" content="yeargun's personal blog" />
        <meta httpEquiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preload" href="/assets/CV.pdf" />
      </head>

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
        {(pathName === "/" || pathName === "/p") && SideBlog && (
          <SideBlog NewsletterComp={NewsletterComp} />
        )}
        {children}
      </body>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "stuf24 Studio",
          name: "Argun BASGAN AHAH",
          url: "https://yeargun.dev",
          sameAs: [
            "https://www.instagram.com/yeargun",
            "https://twitter.com/yeargun24",
            "https://www.linkedin.com/in/yeargun",
          ],
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://yeargun.dev",
            },
            "query-input": "required name=search_term_string",
          },
        })}
      </script>
    </html>
  );
}
