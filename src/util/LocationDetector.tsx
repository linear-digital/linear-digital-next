'use client'

import React, { useEffect } from 'react';
import api from './axios';
import Cookie from "js-cookie";

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

        </div>
    );
};

export default LocationDetector;

export const getCountry = Cookie.get('country') || "BD";