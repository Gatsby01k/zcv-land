import { zcashRpc } from "@/lib/zcashRpc";

const ZEC_ADDRESS =
  "u14rahgadre4e8s2t4jxnmn2rjtdk7zvvzwykkcxp79e3ymmgmgckzv6n8awsy0xx7prkrxclkqk2vldjvvppafemhr4r0z8ddxf4a0fx9jdtjeyxj69ewh2jg9erez45npdnxx568gg2v420w8zynukvqdl0gj98wevza9j9kfqh2lwy3";

const REQUIRED_CONFIRMATIONS = 10;

export async function GET(req: Request) {
  const memo = new URL(req.url).searchParams.get("memo");
  if (!memo) {
    return Response.json({ error: "memo required" }, { status: 400 });
  }

  const received = await zcashRpc("z_listreceivedbyaddress", [
    ZEC_ADDRESS,
    1,
  ]);

  const tx = received.find((t: any) => t.memo === memo);

  if (!tx) {
    return Response.json({ status: "waiting" });
  }

  return Response.json({
    status:
      tx.confirmations >= REQUIRED_CONFIRMATIONS
        ? "confirmed"
        : "pending",
    confirmations: tx.confirmations,
    amount: tx.amount,
    txid: tx.txid,
  });
}
