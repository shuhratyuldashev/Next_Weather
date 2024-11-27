"use client"
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store'; 
import '@/styles/global.css'

export default function Layout({ children }) {
  return (
    <Provider store={store}> 
      <html>
        <body className="Lading">
          {children}
        </body>
      </html>
    </Provider>
  );
}
