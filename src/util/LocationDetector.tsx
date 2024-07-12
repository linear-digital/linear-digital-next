'use client'

import React, { useEffect } from 'react';
import api from './axios';
import Cookie from "js-cookie";
import ScrollToTop from "react-scroll-to-top";

const LocationDetector = () => {
  useEffect(() => {
    // axios.get('https://ipapi.co/89.0.142.86/json')
    //     .then(res => console.log(res.data))
    api.get('/location')
      .then(res => {
        Cookie.set('country', res.data.country);
      })
  }, [])
  return (
    <div>
      <ScrollToTop smooth color="white" style={{ backgroundColor: "var(--tg-primary-color" }} />
    </div>
  );
};

export default LocationDetector;

export const getCountry = Cookie.get('country') || "BD";



export const useFastScroll = (scrollSpeed = 2) => {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        window.scrollBy(0, scrollSpeed * 50); // Increase this value to scroll faster
      } else {
        window.scrollBy(0, -scrollSpeed * 50); // Increase this value to scroll faster
      }
      event.preventDefault();
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollSpeed]);
};

