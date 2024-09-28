import { Module } from "@nestjs/common";
import { WebsocketsModule } from "./websockets/websocket.module";
@Module({
    providers: [WebsocketsModule]
})
export class GatewaysModule {}