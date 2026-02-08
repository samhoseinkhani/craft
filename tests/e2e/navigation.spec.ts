import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to home page', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Sam Hoseinkhani' })).toBeVisible()
  })

  test('should navigate to blog page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Blog' }).click()
    await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible()
  })

  test('should navigate back to home from blog', async ({ page }) => {
    await page.goto('/blog')
    await page.getByRole('link', { name: 'Sam Hoseinkhani' }).click()
    await expect(page.getByRole('heading', { name: 'Sam Hoseinkhani' })).toBeVisible()
  })
})
