import { pino } from "pino";

export class Logger {
    private logger: pino.Logger;

    constructor(className: string) {
        this.logger =  pino().child({ class: className });
    }

    info(message: string, ...args: any[]) {
        this.logger.info(message, ...args);
    }

    warn(message: string, ...args: any[]) {
        this.logger.warn(message, ...args);
    }

    error(message: string, ...args: any[]) {
        this.logger.error(message, ...args);
    }

    debug(message: string, ...args: any[]) {
        this.logger.debug(message, ...args);
    }
}
