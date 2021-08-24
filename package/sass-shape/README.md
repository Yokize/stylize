[![chat](https://img.shields.io/gitter/room/stylize/community?style=flat-square&color=informational&logo=gitter&label)](https://gitter.im/Yokize/stylize)
[![sass](https://img.shields.io/static/v1?style=flat-square&logo=sass&color=informational&logoColor=white&label=Sass&message=1.38.0)](https://www.npmjs.com/package/sass)

Sass mixins for creating different shapes.

## Install

```shell script
npm install @stylize/sass-shape --save-dev
```

## Usage

Shapes use [sass-mixin](https://github.com/Yokize/stylize/tree/master/package/sass-mixin), so complex `size`, `width` and `height` args can be defined.

### Circle

Mixin defines the circle with `size` and `background`.

```sass
@use '~@stylize/sass-shape/circle' as *

// Signature.
@include circle($size: null, $background: null)
```

<details>
<summary>Examples</summary>

```sass
// Radius 50%.
@include circle
// Radius 50%, [eq] width × height.
@include circle(20px)
// Radius 50%, [min] width × height.
@include circle(min 20px)
// Radius 50%, [max] width × height, background.
@include circle(max 20px, #fff)
// Radius 50%, [min] width × height, background.
@include circle($size: min 20px, $background: #fff)
// Radius 50%, [eq, min] width × height, background.
@include circle([auto, min 20px], #fff)
// Radius 50%, [eq, min, max] width × height, background.
@include circle([40px, min 20px, max 50px], #fff)
// Radius 50%, [eq, min, max] width × height, gradient background.
@include circle([40px, min 20px, max 50px], linear-gradient(#e66465, #9198e5))
```

</details>

### Ellipse

Mixin defines the ellipse with `width`, `height` and `background`.

```sass
@use '~@stylize/sass-shape/ellipse' as *

// Signature.
@include ellipse($width: null, $height: null, $background: null)
```

<details>
<summary>Examples</summary>

```sass
// Radius 50%.
@include ellipse
// Radius 50%, [eq] width.
@include ellipse(20px)
// Radius 50%, [min] width.
@include ellipse(min 20px)
// Radius 50%, [max] width.
@include ellipse($width: max 20px)
// Radius 50%, [min] width, [max] height, background.
@include ellipse(min 10px, max 20px, #fff)
// Radius 50%, [eq, min] width, [max] height, background.
@include ellipse([auto, min 20px], max 20px, #fff)
// Radius 50%, [eq, min] width, [eq, max] height, background.
@include ellipse([40px, min 20px], [20px, max 10px], #fff)
// Radius 50%, [eq, min] width, [eq, max] height, gradient background.
@include ellipse([40px, min 20px], [20px, max 10px], linear-gradient(#e66465, #9198e5))
```

</details>

### Square

Mixin defines the square with `size`, `border-radius` and `background`.

```sass
@use '~@stylize/sass-shape/square' as *

// Signature.
@include square($size: null, $radius: null, $background: null)
```

<details>
<summary>Examples</summary>

```sass
// [eq] width × height.
@include square(20px)
// [min] width × height, radius.
@include square(min 20px, 5px)
// [max] width × height, radius, background.
@include square(max 20px, 5px, #fff)
// [min] width × height, radius, background.
@include square($size: min 20px, $radius: 4px, $background: #fff)
// [eq, min] width × height, radius, background.
@include square([auto, min 20px], 5px, #fff)
// [eq, min, max] width × height, [top-left, bottom-right] radius, background.
@include square([40px, min 20px, max 50px], 5px 4px, #fff)
// [eq, min, max] width × height, [top-left, bottom-right] radius, background.
@include square([40px, min 20px, max 50px], [5px, 4px], #fff)
// [eq, min, max] width × height, [top-left, bottom-right] radius, gradient background.
@include square([40px, min 20px, max 50px], [5px, 4px], linear-gradient(#e66465, #9198e5))
```

</details>

### Rectangle

Mixin defines the rectangle with `width`, `height`, `border-radius` and `background`.

```sass
@use '~@stylize/sass-shape/rectangle' as *

// Signature.
@include rectangle($width: null, $height: null, $radius: null, $background: null)
```

<details>
<summary>Examples</summary>

```sass
// [min] width.
@include rectangle(min 20px)
// [eq] width, [max] height.
@include rectangle(10px, max 20px)
// [eq] width, background.
@include rectangle($width: 10px, $background: #fff)
// [min] width, [eq] height, radius.
@include rectangle(min 10px, 20px, 4px)
// [max] width, [max] height, radius, background.
@include rectangle(max 10px, max 20px, 4px, #fff)
// [eq, min] width, [max] height, radius, background.
@include rectangle([auto, min 20px], max 20px, 4px, #fff)
// [eq, min] width, [eq, min] height, [top-left, bottom-right] radius, background.
@include rectangle([40px, min 20px], [20px, min 10px], 4px 3px, #fff)
// [eq, min] width, [eq, min] height, [top-left, bottom-right] radius, background.
@include rectangle([40px, min 20px], [20px, min 10px], [4px, 3px], #fff)
// [eq, min] width, [eq, min] height, [top-left, bottom-right] radius, gradient background.
@include rectangle([40px, min 20px], [20px, min 10px], [4px, 3px], linear-gradient(#e66465, #9198e5))
```

</details>

### Triangle

Mixin defines the triangle with `direction`, `color`, `width` and `height`.

```sass
@use '~@stylize/sass-shape/triangle' as *

// Signature.
@include triangle($props: [])
@include triangle($direction, $color, $width, $height: null)
```

<details>
<summary>Examples</summary>

```sass
@include triangle(top #fff 5px)
@include triangle(top, #fff, 5px, 10px)
```

</details>

## Coverage

The mixins are completely covered with [sass-true](https://www.npmjs.com/package/sass-true).
