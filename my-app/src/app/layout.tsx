
import { Parkinsans } from "next/font/google";
import "./globals.css";

const parkinsans
 = Parkinsans ({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
});


export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={parkinsans.className}> 
        {children}
      </body>
    </html>
  );
}
