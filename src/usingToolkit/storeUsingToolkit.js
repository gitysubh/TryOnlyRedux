// The store is created using the configure store methods from redux toolkit

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './store/reducer'
import { logger } from '../MiddleWare/logge';

export default function () {
    return configureStore({
        reducer,
        middleware:[
            ...getDefaultMiddleware(),  // All default middleware that comes from redux-toolkit
            logger    
        ]
    });
};