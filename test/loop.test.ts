const { test, expect } = require("@playwright/test");
const { allure } = require("allure-playwright");

test(`loop sum`, async () => {
  [
    [1, 2, 3],
    [1, -1, 0],
    [0, 0, 0]
  ].forEach(async (data) => {
    await expect(data[0] + data[1]).toBe(data[2]);
  });
});
