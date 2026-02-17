import { newE2EPage } from '@stencil/core/testing';

describe('rpasek-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rpasek-ambulance-wl-list></rpasek-ambulance-wl-list>');

    const element = await page.find('rpasek-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
