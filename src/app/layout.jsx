import "./globals.css";

export const metadata = {
  title: "Weather",
  description: "Weather Forecast Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
