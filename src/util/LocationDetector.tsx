'use client'

import React, { useEffect } from 'react';
import api from './axios';
import axios from 'axios';

const LocationDetector = () => {
    useEffect(() => {
        axios.get('https://ipapi.co/::1/country')
            .then(res => console.log(res.data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default LocationDetector;