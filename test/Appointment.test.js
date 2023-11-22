import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils"
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = { firstName: "Rodolfo" };
    const component = <Appointment customer={customer} />
    const container = document.createElement("div");
    
    document.body.replaceChildren(container);
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });
    
    expect(document.body.textContent).toContain("Rodolfo");
  });

  it("renders another customer first name", () => {
    const customer = { firstName: "Jaquile" }
    const component = <Appointment customer={customer} />
    const container = document.createElement("div");

    document.body.replaceChildren(container);

    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Jaquile");
  });
});

