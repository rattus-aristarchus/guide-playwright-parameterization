const { test, expect } = require("@playwright/test");
const { allure } = require("allure-playwright");

test(`basic sum`, async () => {
  await expect(1 + 2).toBe(3);
});
