import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="scroll-smooth">
      <Component {...pageProps} />
    </div>
  );
}