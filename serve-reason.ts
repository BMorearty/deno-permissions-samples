// serve-reason.ts
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const netPermission = await Deno.permissions.request(
  { name: "net", reason: "Net permission needed to serve web pages." },
);
if (netPermission.state === "granted") {
  for await (const req of serve({ port: 8000 })) {
    req.respond({ body: "Hello World\n" });
  }
} else {
  console.log("Can’t serve pages without net permission.");
}
