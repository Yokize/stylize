# Sass-func

<blockquote>
  Sass functions for general usage
</blockquote>

[![build](https://img.shields.io/github/workflow/status/Yokize/stylize/CI?style=flat-square)](https://github.com/Yokize/stylize/actions/workflows/CI.yml)
[![chat](https://img.shields.io/gitter/room/stylize/community?style=flat-square&logo=gitter&color=blue&label=chat)](https://gitter.im/Yokize/stylize)
[![sass](https://img.shields.io/static/v1?style=flat-square&logo=sass&color=blue&label=Sass&message=latest)](https://www.npmjs.com/package/sass)
[![MIT](https://img.shields.io/github/license/Yokize/stylize?style=flat-square&color=blue&label)](https://en.wikipedia.org/wiki/MIT_License)

<details>
<summary>
  <b>Table of Contents</b>
</summary>

- [Font](#font)
- [List](#list)
- [Map](#map)
- [Math](#math)
- [Meta](#meta)
- [String](#string)
- [Unit](#unit)
- [Z-index](#z-index)

</details>

<a name="install"></a>

## Install

```shell
npm install @stylize/sass-func --save-dev
```

### Other packages

| Name                                                                     | Description                | Package                                                                                                                           |
| :----------------------------------------------------------------------- | :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [@stylize/sass-mixin](https://www.npmjs.com/package/@stylize/sass-mixin) | Mixins for general usage   | [![npm](https://img.shields.io/npm/v/@stylize/sass-mixin?style=for-the-badge)](https://www.npmjs.com/package/@stylize/sass-mixin) |
| [@stylize/sass-shape](https://www.npmjs.com/package/@stylize/sass-shape) | Mixins for creating shapes | [![npm](https://img.shields.io/npm/v/@stylize/sass-shape?style=for-the-badge)](https://www.npmjs.com/package/@stylize/sass-shape) |

<a name="usage"></a>

## Usage

Mixins can be imported directly from the package or namespace.

```sass
// Default import with prefixes str-, list-, etc.
@use '~@stylize/sass-func' as *
```

```sass
// Namespaced import without prefix.
@use '~@stylize/sass-func/<namespace>' as *
```

<a name="font"></a>

## Font

Function to create the value for font property.

```sass
font($size: inherit, $line: normal, $weight: normal, $family: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

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

Default family can be configurable by loading module with configuration.

```sass
/// Base family.
$base-family: Arial, sans-serif !default
```

<a name="list"></a>

## List

Forwards `sass:list` so build-in functions can be used.

### chunk

Split the `list` into smaller chunks with defined `size`.

```sass
chunk($list, $size)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// List with 1 chunk.
chunks(item1 item2, 3)
// List with 2 chunks: [item1 item2, item3]
chunks(item1 item2 item3, 2)
```

</details>

### contains

Determine whether the `list` contains the `item`.

```sass
contains($list, $item)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// True as item is found
contains(item1 item2, item1)
```

</details>

### difference

Get the difference between `lists`.

```sass
difference($lists...)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Difference: [item2, item3]
difference([item1 item2], item3 item1)
```

</details>

### drop

Drop `n` items from beginning of the `list`.

```sass
drop($list, $n: 1)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// List: [item2, item3]
drop(item1 item2 item3, 1)
```

</details>

### every

Determine if `predicate` returns true for all items in the `list`.

```sass
every($list, $predicate, $args...)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// True as all items is a string.
every([item1 item2], meta.get-function(is-string))
```

</details>

### fill

Fill out the `list` with a certain number of items.

```sass
fill($list, $n, $value: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// List with 4 zero items.
fill([], 4, 0)
// List with: [item1 item2 0 0].
fill(item1 item2, 4, 0)
```

</details>

### first

Get the first item on the `list`.

```sass
first($list)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// First item: item1
first(item1 item2)
```

</details>

### flatten

Make the `list` flattened to the certain `depth` level.

```sass
flatten($list, $depth: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Flatten to the plain list.
flatten([item1 item2, item3 item4])
// Flatten with only first level depth.
flatten([item1 (item2, [item3 item4])], 1)
```

</details>

### has-multiple

Determine whether there is multiple items in the `list`.

```sass
has-multiple($list)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// False as only 1 item.
has-multiple(item1)
// True as multiple items.
has-multiple(item1 item2)
```

</details>

### has-single

Determine whether there is only one item in the `list`.

```sass
has-single($list)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// True as only 1 item.
has-single(item1)
// False as multiple items.
has-single(item1 item2)
```

</details>

### insert-nth

Insert `value` at the `index` to the `list`.

```sass
insert-nth($list, $index, $value)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Add item between item1 and item3
insert-nth(item1 item3, 2, item2)
```

</details>

### intersection

Returns intersections between `lists`.

```sass
intersection($lists...)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// `item1` as intersection.
intersection(item1 item2, item3 item1)
```

</details>

### is-empty

Determine whether the `list` is empty.

```sass
is-empty($list)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// True as empty.
is-empty([])
// True as have items.
is-empty(item1 item2)
```

</details>

### last

Get the last item on the `list`.

```sass
last($list)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// `item2` as last item.
last(item1 item2)
```

</details>

### last-index

Get the last index of `value` on the `list`.

```sass
last-index($list, $value)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Last index is 2.
last-index(item1 item1 item2, item1)
```

</details>

### map

Iterate through the `list` and call the `function` on each item.

```sass
map($list, $function, $args...)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Invokes function on each item.
map([item1 item2], meta.get-function(do-something))
// Invokes function on each item with extra param.
map([item1 item2], meta.get-function(do-something), 1px)
```

</details>

### prepend

Prepend an `item` to the `list`.

```sass
prepend($list, $item, $separator: auto)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Prepend item to list.
prepend(item1, [item2 item3])
// Prepend item to list and specify separator.
prepend(item1, [item2 item3], comma)
```

</details>

### range

Create a `list` with a specified range (`n`).

```sass
range($n)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Create list: `[1, 2, 3, 4]`
range(4)
```

</details>

### remove

Remove item from the `list`.

```sass
remove($list, $tem)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Remove all item1.
remove(item1 item2 item1, item1)
```

</details>

### remove-nth

Remove item under `index` from the `list`.

```sass
remove-nth($list, $index)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Remove the second item.
remove-nth(item1 item2 item3, 2)
```

</details>

### reverse

Reverse the `list` from end to start.

```sass
reverse($list)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
reverse(item1 item2)
```

</details>

### slice

Slice `list` between `start` and `end`.

```sass
slice($list, $start: 1, $end: null)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Slice list from second item to end.
slice(item1 item2, 2)
```

</details>

### some

Determine if `predicate` returns true for some items in the `list`.

```sass
some($list, $predicate, $args...)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// True as one item is a string.
some([item1 null], meta.get-function(is-string))
```

</details>

### tail

Get all items except the first.

```sass
tail($list)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// [item2 item3] as first item omitted.
tail(item1 item2 item3)
```

</details>

### take

Get first `n` items from the `list`.

```sass
take($list, $n: 1)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// item1 item2 as first 2 items.
take(item1 item2 item3, 2)
```

</details>

### to-string

Joins all the items of the `list` with `glue`.

```sass
to-string($list, $glue: '')
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// `item1/item2` joined with glue.
to-string(item1 item2, '/')
```

</details>

### unique

Removes duplicate values from `list`.

```sass
unique($list)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// `[item1, item2]`
unique(item1 item2 item1)
```

</details>

<a name="map"></a>

## Map

Forwards `sass:map` so built-in functions can be used.

### entries

Get the entries of `map` as list of keys and values.

```sass
entries($map)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// List: [key1 item1]
entries((key1: item1))
```

</details>

<a name="math"></a>

## Math

Forwards `sass:math` so built-in functions can be used.

### pow

Raises `base` to the power of `exponent` with support for numbers with unit.

```sass
pow($base, $exponent)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
pow(16px, 2)
```

</details>

### sqr

Raises `base` to the power of 2 with support for numbers with unit.

```sass
sqr($base)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
sqr(16px)
```

</details>

### sqrt

Get the square root of `number` with support for numbers with unit.

```sass
sqrt($base)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
sqrt(16px)
```

</details>

### to-fixed

Format number to fixed amount of decimals.

```sass
to-fixed($float, $digits: 2)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// 3.14
to-fixed(3.1415, 2)
```

</details>

<a name="meta"></a>

## Meta

Forwards `sass:meta` so built-in functions can be used.

### is-list

Determine whether `var` is list type.

```sass
is-list($var)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// True as it's list
is-list(item1 item2)
```

</details>

### is-map

Determine whether `var` is map type.

```sass
is-map($var)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
is-map((1: item1, 2: item2))
```

</details>

### is-number

Determine whether `var` is number type.

```sass
is-number($var)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
is-number(1px)
```

</details>

### is-string

Determine whether `var` is string type.

```sass
is-string($var)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
is-string(str)
```

</details>

<a name="number"></a>

## Number

### parse

Parse string and create the number.

```sass
parse($value)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
parse('20dpi')
```

</details>

<a name="string"></a>

## String

Forwards `sass:string` so built-in functions can be used.

### drop

Drop `n` chars from beginning of the `string`.

```sass
drop($string, $n: 1)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Result: string
drop('search-string', 7)
```

</details>

### replace

Replace `search` with `replace` in `string`.

```sass
replace($string, $search, $replace: '')
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
replace('search-string', '-string', '-str')
```

</details>

### split

Split `string` with `separator` into substrings.

```sass
split($string, $separator)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
split('-str1-str2-', '-')
```

</details>

### take

Get first `n` chars from the `string`.

```sass
take($string, $n: 1)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
// Result: st
take(string, 2)
```

</details>

### trim

Removes leading and trailing `char` from `string`.

```sass
trim($string, $char: ' ')
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
trim('-string-', '-')
```

</details>

### trim-end

Removes trailing `char` from `string`.

```sass
trim-end($string, $char: ' ')
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
trim-end('string-', '-')
```

</details>

### trim-start

Removes leading `char` from `string`.

```sass
trim-start($string, $char: ' ')
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
trim-start('-string', '-')
```

</details>

<a name="unit"></a>

## Unit

Module have `$base-size !default` that used for `em` and `rem` conversion.

### is

Determine whether `var` is valid unit.

```sass
is($unit)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
is(px)
```

</details>

### get

Get the unit from the `number`.

```sass
get($number)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
get(1px)
```

</details>

### add

Add the `unit` to the `number`.

```sass
add($number, $unit)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
add(1, dpi)
```

</details>

### strip

Remove the unit from the `number`.

```sass
strip($number)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
strip(1dpi)
```

</details>

### em

Convert the units to the em.

```sass
em($number, $base: $base-size)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
em(16px) // 1em
```

</details>

### rem

Convert the units to the rem.

```sass
rem($number, $base: $base-size)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
rem(16px) // 1em
```

</details>

<a name="z-index"></a>

## Z-index

### set-order

Configure orders to be used by index.

```sass
set-order($config, $base: 0)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
set-order(footer header, 100)
set-order((footer: 10, header: 20))
```

</details>

### z-index

Get the z-index by `path` namespace.

```sass
z-index($path...)
```

<details>
<summary>
  <u>Examples</u>
</summary>

```sass
z-index(page, header)
```

</details>
