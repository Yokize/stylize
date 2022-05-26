<blockquote>
  Collection of Sass mixins for creating various shapes
</blockquote>

![test](https://img.shields.io/github/workflow/status/Yokize/stylize/CI?style=flat-square&label=test)
![deps](https://img.shields.io/librariesio/release/npm/@stylize/sass-shape?style=flat-square)
![sass](https://img.shields.io/static/v1?style=flat-square&logo=sass&color=blue&label=sass&message=latest)
![MIT](https://img.shields.io/github/license/Yokize/stylize?style=flat-square&color=blue)
[![chat](https://img.shields.io/gitter/room/stylize/community?style=flat-square&logo=gitter&color=blue&label=chat)](https://gitter.im/Yokize/stylize)

<details>
<summary>
  <b>Table of Contents</b>
</summary>

- [Circle](#circle)
- [Ellipse](#ellipse)
- [Square](#square)
- [Rectangle](#rectangle)
- [Triangle](#triangle)

</details>

<a name="install"></a>

## Install

```shell
npm install @stylize/sass-shape --save-dev
```

### Other packages

| Name                                                                     | Description              | Package                                                                                                                           |
| :----------------------------------------------------------------------- | :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [@stylize/sass-func](https://www.npmjs.com/package/@stylize/sass-func)   | Func's for general usage | [![npm](https://img.shields.io/npm/v/@stylize/sass-func?style=for-the-badge)](https://www.npmjs.com/package/@stylize/sass-func)   |
| [@stylize/sass-mixin](https://www.npmjs.com/package/@stylize/sass-mixin) | Mixins for general usage | [![npm](https://img.shields.io/npm/v/@stylize/sass-mixin?style=for-the-badge)](https://www.npmjs.com/package/@stylize/sass-mixin) |

<a name="usage"></a>

## Usage

Mixins can be imported directly from the package or namespace.

```sass
@use '~@stylize/sass-shape' as *
```

Shapes use [sass-mixin](https://www.npmjs.com/package/@stylize/sass-mixin), so complex `size`, `width` and `height` args can be used.

<a name="circle"></a>

## Circle

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/shape/circle.svg)

Mixin defines the circle with `size` and `color`.

```sass
@include circle($size: null, $color: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Radius 50%.
@include circle
// Radius 50%, [eq] width × height.
@include circle(20px)
// Radius 50%, [min] width × height.
@include circle(min 20px)
// Radius 50%, [max] width × height, color.
@include circle(max 20px, #fff)
// Radius 50%, [min] width × height, color.
@include circle($size: min 20px, $color: #fff)
// Radius 50%, [eq, min] width × height, color.
@include circle([auto, min 20px], #fff)
// Radius 50%, [eq, min, max] width × height, color.
@include circle([40px, min 20px, max 50px], #fff)
// Radius 50%, [eq, min, max] width × height, gradient color.
@include circle([40px, min 20px, max 50px], linear-gradient(#fff, #000))
```

</details>

<a name="ellipse"></a>

## Ellipse

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/shape/ellipse.svg)

Mixin defines the ellipse with `width`, `height` and `color`.

```sass
@include ellipse($width: null, $height: null, $color: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Radius 50%.
@include ellipse
// Radius 50%, [eq] width.
@include ellipse(20px)
// Radius 50%, [min] width.
@include ellipse(min 20px)
// Radius 50%, [max] width.
@include ellipse($width: max 20px)
// Radius 50%, [min] width, [max] height, color.
@include ellipse(min 10px, max 20px, #fff)
// Radius 50%, [eq, min] width, [max] height, color.
@include ellipse([auto, min 20px], max 20px, #fff)
// Radius 50%, [eq, min] width, [eq, max] height, color.
@include ellipse([40px, min 20px], [20px, max 10px], #fff)
// Radius 50%, [eq, min] width, [eq, max] height, gradient color.
@include ellipse([40px, min 20px], [20px, max 10px], linear-gradient(#fff, #000))
```

</details>

<a name="square"></a>

## Square

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/shape/square.svg)

Mixin defines the square with `size`, `radius` and `color`.

```sass
@include square($size: null, $radius: null, $color: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// [eq] width × height.
@include square(20px)
// [min] width × height, radius.
@include square(min 20px, 5px)
// [max] width × height, radius, color.
@include square(max 20px, 5px, #fff)
// [min] width × height, radius, color.
@include square($size: min 20px, $radius: 4px, $color: #fff)
// [eq, min] width × height, radius, color.
@include square([auto, min 20px], 5px, #fff)
// [eq, min, max] width × height, [top-left, bottom-right] radius, color.
@include square([40px, min 20px, max 50px], 5px 4px, #fff)
// [eq, min, max] width × height, [top-left, bottom-right] radius, color.
@include square([40px, min 20px, max 50px], [5px, 4px], #fff)
// [eq, min, max] width × height, [top-left, bottom-right] radius, gradient color.
@include square([40px, min 20px, max 50px], [5px, 4px], linear-gradient(#fff, #000))
```

</details>

<a name="rectangle"></a>

## Rectangle

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/shape/rectangle.svg)

Mixin defines the rectangle with `width`, `height`, `radius` and `color`.

```sass
@include rectangle($width: null, $height: null, $radius: null, $color: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// [min] width.
@include rectangle(min 20px)
// [eq] width, [max] height.
@include rectangle(10px, max 20px)
// [min] width, [eq] height, radius.
@include rectangle(min 10px, 20px, 4px)
// [max] width, [max] height, radius, color.
@include rectangle(max 10px, max 20px, 4px, #fff)
// [eq, min] width, [max] height, radius, color.
@include rectangle([auto, min 20px], max 20px, 4px, #fff)
// [eq] width, [eq] height, [top-left, bottom-right] radius, color.
@include rectangle($width: 10px, $height: 20px, $radius: 4px 3px, $color: #fff)
// [eq, min] width, [eq, min] height, [top-left, bottom-right] radius, color.
@include rectangle([40px, min 20px], [20px, min 10px], 4px 3px, #fff)
// [eq, min] width, [eq, min] height, [top-left, bottom-right] radius, color.
@include rectangle([40px, min 20px], [20px, min 10px], [4px, 3px], #fff)
// [eq, min] width, [eq, min] height, [top-left, bottom-right] radius, gradient color.
@include rectangle([40px, min 20px], [20px, min 10px], [4px, 3px], linear-gradient(#fff, #000))
```

</details>

<a name="triangle"></a>

## Triangle

![image](https://raw.githubusercontent.com/Yokize/stylize/main/.github/assets/shape/triangle.svg)

Mixin defines the triangle with `direction`, `color`, `width` and `height`.

```sass
@include triangle($direction, $color, $width, $height: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// ↑ Triangle in top direction.
@include triangle(top #fff 5px)
// ↖ Triangle in top-left direction.
@include triangle(top-left, #fff, 5px, 10px)
```

</details>
