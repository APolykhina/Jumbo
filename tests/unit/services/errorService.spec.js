import { errorService } from "../../../src/API";

const responseError = {
  response: {
    status: 404,
    data: "Not found",
  },
};

const requestError = {
  request: {
    data: "Some request info",
  },
};

const error = {
  message: "Any error",
};

describe("Check error service", () => {
  // checking response error
  it("Response error", () => {
    const actual = errorService(responseError);
    expect(actual).toEqual("Error code: 404. Not found");
  });

  // checking request error
  it("Request error", () => {
    console.log = jest.fn();
    const actual = errorService(requestError);
    // empty str returned
    expect(actual).toEqual("");
    // console error
    expect(console.log).toHaveBeenCalledWith(requestError.request);
  });

  // checking other unknown error
  it("Any error", () => {
    console.log = jest.fn();
    const actual = errorService(error);
    // empty str returned
    expect(actual).toEqual("");
    // console error
    expect(console.log).toHaveBeenCalledWith(`Error: ${error.message}`);
  });
});
