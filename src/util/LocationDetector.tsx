'use client'

import React, { useEffect } from 'react';
import api from './axios';
import axios from 'axios';

const LocationDetector = () => {
    useEffect(() => {
        // axios.get('https://ipapi.co/89.0.142.86/json')
        //     .then(res => console.log(res.data))
              api.get('/location')
            .then(res => console.log(res.data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default LocationDetector;