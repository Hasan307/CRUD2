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



        const read_product= await prisma.product.findMany({
            where: {
                id: 1,
            },
        })
       
        
        return NextResponse.json({status: "ok"})
       
    }
    catch(e){
        console.log(e)
    }
  
}
