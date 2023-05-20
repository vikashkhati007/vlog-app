// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '../../database/database/conn';
import Posts from '@/app/database/model/user';


export async function GET(req:any, res:any) {
  connectMongo();
  const {nextUrl} = req;
  const compare = nextUrl.search.substring(1,5);
  try {
    if(compare === "post"){
      const PostID = nextUrl.search.replace("?postID=", "");
      const data = await Posts.findById(PostID);
      return new Response(JSON.stringify(data),{status:200});
    }
   if(compare === "titl"){
    const postName = nextUrl.search.replace("?title=", "");
        const post = await Posts.find({ title: { $regex: postName, $options: 'i' } });
        return new Response(JSON.stringify(post),{status:200});
   }
    else{
      const data = await Posts.find({});
      return new Response(JSON.stringify(data), {status: 200});
    }
  } catch (error) {
    return new Response(JSON.stringify("error"), {status: 500});
  }
}

export async function POST(req:any) {
    await connectMongo();
    try {
      const body = await req.json();
      if(!body) return new Response(JSON.stringify("Fill Form Data Properly"), {status: 500})
      const formdata = Posts.create(body);
      return new Response(JSON.stringify(formdata), {status: 200})
      // process the request body here
    } catch (error) {
      return new Response(JSON.stringify(error), {status: 500});
    }
  }


