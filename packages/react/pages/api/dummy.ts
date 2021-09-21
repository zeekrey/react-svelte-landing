import type { NextApiRequest, NextApiResponse } from "next";

const dummy = async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  res.status(200).end();
};

export default dummy;
