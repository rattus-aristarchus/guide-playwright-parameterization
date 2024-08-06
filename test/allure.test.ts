const { test, expect } = require("@playwright/test");
const { allure } = require("allure-playwright");

[
  { x: 1, y: 2, sum: 3 },
  { x: 1, y: -1, sum: 0 },
  { x: 0, y: 0, sum: 0 }
].forEach(({ x, y, sum }) => {
  test(`sum of ${x} and ${y} should be ${sum}`, async () => {
    await allure.parameter("x", x);
    await allure.parameter("y", y);
    await allure.parameter("sum", sum);

    await expect(x + y).toBe(sum);
  });
});
