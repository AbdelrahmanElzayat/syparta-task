// app/auth/layout.tsx
import { Lexend } from "next/font/google";
import "../globals.css";
import { Providers } from "../../components/redux/Providers"; // Import the provider
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const lexend = Lexend({ subsets: ["latin"] });

// export const metadata = {
//   title: "Auth Layout",
//   description: "Auth layout description",
// };

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>
        <Providers>
          <main className="min w-full h-screen">
            <ToastContainer />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
