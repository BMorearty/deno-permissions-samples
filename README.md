# deno-permissions-samples

This repo illustrates different ways to use Deno permissions.

* serve-original.ts

  This is the original web server example from https://deno.land/v1. It just runs
  a server without asking for net permission.

  ```
  deno run --allow-net https://raw.githubusercontent.com/BMorearty/deno-permissions-samples/master/serve-original.ts
  ```

* serve-request.ts

  Illustrates a better paradigm that allows the user to grant permission at runtime
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
  
 * serve-context.ts
 
   Better still is to give the user some context right before asking for permission.
   But to do this, you need to first query if the permission has already been granted.
   
   ```
   deno run --unstable https://raw.githubusercontent.com/BMorearty/deno-permissions-samples/master/serve-context.ts
   ```
 
## Other samples

* request-twice.ts

  Demonstrates that if you request the same permission multiple times during a single run,
  Deno remembers the first answer. Try running this and either granting or denying permission:
  
  ```
  deno run --unstable https://raw.githubusercontent.com/BMorearty/deno-permissions-samples/master/request-twice.ts
  ```
