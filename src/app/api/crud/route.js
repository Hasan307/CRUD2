import { PrismaClient } from "@prisma/client";
import  { NextResponse } from "next/server";
import { stringify } from "postcss";
export async function POST (req, res) {
    const prisma= new PrismaClient();
    try{
        // const prisma= new PrismaClient();
        // const updateUser= await prisma.user.update ({
        //     where: {
        //         id: 1,
        //     },
        //     data: {
        //         firstName: "Md",
        //         middleName: "Abu",
        //         lastName: "Hasan",
        //         mobile: "1234321",
        //         email: "m.a.",
        //         password: "321",
        //         admin:1,
        //     },
        // })


        // const deleteUser= await prisma.user.delete({
        //     where: {
        //         id: 2,
        //     },
        // })



        // const read_product= await prisma.product.findMany({
        //     where: {
        //         id: 1,
        //     },
        // })

    //     const result = await prisma.product.aggregate({
    //         _avg: { price: true },
    //         _count: { price: true },
    //         _max: { price: true },
    //         _min: { price: true },
    //         _sum: { price: true },
    //   });

    const result = await prisma.product_review.groupBy({
        by:["rating"],
        _count:{
            id:true
             },
             having: {
                 rating: {
                     lte: 4
                 }
             }
      
    })

       
        
        return NextResponse.json({status: "ok", result: result})
       
    }
    catch(e){
        console.log(e)
    }
  
}
