import { newE2EPage } from '@stencil/core/testing';

describe('rpasek-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rpasek-ambulance-wl-app></rpasek-ambulance-wl-app>');

    const element = await page.find('rpasek-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
