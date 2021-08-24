import express from 'express';
import configure from './app';

// Configure and start the app.
configure(express()).listen(6007);
