import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../util/supabaseClient";

type Data = {
  name: string;
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email } = req.body;

  const { error } = await supabase
    .from("friseurLeads")
    .insert([{ name, email }]);

  if (error) res.status(500);
  else res.status(200).end();
}
