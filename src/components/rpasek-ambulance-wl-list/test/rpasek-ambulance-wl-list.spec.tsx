import { newSpecPage } from '@stencil/core/testing';
import { RpasekAmbulanceWlList } from '../rpasek-ambulance-wl-list';

describe('rpasek-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RpasekAmbulanceWlList],
      html: `<rpasek-ambulance-wl-list></rpasek-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <rpasek-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rpasek-ambulance-wl-list>
    `);
  });
});
