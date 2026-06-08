import './globals.css';

export const metadata = {
  title: 'Furqan Ahmed | Software Engineer',
  description: 'Furqan Ahmed is a software engineer who specializes in building exceptional digital experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#0d0d0d" />
        <style>{`html, body { background-color: #0d0d0d !important; }`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
