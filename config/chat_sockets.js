//back end or server side that is going to interact with your front end chatting engine

module.exports.chatSockets=function(socketServer){
    let io=require('socket.io')(socketServer);

    io.sockets.on('connection',function(socket){
        console.log('new connection received',socket.id);

        socket.on('disconnect',function(){
            console.log('Socket disconnected');
        });

        socket.on('join_room',function(data){
            console.log('joining req received',data);

            socket.join(data.chatroom);
            io.in(data.chatroom).emit('user_joined',data);
        });
        socket.on('send_message', function(data){
            io.in(data.chatroom).emit('receive_message', data);
        });

    });
}