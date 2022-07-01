import { render, screen } from "@testing-library/react";
import { BreweryDetailItem } from "./Detail";
import { MemoryRouter } from "react-router-dom";

test("renders brewery list view", () => {
  const detail = {
    id: "owls-rest-brewery-malone",
    name: "Owls Rest Brewery",
    brewery_type: "planning",
    street: null,
    address_2: null,
    address_3: null,
    city: "Malone",
    state: "New York",
    county_province: null,
    postal_code: "12953-1517",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  };

  render(<BreweryDetailItem {...detail} />, { wrapper: MemoryRouter });
  const headerElement = screen.getByText(/Owls Rest Brewery/i);
  expect(headerElement).toBeInTheDocument();
});
