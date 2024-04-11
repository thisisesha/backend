const mongoose = require("mongoose");
const request = require("supertest");
const signinHandler = require("../UserAuth/users/routes.js");


require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });

  describe('Login functionality', () => {
    it('should return true for valid username and password', () => {
      expect(signinHandler('esha', 'esha123')).toBe(true);
    });
  
    it('should return false for invalid username and password', () => {
      expect(signinHandler('invalidUsername', 'invalidPassword')).toBe(false);
    });
  
    it('should return false if username or password is missing', () => {
      expect(signinHandler('', 'validPassword')).toBe(false);
      expect(signinHandler('validUsername', '')).toBe(false);
    });
  });