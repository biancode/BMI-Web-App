import { describe, it, expect, beforeEach } from "vitest";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const formular = require("../../src/formular/formular.js");

describe("formular logic (unit)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("calculates BMI rounded to one decimal", () => {
    expect(formular.calculateBMIValue(75, 180)).toBe(23.1);
    expect(formular.calculateBMIValue(90, 180)).toBe(27.8);
  });

  it("maps BMI to correct category", () => {
    expect(formular.getBMICategory(17)).toBe("Untergewicht");
    expect(formular.getBMICategory(22)).toBe("Normalgewicht");
    expect(formular.getBMICategory(28)).toBe("Übergewicht");
    expect(formular.getBMICategory(31)).toBe("Adipositas");
  });

  it("validates required input fields", () => {
    const error = formular.validateInputs({
      age: 0,
      date: "",
      weight: 0,
      height: 0,
    });
    expect(error).toBe("Bitte füllen Sie alle Felder aus!");
  });

  it("validates ranges for age, weight and height", () => {
    expect(
      formular.validateInputs({
        age: 150,
        date: "2026-02-23",
        weight: 70,
        height: 180,
      }),
    ).toContain("Alter");

    expect(
      formular.validateInputs({
        age: 25,
        date: "2026-02-23",
        weight: 900,
        height: 180,
      }),
    ).toContain("Gewicht");

    expect(
      formular.validateInputs({
        age: 25,
        date: "2026-02-23",
        weight: 70,
        height: 10,
      }),
    ).toContain("Größe");
  });

  it("normalizes category class names for umlauts", () => {
    expect(formular.normalizeCategoryClass("Übergewicht")).toBe("uebergewicht");
    expect(formular.normalizeCategoryClass("Adipositas")).toBe("adipositas");
  });

  it("reads stored bmi history safely", () => {
    localStorage.setItem(
      "bmiData",
      JSON.stringify([{ bmi: 22.4, timestamp: "2026-02-23T12:00:00.000Z" }]),
    );
    expect(formular.getStoredBMIData()).toHaveLength(1);
  });
});
