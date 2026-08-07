const request = require("supertest");
const app = require("../src/app");

describe("API", () => {
  test("GET / retorna status online", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("online");
  });

  test("GET /health retorna status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("GET /api/tarefas retorna uma lista não vazia", async () => {
    const res = await request(app).get("/api/tarefas");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("rota inexistente retorna 404", async () => {
    const res = await request(app).get("/rota-que-nao-existe");
    expect(res.statusCode).toBe(404);
  });
});
