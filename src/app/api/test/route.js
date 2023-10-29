import {PrismaClient} from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST (req, res) {
    const prisma= new PrismaClient();
    try{
        const prisma= new PrismaClient();
        // const result = await prisma.user.createMany({
        //     data: [
        //         {   id:1,
        //             firstName: "kdjs",
        //             middleName: "lks",
        //             lastName: "ls",
        //             mobile: "ewew",
        //             email: "ksdl",
        //             password: "lksdjd",
        //             admin:1,
                    



        //         },
        //         {   id:2,
        //             firstName: "kdjss",
        //             middleName: "lsdks",
        //             lastName: "lass",
        //             mobile: "ewasew",
        //             email: "ksasdl",
        //             password: "lksasdjd",
        //             admin:0,


        //         }
            
        //     ]
        // })

        // const createProduct = await prisma.product.createMany({
        //     data: [
        //         {
        //             firstName: "kdjs",
        //             metaTitle: "lks",
        //             slug: "ls",
        //             summary: "ewew",
        //             price:100,
        //             discount:10,
        //             userId  : 1,
    

        //         },
        //         {
        //             firstName: "ksdjs",
        //             metaTitle: "lasks",
        //             slug: "lass",
        //             summary: "sewew",
        //             price:100,
        //             discount:20,
        //             userId  : 1,
    

        //         }
        //     ]
        // })
        // const product_meta = await prisma.product_meta.createMany({
        //     data: [
        //         {
        //             key: "kdjs",
        //             content: "lks",
        //             productId: 7,
        //         },
        //         {
        //             key: "kdjss",
        //             content: "lsks",
        //             productId: 7,
        //         }
        //     ]
        // })
        const product_review = await prisma.product_review.createMany({
            
        })

        return NextResponse.json({ status: "Success" });
    }
    catch(error){
      
       console.log(error)
    }
}