import { beforeEach, describe, expect, it, vi } from "vitest";

import handler from "pages/api/version";
import createMockRes from "test-utils/create-mock-res";

describe("pages/api/version", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("returns the app version from environment variable", async () => {
        process.env.APP_VERSION = "1.2.3";

        const req = {};
        const res = createMockRes();

        await handler(req, res);

        expect(res.statusCode).toBe(200);
        expect(res.json).toHaveBeenCalledWith({ version: "1.2.3" });
    });

    it("returns 'unknown' if APP_VERSION is not set", async () => {
        delete process.env.APP_VERSION;

        const req = {};
        const res = createMockRes();

        await handler(req, res);

        expect(res.statusCode).toBe(200);
        expect(res.json).toHaveBeenCalledWith({ version: "unknown" });
    });
});