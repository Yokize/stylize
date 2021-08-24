[![chat](https://img.shields.io/gitter/room/stylize/community?style=flat-square&color=informational&logo=gitter&label)](https://gitter.im/Yokize/stylize)
[![sass](https://img.shields.io/static/v1?style=flat-square&logo=sass&color=informational&logoColor=white&label=Sass&message=1.38.0)](https://www.npmjs.com/package/sass)

Sass functions for general usage.

## Install

```shell script
npm install @stylize/sass-func --save-dev
```

## Usage

### Font

Function to create font property value.

```sass
@use '~@stylize/sass-func/font' as *

// Signature.
font($props: [])
font($size: inherit, $line: normal, $weight: normal, $family: $base-font)
```

<details>
<summary>Examples</summary>

```sass
// Default.
font()
// Font size.
font(10px)
// Font size, line-height.
font(10px 1rem)
// Font size, line-height, font-weight.
font(10px, 1rem, 300)
// Font size, line-height, font-weight, font-family.
font(10px, 1rem, 300, (Arial, san-sarif))
```

</details>

### TO BE ADDED OTHER

## Coverage

The mixins are completely covered with [sass-true](https://www.npmjs.com/package/sass-true).
