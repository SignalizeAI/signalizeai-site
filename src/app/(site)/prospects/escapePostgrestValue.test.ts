
import { describe, expect, it } from "vitest";
import { escapePostgrestValue } from "./savedProspectsData";

describe("escapePostgrestValue (#50)", () => {
  it("neutralizes PostgREST grammar characters", () => {
    expect(escapePostgrestValue("Foo (Bar)")).toBe("Foo Bar");
    expect(escapePostgrestValue("a.b")).toBe("a b");
    expect(escapePostgrestValue("x*y")).toBe("x y");
    expect(escapePostgrestValue('say "hi"')).toBe("say hi");
    expect(escapePostgrestValue("a,b")).toBe("a b");
  });

  it("keeps plain company names intact", () => {
    expect(escapePostgrestValue("Acme Corp")).toBe("Acme Corp");
  });
});
