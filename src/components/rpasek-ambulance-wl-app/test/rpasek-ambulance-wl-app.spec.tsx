import { newSpecPage } from '@stencil/core/testing';
import { RpasekAmbulanceWlApp } from '../rpasek-ambulance-wl-app';

describe('rpasek-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [RpasekAmbulanceWlApp],
      html: `<rpasek-ambulance-wl-app base-path="/"></rpasek-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("rpasek-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [RpasekAmbulanceWlApp],
      html: `<rpasek-ambulance-wl-app base-path="/ambulance-wl/"></rpasek-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("rpasek-ambulance-wl-list");
  });
});