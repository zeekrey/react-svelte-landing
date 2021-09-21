import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../util/supabaseClient";

const auth = (req: NextApiRequest, res: NextApiResponse) => {
  supabase.auth.api.setAuthCookie(req, res);
};

export default auth;
