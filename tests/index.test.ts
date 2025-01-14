// tests/index.test.ts

import { Terbilang } from "../src";
import Decimal from "decimal.js";

describe("Terbilang.Convert", () => {
  test('converts 0 to "nol"', () => {
    expect(Terbilang.Convert(0)).toBe("nol");
  });

  test("converts positive integers correctly", () => {
    expect(Terbilang.Convert(1)).toBe("satu");
    expect(Terbilang.Convert(11)).toBe("sebelas");
    expect(Terbilang.Convert(21)).toBe("dua puluh satu");
    expect(Terbilang.Convert(105)).toBe("seratus lima");
    expect(Terbilang.Convert(56945781)).toBe(
      "lima puluh enam juta sembilan ratus empat puluh lima ribu tujuh ratus delapan puluh satu"
    );
  });

  test("converts negative numbers correctly", () => {
    expect(Terbilang.Convert(-1)).toBe("minus satu");
    expect(Terbilang.Convert(-11)).toBe("minus sebelas");
    expect(Terbilang.Convert(-21)).toBe("minus dua puluh satu");
    expect(Terbilang.Convert(-105)).toBe("minus seratus lima");
    expect(Terbilang.Convert(new Decimal(-56945781))).toBe(
      "minus lima puluh enam juta sembilan ratus empat puluh lima ribu tujuh ratus delapan puluh satu"
    );
  });

  test("converts positive decimals correctly", () => {
    expect(Terbilang.Convert(123.45)).toBe(
      "seratus dua puluh tiga koma empat lima"
    );
    expect(Terbilang.Convert(new Decimal("0.99"))).toBe(
      "nol koma sembilan sembilan"
    );
  });

  test("converts negative decimals correctly", () => {
    expect(Terbilang.Convert(-123.45)).toBe(
      "minus seratus dua puluh tiga koma empat lima"
    );
    expect(Terbilang.Convert(new Decimal("-0.99"))).toBe(
      "minus nol koma sembilan sembilan"
    );
  });

  test("handles thousands correctly", () => {
    expect(Terbilang.Convert(1000)).toBe("seribu");
    expect(Terbilang.Convert(2000)).toBe("dua ribu");
    expect(Terbilang.Convert(15000)).toBe("lima belas ribu");
  });

  test("handles millions correctly", () => {
    expect(Terbilang.Convert(1000000)).toBe("satu juta");
    expect(Terbilang.Convert(2500000)).toBe("dua juta lima ratus ribu");
  });

  test("handles large numbers correctly", () => {
    expect(Terbilang.Convert(1000000000)).toBe("satu miliar");
    expect(Terbilang.Convert(2500000000)).toBe("dua miliar lima ratus juta");
    expect(Terbilang.Convert(1000000000000)).toBe("satu triliun");
  });

  test("throws TypeError for invalid inputs", () => {
    // @ts-ignore
    expect(() => Terbilang.Convert("invalid")).toThrow(TypeError);
    // @ts-ignore
    expect(() => Terbilang.Convert(null)).toThrow(TypeError);
    // @ts-ignore
    expect(() => Terbilang.Convert(undefined)).toThrow(TypeError);
    // @ts-ignore
    expect(() => Terbilang.Convert({})).toThrow(TypeError);
  });

  test("throws RangeError for numbers too large to convert", () => {
    expect(() => Terbilang.Convert(1e15)).toThrow(RangeError);
    expect(() => Terbilang.Convert(new Decimal("1000000000000000"))).toThrow(
      RangeError
    );
  });
});
