# sass-mixin

[![chat](https://img.shields.io/gitter/room/stylize/community?style=flat-square&logo=gitter&color=blue&label)](https://gitter.im/Yokize/stylize)
[![test](https://img.shields.io/github/workflow/status/Yokize/stylize/CI?style=flat-square&label=test)](https://github.com/Yokize/stylize/actions/workflows/CI.yml)
[![deps](https://img.shields.io/librariesio/release/npm/@stylize/sass-mixin?style=flat-square)](https://github.com/Yokize/stylize/actions/workflows/CI.yml)
[![last](https://img.shields.io/github/last-commit/yokize/stylize?style=flat-square)](https://github.com/Yokize/stylize)
[![sass](https://img.shields.io/static/v1?style=flat-square&logo=sass&color=blue&label=Sass&message=latest)](https://www.npmjs.com/package/sass)
[![MIT](https://img.shields.io/npm/l/@stylize/sass-mixin?style=flat-square&color=blue)](https://en.wikipedia.org/wiki/MIT_License)

<blockquote>
  Collection of Sass mixins for general usage
</blockquote>

<details>
<summary>
  <b>Table of Contents</b>
</summary>

- [Flex](#flex)
- [Font](#font)
- [Media](#media)
- [Position](#position)
  - [Absolute](#absolute)
  - [Fixed](#fixed)
  - [Sticky](#sticky)
  - [Relative](#relative)
- [Pseudo](#pseudo)
- [Size](#size)
  - [Width](#width)
  - [Height](#height)
- [Support](#support)
- [Z-index](#z-index)

</details>

<a name="install"></a>

## Install

```shell
npm install @stylize/sass-mixin --save-dev
```

### Other packages

| Name                                                                     | Description                | Package                                                                                                                           |
| :----------------------------------------------------------------------- | :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [@stylize/sass-func](https://www.npmjs.com/package/@stylize/sass-func)   | Func's for general usage   | [![npm](https://img.shields.io/npm/v/@stylize/sass-func?style=for-the-badge)](https://www.npmjs.com/package/@stylize/sass-func)   |
| [@stylize/sass-shape](https://www.npmjs.com/package/@stylize/sass-shape) | Mixins for creating shapes | [![npm](https://img.shields.io/npm/v/@stylize/sass-shape?style=for-the-badge)](https://www.npmjs.com/package/@stylize/sass-shape) |

<a name="usage"></a>

## Usage

Mixins can be imported directly from the package or namespace.

```sass
@use '~@stylize/sass-mixin' as *
```

<a name="overloading"></a>

#### Overloading

Several mixins in this package support overloading, so you can use them in the usual way with named arguments or accept a list as an argument, which will be destructured.

```sass
// $args will be destructured to $arg1 and $arg2.
@include mixin($args: [])

// Receive in usual way with support of named arguments.
@include mixin($arg1: null, $arg2: null)
```

<a name="flex"></a>

## Flex

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/mixin/flex.svg)

[Flexbox Layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox) module ([W3C Candidate Recommendation](https://www.w3.org/TR/css-flexbox/)) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.

Supports [overloaded](#overloading) signature with single argument.

_Display: flex_

Element behaves like a block element and lays out its content according to the flexbox model.

```sass
@include flex($direction: null, $main: null, $cross: null, $wrap: null, $content: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

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

_Display: inline-flex_

Element behaves like an inline element and lays out its content according to the flexbox model.

```sass
@include inline-flex($direction: null, $main: null, $cross: null, $wrap: null, $content: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

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

<a name="flex-shorthands"></a>

#### Shorthands

Package additionally provides the shorthands `*-row`, `*-row-center`, `*-col`, `*-col-center`, which behave the same way, but take fewer parameters.

Example of `flex` mixin for `row` direction with `center` alignment:

```sass
@include flex-row-center($wrap: null, $content: null)
```

<a name="font"></a>

## Font

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/mixin/font.svg)

Mixin defines the shorthand for Font with CSS properties `font-size`, `line-height`, `font-weight` and `font-family`.

```sass
@include font($size: null, $line: null, $weight: null, $family: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

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

<a name="font-smoothing"></a>

#### Smoothing

`font-smoothing` mixin enable anti-aliasing when fonts are rendered.

<a name="media"></a>

## Media

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/mixin/media.svg)

[Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) are useful to modify site or application depending on the general type of device (e.g., print vs screen) or specific characteristics and parameters (e.g., screen resolution or browser viewport width). Media query is composed of an optional media type and any number of media feature expressions.
Multiple queries can be combined in various ways by using logical operators.

Mixin defines the advanced shorthand for media queries with advantage over other solutions in the configurable settings and caching.

```sass
@include media($conditions...)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Eq height 200px.
@include media('h=200px')
// Min width 201px.
@include media('>200px')
// Max or eq width 200px.
@include media('w<=200px')
// Orientation portrait.
@include media('portrait')
// Min width 769px AND min height 768px.
@include media('w>sm', 'h<=sm')
// Native media query for resolution (can use : instead of =).
@include media('resolution=192dpi')
// Screen with min width 769px OR print with min height 768px.
@include media((group1: screen 'w>sm', group2: print 'h<=sm'))
```

</details>

<a name="media-operators"></a>

#### Operators

Mixin supports a number of operators that determine whether the `min` and `max` prefixes should be added:

- `<` Less than.
- `>` Greater than.
- `=`, `:` Equal.
- `<=`, `≤` Less than or equal.
- `>=`, `≥` Greater than or equal.

The logical operators `and`, and `or (,)` can be defined by the arguments type.
In case `list` is one of the arguments, the media conditions will be combined by the `and` operator; in the case of `map` argument the conditions will be combined by the `or` operator.

<a name="media-px-vs-em"></a>

#### Px vs Em

Default breakpoints are defined in `px`, and can be changed to `em` to support [zooming](https://css-tricks.com/zooming-squishes).

```sass
// Em with default size.
@include use-em
```

```sass
// Em with custom base size.
@include use-em(20px)
```

<a name="media-keywords"></a>

#### Keywords

Defines the keywords for [standard media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

Default keywords are `w` for `width`, `h` for `height`.

```sass
$keywords: ('w': 'width', 'h': 'height') !default

// Dynamically add the keyword.
@include add-keyword($keyword, $feature)
```

<a name="media-shortcuts"></a>

#### Shortcuts

Defines the shortcut for media query, which can be referred to by unique name.

Default shortcuts are `portrait`, `landscape`, `retina2x`, `retina3x`.

```sass
$shortcuts: () !default

// Dynamically add the shortcut.
@include add-shortcut($name, $condition)
```

<a name="media-breakpoints"></a>

#### Breakpoints

Predefined breakpoints used with media feature.

```sass
$breakpoints: (mc: 360px, xs: 480px, sm: 768px, md: 1024px, lg: 1200px, xl: 1440px) !default

// Dynamically add the breakpoint.
@include add-breakpoint($name, $value)
```

<a name="position"></a>

## Position

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/mixin/position.svg)

The `position` CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements. `z-index` determine the stack order and can be individually configured by the corresponding [mixin](#z-index) or [sass-func](https://www.npmjs.com/package/@stylize/sass-func).

Supports [overloaded](#overloading) signature with single argument.

```sass
@include position($position, $top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Relative with top 0.
@include position(relative 0)
// Relative with left 0.
@include position(relative, $left: 0)
// Relative with top 0, right 2px, left 3px, z-index 1.
@include position(relative, 0, 2px, null, 3px, 1)
// Relative with top 0, right 2px, left 3px, z-index keyword `header`.
@include position(relative, 0, 2px, null, 3px, header)
```

</details>

<a name="relative"></a>

### Relative

Mixin defines the shorthand for relative position.

```sass
@include relative($top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Relative with left 0.
@include relative($left: 0)
// Relative with top 0, right 2px, left 3px.
@include relative(0, 2px, 3px)
// Relative with top 0, right 2px, left 3px, z-index 1.
@include relative(0 2px null 3px 1)
// Relative with top 0, right 2px, left 3px, z-index keyword `header`.
@include relative(0, 2px, null, 3px, header)
```

</details>

<a name="absolute"></a>

### Absolute

Mixin defines the shorthand for absolute position.

```sass
@include absolute($top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Absolute with left 0.
@include absolute($left: 0)
// Absolute with top 0, right 2px, left 3px.
@include absolute(0, 2px, 3px)
// Absolute with top 0, right 2px, left 3px, z-index 1.
@include absolute(0 2px null 3px 1)
```

</details>

Shorthand to cover the parent container using `absolute`.

```sass
@include absolute-cover($offset: 0, $z: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Absolute with offset 0.
@include absolute-cover
// Absolute with offset 2px.
@include absolute-cover(2px)
// Absolute with offset 0, z-index 1.
@include absolute-cover($z: 1)
```

</details>

Shorthand to align at center in parent container using `absolute`.

```sass
@include absolute-center($z: null)
```

#### Shorthands

Package additionally provides the shorthands `absolute-top-left`, `absolute-top-right`, `absolute-bottom-left`, `absolute-bottom-right`, which behave the same way and set zero offset to corresponding directions.

<a name="fixed"></a>

### Fixed

Mixin defines the shorthand for fixed position.

```sass
@include fixed($top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Fixed with left 0.
@include fixed($left: 0)
// Fixed with top 0, right 2px.
@include fixed(0, 2px)
// Fixed with top 0, right 2px, left 3px, z-index 1.
@include fixed(0 2px null 3px 1)
```

</details>

Shorthand to cover the parent container using `fixed`.

```sass
@include fixed-cover($offset: 0, $z: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Fixed with offset 0.
@include fixed-cover
// Fixed with offset 2px.
@include fixed-cover(2px)
// Fixed with offset 0, z-index 1.
@include fixed-cover($z: 1)
```

</details>

Shorthand to align at center in parent container using `fixed`.

```sass
@include fixed-center($z: null)
```

#### Shorthands

Package additionally provides the shorthands `fixed-top-left`, `fixed-top-right`, `fixed-bottom-left`, `fixed-bottom-right`, which behave the same way and set zero offset to corresponding directions.

<a name="sticky"></a>

### Sticky

Mixin defines the shorthand for sticky position.

```sass
@include sticky($top: null, $right: null, $bottom: null, $left: null, $z: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Sticky with left 0.
@include sticky($left: 0)
// Sticky with top 0, right 2px.
@include sticky(0, 2px)
// Sticky with top 0, right 2px, left 3px, z-index.
@include sticky(0 2px null 3px 1)
```

</details>

Shorthand to cover the parent container using `sticky`.

```sass
@include sticky-cover($offset: 0, $z: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Sticky with offset 0.
@include sticky-cover
// Sticky with offset 2px.
@include sticky-cover(2px)
// Sticky with offset 0, z-index 1.
@include sticky-cover($z: 1)
```

</details>

Shorthand to align at center in parent container using `sticky`.

```sass
@include sticky-center($z: null)
```

#### Shorthands

Package additionally provides the shorthands `sticky-top-left`, `sticky-top-right`, `sticky-bottom-left`, `sticky-bottom-right`, which behave the same way and set zero offset to corresponding directions.

<a name="pseudo"></a>

## Pseudo

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/mixin/pseudo.svg)

Mixin defines the shorthand for `after` / `before` pseudo.

```sass
@include before($content: '')
  // @content
```

```sass
@include after($content: '')
  // @content
```

<a name="size"></a>

## Size

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/mixin/size.svg)

Mixin defines the shorthand for complex (eq, min, max) width and height.

```sass
@mixin size($width: null, $height: $width)
```

<details>
<summary>
  <u>Examples</u>
</summary>

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

<a name="width"></a>

### Width

Mixin defines the shorthand for complex (eq, min, max) width.

```sass
@mixin width($args...)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// [eq] width.
@include width(10px)
// [min] width.
@include width(min 10px)
// [min, max] width.
@include width(min 10px, max 30px)
```

</details>

<a name="height"></a>

### Height

Mixin defines the shorthand for complex (eq, min, max) height.

```sass
@mixin height($args...)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// [eq] height.
@include height(10px)
// [min] height.
@include height(min 10px)
// [min, max] height.
@include height(min 10px, max 30px)
```

</details>

<a name="support"></a>

## Support

Mixin determine whether hover is supported.

```sass
@include support-hover
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Capitalize link on hover.
@include support-hover
  &:hover
    text-transform: capitalize
```

</details>

<a name="z-index"></a>

## Z-index

Mixin use the [sass-func](https://www.npmjs.com/package/@stylize/sass-func) to handle the `z-index`.

```sass
@include z-index($path...)
```

```sass
@include set-order($config, $base: 0)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Configure by list and base.
@include set-order(footer header, 100)
// Configure by complex map.
@include set-order((layout: (cashier: (toggle: 2))))

// Z-index [101] by base.
@include z-index(footer)
// Z-index [2] by complex path.
@include z-index(layout cashier toggle)
```

</details>
