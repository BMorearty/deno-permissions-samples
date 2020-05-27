import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const netPermission1 = await Deno.permissions.request({ name: "net" });
console.log(`The first permission request returned ${JSON.stringify(netPermission1)}`);
const netPermission2 = await Deno.permissions.request({ name: "net" });
console.log(`The second permission request returned ${JSON.stringify(netPermission2)}`);
