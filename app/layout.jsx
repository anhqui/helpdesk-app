import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Help Desk App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}