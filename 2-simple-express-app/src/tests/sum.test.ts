 import {describe, expect, test, it} from '@jest/globals';
import request from "supertest";
import { app } from "../index"

describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: 1,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
      });

      it("should return the sum of two negative numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: -1,
          b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
      });

      it("should return the sum of two zero number", async () => {
        const res = await request(app).post("/sum").send({
          a: 0,
          b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
      });
});

describe ("POST /multiply", () => {
  it("should return the product of two mumbers", async () => {
    const res = await request(app).post("/multiply").send({
      a: 2,
      b: 2
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.answer).toBe(4)
  })

  it("should return the product of negative numbers", async () => {
    const res = await request(app).post("/multiply").send({
      a : -2,
      b: 2
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.answer).toBe(-4)
  })

  it("should return the product of number with zero", async () => {
    const res = await request(app).post("/multiply").send({
      a : 0,
      b: 2
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.answer).toBe(0)
  })

})