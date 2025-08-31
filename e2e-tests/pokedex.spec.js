const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('butterfree')).toBeVisible()
  })

  test('navigation from front page to other pages works', async ({ page }) => {
    await page.goto('')  
    await page.goto('/pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
    await expect(page.getByText('overgrow')).toBeVisible()
  })

})