import { Tldraw } from 'tldraw';
import './App.css';

export default function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw inferDarkMode />
    </div>
  );
}
