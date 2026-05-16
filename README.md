# Registration Form
A lightweight client-side registration form with real-time validation built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies.

## Features

- Real-time validation on every keystroke
- Green/red border and background feedback on each input
- Success/error messages displayed under each field
- Submit button disabled until all fields pass validation
- Form replaced by a success message on submission

## Validation Rules

| Field    | Rules                                               |
|----------|-----------------------------------------------------|
| Name     | Minimum 3 characters, letters only                  |
| Email    | Must contain `@` and `.`                            |
| Password | Minimum 6 characters, at least 1 digit              |

## How It Works

### HTML (`index.html`)
Defines the form structure: three `.input-group` blocks each containing a `label`, an `input`, and an `error-message` span. A `#SuccessMessage` div sits below the form, hidden by default.

### CSS (`style.css`)
Handles all visual states:

| Class on input      | Effect                        |
|---------------------|-------------------------------|
| `.valid`            | Green border (`#1D9E75`)      |
| `.invalid`          | Red border (`#E24B4A`)        |
| `.success` (input)  | Green border + light green bg |
| `.error` (input)    | Red border + light red bg     |

| Class on span           | Effect             |
|-------------------------|--------------------|
| `.error-message.success`| Green text         |
| `.error-message.error`  | Red text           |

The submit button (`#SubmitBtn`) is gray and `cursor: not-allowed` when disabled, blue when active, and turns green on hover.

### JavaScript (`jscript.js`)
Three moving parts:

1. **`fields` object** — holds references to every input and its error span
2. **`rules` object** — lists validation checks per field in order; first failing rule shows its message
3. **`validate(name)`** — runs the rules for one field, calls `setStatus()` to apply the correct class and message, returns `true` or `false`

`checkAll()` runs all three validators on every keystroke and toggles `submitBtn.disabled` accordingly.

On submit, `#Form` is hidden and `#SuccessMessage` is shown.

## Adding a New Field

1. Add the input block to `index.html` following the `.input-group` pattern
2. Add the element references to the `fields` object in `jscript.js`
3. Add the validation rules to the `rules` object in `jscript.js`

No other changes needed.

## Browser Support

Works in all modern browsers. No build tools, bundlers, or external libraries required.

git clone: https://github.com/seljanzeynalovacode/simpleregistration.git
