import "dotenv/config";
const MONGO_URL = process.env.MONGO_URL;
import request from "supertest";
import mongoose from "mongoose";
import { CreateApp } from "../app";
import user from "../models/user";

describe("creation d'un user et login", () => {
  let app;

  // Avant de lancer les tests, on lance l'application
  beforeAll(() => {
    mongoose
      .connect(MONGO_URL)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error(err));
    app = CreateApp();
  });

  // Les tests
  it("should create a new ", async () => {
    const response = await request(app).post("/auth/register").send({
      email: "toto@email.com",
      password: "1234",
    });
    expect(response.statusCode).toBe(201);
  });

  it("should login", async () => {
    const response = await request(app).post("/auth/login").send({
      email: "toto@email.com",
      password: "1234",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  // Apres les tests, on ferme la connexion a la base de donnees

  afterAll(async () => {
    await user.deleteOne({ email: "toto@email.com" });
    await mongoose.connection.close();
  });
});
