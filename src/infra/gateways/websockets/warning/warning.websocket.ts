import { MessageBody, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { WARNINGS,WARNINGS_EVENTS } from "./warning.enum";
import { Server, Socket } from "socket.io";
import { Logger } from "@nestjs/common";


@WebSocketGateway({ 
    namespace: WARNINGS.NAMESPACE, 
    transports: ['websocket'] ,
    cors: {
        origin: '*',
    }
})
export class NewsWebsocket implements OnGatewayInit, OnGatewayDisconnect {
    @WebSocketServer()
    private server: Server;
    private logger: Logger = new Logger()
    private users: Map<number, string[]> = new Map()

    afterInit(server: Socket) {
        //implement authentication here with server.use
        this.logger.log('News websocket initialized');
    }

    handleConnection(@MessageBody() server: Socket) {
        const userId = this.getUserId(server);
        this.handleSaveConnections(userId, server, WARNINGS_EVENTS.CONNECT);
    }

    handleSaveConnections(userId: number, server: Socket, event: WARNINGS_EVENTS) {
        let currentUsers = Array.isArray(this.users.get(userId)) ? this.users[userId] : [];

        if(event === WARNINGS_EVENTS.CONNECT) {
            currentUsers.push(server.id);
        }

        if(event === WARNINGS_EVENTS.DISCONNECT) {
            currentUsers = currentUsers.filter(user => user !== server.id);
        }

        this.users.set(userId, currentUsers);
    }

    getUserId(server: Socket) {
        //@verify use 
        const userId = server.handshake.auth.userId;
        if (!userId) {
            this.logger.error('User not authenticated');
            return this.handleDisconnect(server);
        }
        return userId;
    }

    handleDisconnect(server: Socket) {
        const userId = this.getUserId(server);
        this.handleSaveConnections(userId, server, WARNINGS_EVENTS.DISCONNECT);
        this.logger.log('News websocket disconnected');
    }

    notifyAboutCreatedWarnings(
        @MessageBody() body: { userId: number, newsId: string },
    ){
        this.server
            .to(this.users.get(body.userId))
            .emit(WARNINGS.CREATED_WARNINGS,{
                event: WARNINGS.CREATED_WARNINGS,
                newsId: body.newsId
            });
    }

    notifyAboutUpdatedWarnings(
        @MessageBody() body: { userId: number, newsId: string },
    ){
        this.server
            .to(this.users.get(body.userId))
            .emit(WARNINGS.UPDATED_WARNINGS,{
                event: WARNINGS.UPDATED_WARNINGS,
                newsId: body.newsId
            });
    }
}