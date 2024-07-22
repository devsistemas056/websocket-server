const socketsController = (socket)=>{
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', ()=>{
        //console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback)=>{
        const id = 123456;
        callback(id);
        // Retorno de evento desde server hacia cliente:
        socket.broadcast.emit('enviar-mensaje', payload);
    });

}

module.exports = {
    socketsController
}