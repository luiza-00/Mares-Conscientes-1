// pages/_app.js
import 'primereact/resources/primereact.min.css'; // Estilos base do PrimeReact
import 'primeicons/primeicons.css';               // Ícones do PrimeIcons
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema do PrimeReact
import '../style/main.css'; // Seu CSS global customizado
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return <Component {...pageProps} />;
}