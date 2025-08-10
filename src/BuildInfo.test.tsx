// Snapshot test for BuildInfo

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import BuildInfo from "./BuildInfo";

describe("BuildInfo", () => {
  it("matches snapshot", () => {
    const { container } = render(<BuildInfo buildVersion="1.0.0" />);
    expect(container).toMatchSnapshot();
  });
});
