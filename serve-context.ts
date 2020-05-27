import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const currentPermission = await Deno.permissions.query({ name: "net" });
if (currentPermission.state !== "granted") {
  console.log("Net permission is required since this is a web server.");
  const netPermission = await Deno.permissions.request({ name: "net" });
  if (netPermission.state === "granted") {
    for await (const req of serve({ port: 8000 })) {
      req.respond({ body: "Hello World\n" });
    }
  } else {
    console.log("Can’t serve pages without net permission.");
  }
}
