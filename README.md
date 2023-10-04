<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Write File

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Write data to a file.



<section class="usage">

## Usage

To use in Observable,

```javascript
writeFile = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-write-file@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var writeFile = require( 'path/to/vendor/umd/fs-write-file/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/fs-write-file@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.writeFile;
})();
</script>
```

#### writeFile( file, data\[, options], clbk )

Asynchronously write `data` to a `file`.

```javascript
var join = require( 'path' ).join;

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

writeFile( fpath, 'beep boop\n', onWrite );

function onWrite( error ) {
    if ( error ) {
        throw error;
    }
}
```

The `data` argument may be either a `string` or a [`Buffer`][@stdlib/buffer/ctor].

```javascript
var join = require( 'path' ).join;
var string2buffer = require( '@stdlib/buffer-from-string' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

writeFile( fpath, string2buffer( 'beep boop\n' ), onWrite );

function onWrite( error ) {
    if ( error ) {
        throw error;
    }
}
```

The function accepts the same `options` and has the same defaults as [`fs.writeFile()`][node-fs].

#### writeFile.sync( file, data\[, options] )

Synchronously writes `data` to a `file`.

```javascript
var join = require( 'path' ).join;

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

var err = writeFile.sync( fpath, 'beep boop\n' );
if ( err instanceof Error ) {
    throw err;
}
```

The function accepts the same `options` and has the same defaults as [`fs.writeFileSync()`][node-fs].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this `writeFile.sync` and [`fs.writeFileSync()`][node-fs] is that [`fs.writeFileSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent directory path) and this API will return an `error`. Hence, the following anti-pattern

    <!-- run-disable -->

    ```javascript
    var fs = require( 'fs' );

    // Check for directory path existence to prevent an error being thrown...
    if ( fs.existsSync( '/path/to' ) ) {
        fs.writeFileSync( '/path/to/file.txt', 'beep boop\n' );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    <!-- run-disable -->

    ```javascript
    var writeFile = require( '@stdlib/fs-write-file' );

    // Explicitly handle the error...
    var err = writeFile.sync( '/path/to/file.txt', 'beep boop\n' );
    if ( err instanceof Error ) {
        // You choose what to do...
        throw err;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript">
(function () {
var join = require( 'path' ).join;
var writeFile = require( '@stdlib/fs-write-file' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

// Synchronously write data to a file:
var err = writeFile.sync( fpath, 'beep boop\n', 'utf8' );
// returns null

console.log( err instanceof Error );
// => false

// Asynchronously write data to a file:
writeFile( fpath, 'beep boop\n', onWrite );

function onWrite( error ) {
    if ( error ) {
        console.error( 'Error: %s', error.message );
    }
    console.log( 'Success!' );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/fs-exists`][@stdlib/fs/exists]</span><span class="delimiter">: </span><span class="description">test whether a path exists on the filesystem.</span>
-   <span class="package-name">[`@stdlib/fs-read-file`][@stdlib/fs/read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-write-file.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-write-file

[test-image]: https://github.com/stdlib-js/fs-write-file/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/fs-write-file/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-write-file/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-write-file?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-write-file.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-write-file/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/fs-write-file#cli
[cli-url]: https://github.com/stdlib-js/fs-write-file/tree/cli
[@stdlib/fs-write-file]: https://github.com/stdlib-js/fs-write-file/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs-write-file/tree/deno
[umd-url]: https://github.com/stdlib-js/fs-write-file/tree/umd
[esm-url]: https://github.com/stdlib-js/fs-write-file/tree/esm
[branches-url]: https://github.com/stdlib-js/fs-write-file/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-write-file/main/LICENSE

[node-fs]: https://nodejs.org/api/fs.html

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor/tree/umd

[standard-stream]: https://en.wikipedia.org/wiki/Pipeline_%28Unix%29

<!-- <related-links> -->

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs-exists/tree/umd

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs-read-file/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
