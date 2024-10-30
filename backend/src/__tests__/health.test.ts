// src/__tests__/health.node.test.ts
import test from 'node:test';
import assert from 'node:assert';
import { after, before, describe, it } from 'node:test';
import http from 'node:http';
import app from '../app';
import type { Server } from 'http';

let server: Server;

test('Health Check Endpoint', async (t) => {
    await t.test('setup', async () => {
        server = app.listen(0); // Use port 0 to get random available port
    });

    await t.test('should return 200 and ok status', async () => {
        const port = (server.address() as { port: number }).port;
        const response = await fetch(`http://localhost:${port}/health`);
        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.deepStrictEqual(data, { status: 'ok' });
    });

    await t.test('should respond quickly', async () => {
        const port = (server.address() as { port: number }).port;
        const start = Date.now();
        await fetch(`http://localhost:${port}/health`);
        const end = Date.now();

        assert.ok(end - start < 500, 'Response time should be less than 500ms');
    });

    await t.test('cleanup', async () => {
        await new Promise<void>((resolve) => {
            server.close(() => resolve());
        });
    });
});