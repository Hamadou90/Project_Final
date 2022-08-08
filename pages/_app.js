import '../styles/globals.css'
import { useState, useEffect } from "react";
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', () =>{
      setProgress(100);
    });
    router.events.on('routeChangeStart', () =>{ // Event listener
      setProgress(40);
    });

    console.log('Hey, I am a useEffect from _app.js !!!');

    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
        saveCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }

    const connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    if (connectedUser) {
      setUser({ value: connectedUser.token, email: connectedUser.email });
      console.log(user);
    }
    setKey(Math.random());
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem('connectedUser');
    setUser({ value: null });
    setKey(Math.random()); // In order to have another key and make the component to "Re-Render"
    router.push('/');
  }

  return <>
    <LoadingBar
      color= '#ff2d55'  //'#F345EF'
      progress={progress}
      waitingTime={200}
      onLoaderFinished={() => setProgress(0)}
    />
    {key && <NavBar logout={logout} user={user} key={key} />}
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
