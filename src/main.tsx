
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance optimizations
if ('loading' in HTMLImageElement.prototype) {
  console.log('Native lazy loading supported');
} else {
  // Fallback lazy loading could be imported here if needed
  console.log('Native lazy loading not supported');
}

// Preconnect to critical domains
const preconnectLinks = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
];

preconnectLinks.forEach(href => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = href;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
});

// Mount the application
createRoot(document.getElementById("root")!).render(<App />);
