"use strict";
// tests/index.test.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const decimal_js_1 = __importDefault(require("decimal.js"));
describe("Terbilang.Convert", () => {
    test('converts 0 to "nol"', () => {
        expect(src_1.Terbilang.Convert(0)).toBe("nol");
    });
    test("converts positive integers correctly", () => {
        expect(src_1.Terbilang.Convert(1)).toBe("satu");
        expect(src_1.Terbilang.Convert(11)).toBe("sebelas");
        expect(src_1.Terbilang.Convert(21)).toBe("dua puluh satu");
        expect(src_1.Terbilang.Convert(105)).toBe("seratus lima");
        expect(src_1.Terbilang.Convert(56945781)).toBe("lima puluh enam juta sembilan ratus empat puluh lima ribu tujuh ratus delapan puluh satu");
    });
    test("converts negative numbers correctly", () => {
        expect(src_1.Terbilang.Convert(-1)).toBe("minus satu");
        expect(src_1.Terbilang.Convert(-11)).toBe("minus sebelas");
        expect(src_1.Terbilang.Convert(-21)).toBe("minus dua puluh satu");
        expect(src_1.Terbilang.Convert(-105)).toBe("minus seratus lima");
        expect(src_1.Terbilang.Convert(new decimal_js_1.default(-56945781))).toBe("minus lima puluh enam juta sembilan ratus empat puluh lima ribu tujuh ratus delapan puluh satu");
    });
    test("converts positive decimals correctly", () => {
        expect(src_1.Terbilang.Convert(123.45)).toBe("seratus dua puluh tiga koma empat lima");
        expect(src_1.Terbilang.Convert(new decimal_js_1.default("0.99"))).toBe("nol koma sembilan sembilan");
    });
    test("converts negative decimals correctly", () => {
        expect(src_1.Terbilang.Convert(-123.45)).toBe("minus seratus dua puluh tiga koma empat lima");
        expect(src_1.Terbilang.Convert(new decimal_js_1.default("-0.99"))).toBe("minus nol koma sembilan sembilan");
    });
    test("handles thousands correctly", () => {
        expect(src_1.Terbilang.Convert(1000)).toBe("seribu");
        expect(src_1.Terbilang.Convert(2000)).toBe("dua ribu");
        expect(src_1.Terbilang.Convert(15000)).toBe("lima belas ribu");
    });
    test("handles millions correctly", () => {
        expect(src_1.Terbilang.Convert(1000000)).toBe("satu juta");
        expect(src_1.Terbilang.Convert(2500000)).toBe("dua juta lima ratus ribu");
    });
    test("handles large numbers correctly", () => {
        expect(src_1.Terbilang.Convert(1000000000)).toBe("satu miliar");
        expect(src_1.Terbilang.Convert(2500000000)).toBe("dua miliar lima ratus juta");
        expect(src_1.Terbilang.Convert(1000000000000)).toBe("satu triliun");
    });
    test("throws TypeError for invalid inputs", () => {
        // @ts-ignore
        expect(() => src_1.Terbilang.Convert("invalid")).toThrow(TypeError);
        // @ts-ignore
        expect(() => src_1.Terbilang.Convert(null)).toThrow(TypeError);
        // @ts-ignore
        expect(() => src_1.Terbilang.Convert(undefined)).toThrow(TypeError);
        // @ts-ignore
        expect(() => src_1.Terbilang.Convert({})).toThrow(TypeError);
    });
    test("throws RangeError for numbers too large to convert", () => {
        expect(() => src_1.Terbilang.Convert(1e15)).toThrow(RangeError);
        expect(() => src_1.Terbilang.Convert(new decimal_js_1.default("1000000000000000"))).toThrow(RangeError);
    });
});
