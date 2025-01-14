import { test, expect } from "@playwright/test"

test.use({ baseURL: "https://wasm.example.nuxt.space/" })
test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("Sum is correctly calculated", async ({ page }) => {
  await expect(page.getByText("a = 100")).toBeVisible()
  await expect(page.getByText("b = 250")).toBeVisible()
  await expect(page.getByText("100 + 250 = 350")).toBeVisible()
})
