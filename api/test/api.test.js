import { request } from "express";

describe('GET /users/', () => {
    it('should return all users', async() => {
        const res = await request(app).get('')
    });
    
});
