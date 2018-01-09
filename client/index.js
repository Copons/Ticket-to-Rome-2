import React from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';
import TicketToRide2 from './ticket-to-ride-2';

const { log } = console;
const socket = io('http://localhost:3000');

socket.on('connect', () => log(`Client [${socket.id}] connected.`));

render(<TicketToRide2 />, document.getElementById('root'));
