import { test, expect } from '@playwright/test';

// test.only('test one way mode is selected', async ({ page }) => {
//   await page.goto('https://www.shohoz.com/air-tickets');
//   const oneWayBtn = page.getByRole('tab', { name: 'One Way' });
//   expect(oneWayBtn).toHaveClass('.active')
// });

test('test flight booking', async ({ page }) => {
  try{
    await page.goto('https://www.shohoz.com/air-tickets');
  }
  catch(error){
    console.error('Failed to navigate to the page:', error);
  }
  
  await page.locator('#one-tab-pane').getByText('Dhaka', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Leaving From' }).fill('Chattogram');
  await page.getByText('CGP, Chattogram, Bangladesh').click();
  await page.locator('#one-tab-pane').getByText('Cox\'s Bazar', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Arrival To' }).fill('Dhaka');
  await page.waitForTimeout(10000);
  await page.getByText('DAC, Dhaka, Bangladesh').nth(2).click();
  await page.getByRole('textbox').click();
  await page.getByRole('option', { name: 'Choose Thursday, October 23rd,' }).click();
  await page.getByRole('button', { name: 'Traveler, Class 1 Traveler(s' }).click();
  await page.getByRole('button', { name: 'Premium Economy' }).click();
  await page.getByRole('button', { name: '+' }).first().click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('checkbox', { name: 'US-Bangla Airlines (2) US-' }).check();
  const ticketCards = page.locator('.Flight_card__1Y6K3');
  const count = await ticketCards.count();
  if (count == 0) {
    throw new Error('No ticket cards found');
  }
  const lastTicketCard = ticketCards.nth(count - 1);
  const priceText = await lastTicketCard.locator('.Flight_line_spacing__INn4m').innerText();
  console.log('Ticket Price:', priceText);
  const price = priceText.replace(/[^\d]/g, '');
  console.log('Numeric Price:', price);
  await lastTicketCard.getByRole('button', { name: 'BOOK TICKET' }).click();
  await expect(page.getByRole('heading', { name: 'Review fare to Dhaka' })).toBeVisible();
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('button', { name: 'Don\'t Allow' }).click();
  await page.locator('.offcanvas-backdrop').click();
  await page.getByRole('checkbox', { name: 'US-Bangla Airlines (2) US-' }).uncheck();
  await page.getByRole('checkbox', { name: 'Biman Bangladesh Airlines (1' }).check();
  
});