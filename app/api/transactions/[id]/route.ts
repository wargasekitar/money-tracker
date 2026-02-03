import { supabase } from "@/lib/db"
import { NextResponse } from "next/server"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await supabase
    .from("transactions")
    .delete()
    .eq("id", params.id)

  return NextResponse.json({ success: true })
}
