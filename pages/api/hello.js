// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  // res.status(200).json({ name: "John Doe" });
  console.log("req-------------");
  const client = await clientPromise;
  const db = client.db("notely");
  switch (req.method) {
    case "POST":
      // let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("notes").insertOne(req.body);
      res.json(myPost);
      break;
    case "GET":
      const allPosts = await db.collection("notes").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
