"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terbilang = void 0;
const decimal_js_1 = __importDefault(require("decimal.js"));
class Terbilang {
    /**
     * Converts a number to its word equivalent in Bahasa Indonesia.
     * @param convertNumber - The number to convert (can be a number or Decimal).
     * @param firstTry - Internal parameter for recursive calls.
     * @returns The word representation of the number.
     * @throws {TypeError} If the input is not a number or Decimal instance.
     */
    static Convert(convertNumber, firstTry = true) {
        // Input validation
        if (typeof convertNumber !== "number" &&
            !(convertNumber instanceof decimal_js_1.default)) {
            throw new TypeError("Input must be a number or Decimal instance");
        }
        // Convert to Decimal and handle negative numbers
        let value = typeof convertNumber === "number"
            ? new decimal_js_1.default(convertNumber)
            : convertNumber;
        let isNegative = false;
        if (value.isNegative()) {
            isNegative = true;
            value = value.abs();
        }
        const integerPart = value.floor().toNumber();
        const fractionalPart = value.mod(1);
        let word = "";
        // Convert the integer part
        if (integerPart === 0 && firstTry) {
            word = "nol";
        }
        else if (integerPart < 12) {
            word = this.words[integerPart];
        }
        else if (integerPart < 20) {
            word = this.words[integerPart - 10] + " belas";
        }
        else if (integerPart < 100) {
            const start = Math.floor(integerPart / 10);
            const end = integerPart % 10;
            word =
                this.words[start] + " puluh" + (end !== 0 ? " " + this.words[end] : "");
        }
        else if (integerPart < 200) {
            word =
                "seratus" +
                    (integerPart - 100 !== 0
                        ? " " + this.Convert(integerPart - 100, false)
                        : "");
        }
        else if (integerPart < 1000) {
            const start = Math.floor(integerPart / 100);
            const end = integerPart % 100;
            word =
                this.words[start] +
                    " ratus" +
                    (end !== 0 ? " " + this.Convert(end, false) : "");
        }
        else if (integerPart < 2000) {
            word =
                "seribu" +
                    (integerPart - 1000 !== 0
                        ? " " + this.Convert(integerPart - 1000, false)
                        : "");
        }
        else if (integerPart < 1000000) {
            const start = Math.floor(integerPart / 1000);
            const end = integerPart % 1000;
            word =
                this.Convert(start, false) +
                    " ribu" +
                    (end !== 0 ? " " + this.Convert(end, false) : "");
        }
        else if (integerPart < 1000000000) {
            const start = Math.floor(integerPart / 1000000);
            const end = integerPart % 1000000;
            word =
                this.Convert(start, false) +
                    " juta" +
                    (end !== 0 ? " " + this.Convert(end, false) : "");
        }
        else if (integerPart < 1000000000000) {
            const start = Math.floor(integerPart / 1000000000);
            const end = integerPart % 1000000000;
            word =
                this.Convert(start, false) +
                    " miliar" +
                    (end !== 0 ? " " + this.Convert(end, false) : "");
        }
        else if (integerPart < 1000000000000000) {
            const start = Math.floor(integerPart / 1000000000000);
            const end = integerPart % 1000000000000;
            word =
                this.Convert(start, false) +
                    " triliun" +
                    (end !== 0 ? " " + this.Convert(end, false) : "");
        }
        else {
            throw new RangeError("Number is too large to convert");
        }
        // Clean up extra spaces
        const split = word.split(" ");
        const full = [];
        for (const wordSplit of split) {
            if (wordSplit !== "") {
                full.push(wordSplit);
            }
        }
        let result = full.join(" ").toLowerCase();
        // Convert the fractional part if it exists
        if (!fractionalPart.isZero()) {
            const fractionalString = fractionalPart.toFixed().substring(2); // Get digits after the decimal point
            const fractionalWords = Array.from(fractionalString).map((digit) => this.words[parseInt(digit)]);
            result +=
                " koma " +
                    fractionalWords.map((word) => word.toLowerCase().trim()).join(" ");
        }
        // Prefix "minus" if the original number was negative
        if (isNegative && firstTry) {
            result = "minus " + result;
        }
        return result;
    }
}
exports.Terbilang = Terbilang;
Terbilang.words = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
];
