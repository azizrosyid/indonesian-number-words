# Indonesian Number Words

![npm](https://img.shields.io/npm/v/indonesian-number-words)
![License](https://img.shields.io/npm/l/indonesian-number-words)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/azizrosyid/indonesian-number-words/nodejs.yml?branch=main)
![GitHub Issues](https://img.shields.io/github/issues/azizrosyid/indonesian-number-words)

Convert numerical values into their word equivalents in Bahasa Indonesia with high precision and no floating-point errors.

## 🚀 Features

- **High Precision:** Utilizes `decimal.js` to avoid floating-point inaccuracies.
- **Comprehensive Range:** Supports numbers from zero up to triliuns.
- **Negative Number Support:** Accurately converts negative numbers with the "minus" prefix.
- **Decimal Handling:** Converts fractional parts with precise word representations.
- **TypeScript Support:** Fully typed with TypeScript declarations for enhanced developer experience.
- **No Floating Errors:** Ensures accurate conversions without common floating-point pitfalls.
- **Lightweight:** Optimized for performance and minimal footprint.
- **Easy Integration:** Simple API for seamless integration into your projects.

## 📦 Installation

Ensure you have [Node.js](https://nodejs.org/) installed (version 14 or higher).

```bash
npm install indonesian-number-words decimal.js
```

or using Yarn:

```bash
yarn add indonesian-number-words decimal.js
```

## 🛠 Usage

### **JavaScript**

```javascript
const { Terbilang } = require('indonesian-number-words');
const Decimal = require('decimal.js');

console.log(Terbilang.Convert(0)); // "nol"
console.log(Terbilang.Convert(15)); // "sebelas"
console.log(Terbilang.Convert(123)); // "seratus dua puluh tiga"
console.log(Terbilang.Convert(1000)); // "seribu"
console.log(Terbilang.Convert(2500000)); // "dua juta lima ratus ribu"
console.log(Terbilang.Convert(new Decimal(-75))); // "minus tujuh puluh lima"
console.log(Terbilang.Convert(123.45)); // "seratus dua puluh tiga koma empat lima"
```

### **TypeScript**

```typescript
import { Terbilang } from 'indonesian-number-words';
import Decimal from 'decimal.js';

console.log(Terbilang.Convert(0)); // "nol"
console.log(Terbilang.Convert(15)); // "sebelas"
console.log(Terbilang.Convert(123)); // "seratus dua puluh tiga"
console.log(Terbilang.Convert(1000)); // "seribu"
console.log(Terbilang.Convert(2500000)); // "dua juta lima ratus ribu"
console.log(Terbilang.Convert(new Decimal(-75))); // "minus tujuh puluh lima"
console.log(Terbilang.Convert(123.45)); // "seratus dua puluh tiga koma empat lima"
```

### **Using in a Project**

```typescript
import { Terbilang } from 'indonesian-number-words';
import Decimal from 'decimal.js';

const number = new Decimal(-12345.67);
const words = Terbilang.Convert(number);
console.log(words); // "minus dua belas ribu tiga ratus empat puluh lima koma enam tujuh"
```

## 📖 API

### `Terbilang.Convert(convertNumber: number | Decimal, firstTry?: boolean): string`

#### **Parameters**

- `convertNumber` *(number | Decimal)*: The number to convert. Can be a native JavaScript `number` or a `Decimal` instance for higher precision.
- `firstTry` *(boolean, optional)*: Internal parameter for recursive calls. **Do not modify.** Defaults to `true`.

#### **Returns**

- *(string)*: The word representation of the number in Bahasa Indonesia.

#### **Throws**

- `TypeError`: If the input is not a `number` or `Decimal` instance.
- `RangeError`: If the number exceeds the supported range (up to triliuns).

#### **Examples**

```typescript
Terbilang.Convert(100); // "seratus"
Terbilang.Convert(new Decimal(100.5)); // "seratus koma lima"
Terbilang.Convert(-50); // "minus lima puluh"
```

## 🧪 Testing

The package uses [Jest](https://jestjs.io/) for testing to ensure reliability and correctness.

### **Running Tests**

```bash
npm test
```

All tests should pass, confirming that the package handles various scenarios correctly, including negative numbers, decimals, and large numbers.

## 🔧 Development

### **Building the Package**

```bash
npm run build
```

Compiles the TypeScript code into JavaScript, outputting to the `dist` directory.

## 📝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

   Provide a clear description of your changes and the problem they solve.

## 🐞 Issues

If you encounter any issues or have feature requests, please [open an issue](https://github.com/azizrosyid/indonesian-number-words/issues) on GitHub.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 💡 Unique Selling Points

- **No Floating-Point Errors:** By leveraging `decimal.js`, the library ensures precise conversions without the common floating-point inaccuracies found in native JavaScript `number` types.
- **High Precision:** Handles large numbers and decimals with exceptional accuracy, making it ideal for financial and critical applications.
- **Comprehensive Language Support:** Specifically tailored for Bahasa Indonesia, ensuring culturally and linguistically accurate representations.
- **TypeScript Ready:** Fully typed with TypeScript declarations, providing excellent developer experience and integration with TypeScript projects.
- **Robust Testing:** Extensive test coverage ensures reliability across various scenarios, including edge cases and large numbers.
- **Ease of Use:** Simple and intuitive API design makes it easy to integrate and use in any JavaScript or TypeScript project.
