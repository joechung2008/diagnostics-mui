// Snapshot test for Configuration

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Configuration from "./Configuration";

describe("Configuration", () => {
  it("matches snapshot", () => {
    const { container } = render(<Configuration config={{ key: "value" }} />);
    expect(container).toMatchSnapshot();
  });
});
