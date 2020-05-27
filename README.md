# deno-permissions-samples

This repo illustrates different ways to use Deno permissions.

* serve-original.ts

  This is the original web server example from https://deno.land/v1

  ```
  deno run --allow-net https://raw.githubusercontent.com/BMorearty/deno-permissions-samples/master/serve-original.ts
  ```

* serve-request.ts

  A better paradigm that allows the user to grant permission at runtime
  instead of requiring them to grant it on the command line
  (but also allows command line grant).

  Ask at runtime:

  ```
  deno run --unstable https://raw.githubusercontent.com/BMorearty/deno-permissions-samples/master/serve-request.ts
  ```

  Grant on command line:

  ```
  deno run --unstable --allow-net https://raw.githubusercontent.com/BMorearty/deno-permissions-samples/master/serve-request.ts
  ```
