import moxios from "moxios";

import { getSecretWord } from "../secretWordActions";

import { storeFactory } from "../../../../test/utils";


describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("adds response word to state", () => {
    const secretWord = "party";
    const store = storeFactory({ secretWord });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    return store.dispatch(getSecretWord())
              .then(() => {
                const newState = store.getState();
                expect(newState.secretWord).toBe(secretWord);
              });
  });
});
