// Snapshot test for ServerInfo

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ServerInfo from "./ServerInfo";

describe("ServerInfo", () => {
  it("matches snapshot", () => {
    const props = {
      deploymentId: "deploy-1",
      extensionSync: { totalSyncAllCount: 1 },
      hostname: "localhost",
      nodeVersions: "v18.0.0",
      serverId: "server-1",
      uptime: 100,
    };
    const { container } = render(<ServerInfo {...props} />);
    expect(container).toMatchSnapshot();
  });
});
