import { verifyJwtAccessToken } from "@/app/lib/jwt";
import prisma from "@/app/lib/prisma";

export async function GET(request: Request, {params}: {params:{Id:number}}) {
    const accessToken = request.headers.get("authorization");
    if(!accessToken || !verifyJwtAccessToken(accessToken)){
        return new Response(JSON.stringify({message: "Unauthorized"}), {
            status: 401
        })
    }
    const userPost = await prisma.post.findMany({
        where:{authorId: +params.Id},
        include:{
            author:{
                select:{
                    email:true,
                    name:true
                }
            }
        }
    })

    return new Response(JSON.stringify(userPost));
}