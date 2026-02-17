import { newSpecPage } from '@stencil/core/testing';
import { RpasekAmbulanceWlList } from '../rpasek-ambulance-wl-list';

describe('rpasek-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RpasekAmbulanceWlList],
      html: `<rpasek-ambulance-wl-list></rpasek-ambulance-wl-list>`,
    });
      const wlList = page.rootInstance as RpasekAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
