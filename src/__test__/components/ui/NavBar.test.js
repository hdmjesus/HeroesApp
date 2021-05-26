import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { Router } from "react-router-dom";
import { NavBar } from "../../../Components/ui/NavBar";
import { AuthContext } from "../../../Context/AuthContext";
import { types } from "../../../types/types";

describe("Pruebas en <NavBar/>", () => {
  const { Provider } = AuthContext;
  const historyMock = {
    push: jest.fn(),
    location: {},
    replace: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn(),
  };
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: true, name: "Jesus Hernandez" || expect.any(String) },
  };
  const wrapper = mount(
    <Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <NavBar />
        </Router>
      </MemoryRouter>
    </Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should show good ", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Jesus Hernandez");
  });

  test("should call logout and use History", () => {
    wrapper.find("button").simulate("click");
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
      payload: {},
    });

    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
