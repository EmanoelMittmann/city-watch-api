import { Module } from "@nestjs/common";
import { NewsWebsocket } from "./warning/warning.websocket";

@Module({
    imports: [],
    controllers: [],
    providers: [NewsWebsocket],
    exports: [NewsWebsocket]
})
export class WebsocketsModule {}