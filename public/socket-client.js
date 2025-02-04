const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', ()=>{
    console.log('Conectado');
    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
});

socket.on('disconnect', ()=>{
    console.log('Desconectado');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

// Evento enviado desde el servidor:
socket.on('enviar-mensaje', (payload)=>{
    console.log(payload);
});

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: "12345",
        fecha: new Date()
    }
    
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el server ', id);
    });
});