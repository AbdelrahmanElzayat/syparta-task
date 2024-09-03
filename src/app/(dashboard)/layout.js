import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
import "../globals.css";
import SideBar from "../../components/sidebar/SideBar";
import HeaderProfile from "../../components/header-profile/HeaderProfile";
import { Providers } from "../../components/redux/Providers"; // Import the provider

// const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Cyparta",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>
        <Providers>
          {" "}
          {/* Wrap the main content with Providers */}
          <main className="container min-h-screen lg:custom-min-h flex items-start justify-start gap-10 py-8">
            <SideBar />
            <div className="flex flex-col basis-[100%] lg:basis-[70%]">
              <HeaderProfile />
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
