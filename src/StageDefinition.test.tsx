// Snapshot test for StageDefinition

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import StageDefinition from "./StageDefinition";

describe("StageDefinition", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <StageDefinition stageDefinition={{ stage1: ["step1", "step2"] }} />,
    );
    expect(container).toMatchSnapshot();
  });
});
