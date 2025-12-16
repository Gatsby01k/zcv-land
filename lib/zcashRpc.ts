export async function zcashRpc(method: string, params: any[] = []) {
  const res = await fetch("http://127.0.0.1:8232", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.ZCASH_RPC_USER +
            ":" +
            process.env.ZCASH_RPC_PASSWORD
        ).toString("base64"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "1.0",
      id: "zcv",
      method,
      params,
    }),
  });

  const json = await res.json();
  return json.result;
}
