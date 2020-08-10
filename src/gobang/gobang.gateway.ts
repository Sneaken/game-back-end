import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'gobang' })
export class GobangGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  @SubscribeMessage('join')
  handleJoin(client: Socket, payload: string): void {
    client.in(payload).emit('system', `默默人 加入房间 ${payload}`); //包括自己
    console.log(client);
  }

  @SubscribeMessage('leave')
  handleLeave(client: Socket, payload: string): void {
    client.leave(payload);
    console.log(payload, 'leave');
  }

  afterInit(server: Server) {
    // console.log('??', server);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }
}
