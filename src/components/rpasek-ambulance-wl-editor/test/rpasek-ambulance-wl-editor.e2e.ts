import { newE2EPage } from '@stencil/core/testing';

describe('rpasek-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rpasek-ambulance-wl-editor></rpasek-ambulance-wl-editor>');

    const element = await page.find('rpasek-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
