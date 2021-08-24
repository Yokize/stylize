[![chat](https://img.shields.io/gitter/room/stylize/community?style=flat-square&color=informational&logo=gitter&label)](https://gitter.im/Yokize/stylize)
[![sass](https://img.shields.io/static/v1?style=flat-square&logo=sass&color=informational&logoColor=white&label=Sass&message=1.38.0)](https://www.npmjs.com/package/sass)

Sass mixins for general usage.

## Install

```shell script
npm install @stylize/sass-mixin --save-dev
```

## Usage

### Flex

Mixins defines the shorthand for [Flexbox Layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox).

```sass
@use '~@stylize/sass-mixin/flex' as *

// Signature.
@include flex($props: [])
@include flex($direction: null, $main: null, $cross: null, $wrap: null, $content: null)
```

<details>
<summary>Examples</summary>

```sass
// Default.
@include flex
// Row direction.
@include flex(row)
// Row direction with horizontal centering.
@include flex(row center)
// Column direction with vertical centering and left horizontally.
@include flex(column center flex-start)
// Column direction with vertical centering, left horizontally and wrap items.
@include flex(column, center, flex-start, wrap)
// Column direction with vertical centering, left horizontally, wrap items and align for multiline.
@include flex(column, center, flex-start, wrap, space-around)
```

</details>

```sass
@use '~@stylize/sass-mixin/flex' as *

// Signature.
@include inline-flex($props: [])
@include inline-flex($direction: null, $main: null, $cross: null, $wrap: null, $content: null)
```

<details>
<summary>Examples</summary>

```sass
// Default.
@include inline-flex
// Row direction.
@include inline-flex(row)
// Row direction with horizontal centering.
@include inline-flex(row center)
// Column direction with vertical centering and left horizontally.
@include inline-flex(column center flex-start)
// Column direction with vertical centering, left horizontally and wrap items.
@include inline-flex(column, center, flex-start, wrap)
// Column direction with vertical centering, left horizontally, wrap items and align for multiline.
@include inline-flex(column, center, flex-start, wrap, space-around)
```

</details>

### Font

Mixin defines the shorthand for Font prop with `font-size`, `line-height`, `font-weight` and `font-family`.

```sass
@use '~@stylize/sass-mixin/font' as *

// Signature.
@include font($props: [])
@include font($size: inherit, $line: normal, $weight: normal, $family: $base-font)
```

<details>
<summary>Examples</summary>

```sass
// Default.
@include font
// Font size.
@include font(10px)
// Font size, line-height.
@include font(10px 1rem)
// Font size, line-height, font-weight.
@include font(10px, 1rem, 300)
// Font size, line-height, font-weight, font-family.
@include font(10px, 1rem, 300, (Arial, san-sarif))
```

</details>

### Media

Mixin defines the shorthand for media queries with configurable settings and caching.

```sass
@use '~@stylize/sass-mixin/media' as *

// Signature.
@include media($props...)

// Operator.
@include media('w>sm', 'h<=sm')

// Keywords.
@include media('portrait', 'landscape')
```

<details>
<summary>Examples</summary>

```sass
// Min width 201px.
@include media('>200px'))

// Min width 769px AND min height 768px.
@include media('w>sm', 'h<=sm')

// Screen with min width 769px OR print with min height 768px.
@include media((sc1: screen 'w>sm', sc2: print 'h<=sm'))
```

</details>

#### Features

```sass
/// Media features describe specific characteristics
/// of the user agent, output device or environment.
$features: ('w': 'width', 'h': 'height', 'o': 'orientation') !default
```

#### Keywords

Default keywords are `portrait`, `landscape`, `retina2x`, `retina3x`

```sass
/// Predefined media conditions with unique keyword.
$keywords: () !default
```

#### Breakpoints

```sass
/// Predefined breakpoints used with media feature.
$breakpoints: (mc: 360px, xs: 480px, sm: 768px, md: 1024px, lg: 1200px) !default
```

## Position

Mixin defines the shorthand mixin for position property.

```sass
@use '~@stylize/sass-mixin/position' as *

// Signature.
@include position($props: [])
@include position($position, $top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>Examples</summary>

```sass
// Relative with top 0.
@include position(relative 0)
// Relative with left 0.
@include position(relative, $left: 0)
// Relative with top 0, right 2px, left 3px, z-index 1.
@include position(relative, 0, 2px, null, 3px, 1)
```

</details>

## Relative

Mixin defines the shorthand mixin for relative position.

```sass
@use '~@stylize/sass-mixin/position' as *

// Signature.
@include relative($props: [])
@include relative($top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>Examples</summary>

```sass
// Relative with left 0.
@include relative($left: 0)
// Relative with top 0, right 2px.
@include relative(0, 2px)
// Relative with top 0, right 2px, left 3px, z-index 1.
@include relative(0 2px null 3px 1)
```

</details>

## Absolute

Mixin defines the shorthand mixin for absolute position.

```sass
@use '~@stylize/sass-mixin/position' as *

// Signature.
@include absolute($props: [])
@include absolute($top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>Examples</summary>

```sass
// Absolute with left 0.
@include absolute($left: 0)
// Absolute with top 0, right 2px.
@include absolute(0, 2px)
// Absolute with top 0, right 2px, left 3px, z-index 1.
@include absolute(0 2px null 3px 1)
```

</details>

### Cover

```sass
// Signature.
@include absolute-cover($props: [])
@include absolute-cover($offset: 0, $z: null)
```

<details>
<summary>Examples</summary>

```sass
// Absolute with offset 0.
@include absolute-cover
// Absolute with offset 2px.
@include absolute-cover(2px)
// Absolute with offset 0, z-index 1.
@include absolute-cover($z: 1)
```

</details>

### Center

```sass
// Signature.
@include absolute-center($props: [])
@include absolute-center($z: null)
```

## Fixed

Mixin defines the shorthand mixin for fixed position.

```sass
@use '~@stylize/sass-mixin/position' as *

// Signature.
@include fixed($props: [])
@include fixed($top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>Examples</summary>

```sass
// Fixed with left 0.
@include fixed($left: 0)
// Fixed with top 0, right 2px.
@include fixed(0, 2px)
// Fixed with top 0, right 2px, left 3px, z-index 1.
@include fixed(0 2px null 3px 1)
```

</details>

### Cover

```sass
// Signature.
@include fixed-cover($props: [])
@include fixed-cover($offset: 0, $z: null)
```

<details>
<summary>Examples</summary>

```sass
// Fixed with offset 0.
@include fixed-cover
// Fixed with offset 2px.
@include fixed-cover(2px)
// Fixed with offset 0, z-index 1.
@include fixed-cover($z: 1)
```

</details>

### Center

```sass
// Signature.
@include fixed-center($props: [])
@include fixed-center($z: null)
```

## Sticky

Mixin defines the shorthand mixin for sticky position.

```sass
@use '~@stylize/sass-mixin/position' as *

// Signature.
@include sticky($props: [])
@include sticky($top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>Examples</summary>

```sass
// Sticky with left 0.
@include sticky($left: 0)
// Sticky with top 0, right 2px.
@include sticky(0, 2px)
// Sticky with top 0, right 2px, left 3px, z-index.
@include sticky(0 2px null 3px 1)
```

</details>

### Cover

```sass
// Signature.
@include sticky-cover($props: [])
@include sticky-cover($offset: 0, $z: null)
```

<details>
<summary>Examples</summary>

```sass
// Sticky with offset 0.
@include sticky-cover
// Sticky with offset 2px.
@include sticky-cover(2px)
// Sticky with offset 0, z-index 1.
@include sticky-cover($z: 1)
```

</details>

### Center

```sass
// Signature.
@include sticky-center($props: [])
@include sticky-center($z: null)
```

## Pseudo

Mixin defines the shorthand mixin for after / before pseudo.

```sass
@use '~@stylize/sass-mixin/pseudo' as *

// Signature.
@include before($content: '')
@include after($content: '')
```

## Size

Mixin defines the shorthand to define with complex width and height.

```sass
@use '~@stylize/sass-mixin/size' as *

// Signature.
@mixin size($width: null, $height: null)
```

<details>
<summary>Examples</summary>

```sass
// [eq] width.
@include size(10px)
// [min] width.
@include size(min 10px)
// [min] width, [max] height.
@include size(min 10px, max 20px)
// [eq, min] width, [max] height.
@include size([30px, min 10px], max 20px)
// [eq, min] width, [min, max] height.
@include size([30px, min 10px], [min 10px, max 20px])
```

</details>

## Width

Mixin defines the shorthand to define with complex width.

```sass
@use '~@stylize/sass-mixin/size' as *

// Signature.
@mixin width($props...)
```

<details>
<summary>Examples</summary>

```sass
// [eq] width.
@include width(10px)
// [min] width.
@include width(min 10px)
// [min, max] width.
@include width(min 10px, max 30px)
```

</details>

## Height

Mixin defines the shorthand to define with complex height.

```sass
@use '~@stylize/sass-mixin/size' as *

// Signature.
@mixin height($props...)
```

<details>
<summary>Examples</summary>

```sass
// [eq] height.
@include height(10px)
// [min] height.
@include height(min 10px)
// [min, max] height.
@include height(min 10px, max 30px)
```

</details>

## Support

Mixin determine whether hover is supported.

```sass
@use '~@stylize/sass-mixin/support' as *

// Signature.
@include support-hover
```

<details>
<summary>Examples</summary>

```sass
// Capitalize link on hover.
@include support-hover
  .link
    text-transform: capitalize
```

</details>

## Coverage

The mixins are completely covered with [sass-true](https://www.npmjs.com/package/sass-true).
