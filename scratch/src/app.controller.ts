// Core
import {Controller, Get} from "@nestjs/common";

@Controller() // localhost:3020/
// @Controller('app') ex: /app/bye
export class AppController {
    @Get()  // localhost:3020/
    getRootRoute() {
        return 'Hi there!'
    }

    @Get('/bye') // /bye
    getByeThere() {
        return 'bye there'
    }
}