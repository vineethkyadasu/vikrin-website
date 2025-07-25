import '@/styles/globals.css';
import FloatingContactButtons from '../components/FloatingContactButtons';

export default function App({ Component, pageProps }) {
  return (
    <div className="scroll-smooth">
      <Component {...pageProps} />
      <FloatingContactButtons />
    </div>
  );
}
