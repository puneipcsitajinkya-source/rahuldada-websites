import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Navchaitanya Yuva Mandal — Water, Birds & Villages, Shiroli",
    template: "%s | Navchaitanya Yuva Mandal",
  },
  description:
    "Navchaitanya Bahuuddeshiya Vikas Yuva Mandal is a grassroots NGO from Shiroli, Yavatmal — working since 2005 on bird water conservation (paanpoi), tree plantation, water harvesting, rural health and sustainable livelihoods in Maharashtra.",
  keywords: [
    "NGO Maharashtra",
    "Yavatmal NGO",
    "bird conservation Shiroli",
    "paanpoi water",
    "tree plantation Ghatanji",
    "Navchaitanya Yuva Mandal",
    "rural development Vidarbha",
  ],
  openGraph: {
    title: "Navchaitanya Yuva Mandal — Shiroli, Yavatmal",
    description:
      "20+ years of grassroots work — bird water stations, tree plantation and rural development in Vidarbha, Maharashtra.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
