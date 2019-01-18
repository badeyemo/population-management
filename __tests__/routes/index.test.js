process.env.NODE_ENV = "test";
const db = require("../../models");
const request = require("supertest");
const app = require("../../app");

const seedData = [
    {
      "id": 1,
      "locationName": "France",
      "male": 500,
      "female": 600,
      "parentLocationId": null,
      "childLocation": [
        {
          "id": 2,
          "locationName": "Paris",
          "male": 700,
          "female": 1200,
          "createdAt": "2019-01-17T13:05:24.702Z",
          "updatedAt": "2019-01-17T13:05:24.702Z",
          "parentLocationId": 1
        }
      ],
      "total": 3000
    },
    {
      "id": 2,
      "locationName": "Paris",
      "male": 700,
      "female": 1200,
      "parentLocationId": 1,
      "childLocation": [],
      "total": 1900
    }
  ]

  const insertSeedData = async () => {
    await db.Location.bulkCreate(seedData);
  };


beforeEach(async (done) => {
  await insertSeedData();
  done();
});

afterEach(async (done) => {
  await db.Location.destroy({
    where: {
      locationName: seedData[0].locationName
    },
    truncate: true
  })
  done()
});

afterAll(async (done) => {
  done()
});

describe("GET / ", () => {
  test("It should respond with a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.body).toEqual({"message": "Welcome to the Population Management API"});
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /locations", () => {
  test("It should respond with an array of locations", async () => {
    const response = await request(app).get("/locations");
    expect(response.body.data.length).toBe(2)
    expect(response.body.data[0]).toHaveProperty("id");
    expect(response.body.data[0]).toHaveProperty("locationName");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /locations", () => {
  test("It should respond with an array of students", async () => {
    const newLocation = await request(app)
      .post("/locations")
      .send({
        "locationName": "Ikotun",
        "male": 500,
        "female": 600,
        "parentLocationId": null
      });
    expect(newLocation.body.data.locationName).toBe("Ikotun");
    expect(newLocation.body.data).toHaveProperty("locationName");
    expect(newLocation.body.data).toHaveProperty("male");
    expect(newLocation.statusCode).toBe(201);

    // make sure we have 3 locations
    const response = await request(app).get("/locations");
    expect(response.body.data.length).toBe(3);
  });
});

describe("PUT /locations/:name", () => {
  test("It should respond with an array of locations", async () => {
    const newLocation = await request(app)
      .post("/locations")
      .send({
        "locationName": "Ikotun",
        "male": 500,
        "female": 600,
        "parentLocationId": null
      });

    const updatedLocation = await request(app)
      .put(`/locations/Borno`)
      .send({
        "locationName": "Ikotun",
        "male": 500,
        "female": 600,
        "parentLocationId": null
      });
    expect(updatedLocation.body.status).toBe("success");
    expect(updatedLocation.body).toHaveProperty("message");
    expect(updatedLocation.body.message).toBe("Location name was updated successfully");
    expect(updatedLocation.statusCode).toBe(200);

    // make sure we have 3 students
    const response = await request(app).get("/locations");
    expect(response.body.data.length).toBe(3);
  });
});

describe("DELETE /locations/:locationName", () => {
  test("It should respond with an array of students", async (done) => {
    const newLocation = await request(app)
      .post("/locations")
      .send({
        locationName: "Another one",
        male: 600,
        female: 400,
        parentLocationId: null
      });
    const removedLocation = await request(app).delete(
      `/locations/${newLocation.body.data.locationName}`
    );
    expect(removedLocation.body).toEqual({
      status: 'success',
      message: 'Location name deleted successfully',
    });
    expect(removedLocation.statusCode).toBe(200);

    // make sure we still have 2 students
    const response = await request(app).get("/locations");
    expect(response.body.data.length).toBe(2);
    done()
  });
});

describe("Test a 404", () => {
  test("It should respond with a 404 status", async () => {
    const response = await request(app).get("/nowhere");
    expect(response.statusCode).toBe(404);
  });
});