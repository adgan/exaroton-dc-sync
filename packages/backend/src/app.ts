// src/app.ts
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app: Express = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Request logging
app.use(express.json()); // Parse JSON bodies

// Error handling middleware
interface ErrorResponse {
    message: string;
    stack?: string;
}

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
    const response: ErrorResponse = {
        message: err.message,
    };

    if (process.env.NODE_ENV !== 'production') {
        response.stack = err.stack;
    }

    res.status(500).json(response);
});

// Basic routes
app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

// Server startup
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;