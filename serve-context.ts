// serve-context.ts
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

let netPermission = await Deno.permissions.query({ name: "net" });
if (netPermission.state === "prompt") {
  console.log("Net permission needed to serve web pages.");
  netPermission = await Deno.permissions.request({ name: "net" });
}
if (netPermission.state === "granted") {
  for await (const req of serve({ port: 8000 })) {
    req.respond({ body: "Hello World\n" });
  }
} else {
  console.log("Can’t serve pages without net permission.");
}
