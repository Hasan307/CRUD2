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
        // const product_review = await prisma.product_review.createMany({
        //     data: [
        //         {
        //             title: "kdjs",
        //             content: "lks",
        //             rating: 5,
        //             productId: 7,
                 
        //         },
        //         {
        //             title: "kdjss",
        //             content: "lsks",
        //             rating: 4,
        //             productId: 7,
                    
        //         }
        //     ]
            
        // })
        // const order_create= await prisma.order.createMany({
        //     data: [
        //         {
        //             title: "kdjs",
        //             token: "lks",
        //             subTotal: 5,
        //             itemDiscount: 5,
        //             tax: 5,
        //             total: 5,
        //             discount: 5,
        //             grandTotal: 5,
        //             userId: 1,
        //             firstName: "kdjs",
        //             middleName: "lks",
        //             lastName: "ls",
        //             mobile: "ewew",
        //             email: "ksdl",
        //             city: "lksdjd",
        //             country: "lksdjd"

        //         },
        //         {
        //             title: "kdjss",
        //             token: "lsks",
        //             subTotal: 5,
        //             itemDiscount: 5,
        //             tax: 5,
        //             total: 5,
        //             discount: 5,
        //             grandTotal: 5,
        //             userId: 1,
        //             firstName: "kdjs",
        //             middleName: "lks",
        //             lastName: "ls",
        //             mobile: "ewew",
        //             email: "ksdl",
        //             city: "lksdjd",
        //             country: "lksdjd"

        //         }
        //     ]
        // }) 
        


        // const category_create= await prisma.category.createMany({
        //     data:[
        //         {
        //             title: "kdjs",
        //             metaTitle: "lks",
        //             slug: "ls",
        //             content: "ewew",
                   
        //         },
        //         {
        //             title: "kdjss",
        //             metaTitle: "lks",
        //             slug: "lss",
        //             content: "ewew",
                    
        //         }
            
        //     ]
        // })


        const cart_create= await prisma.cart.createMany({
            data:[
                {
                    sessionId: "kdjs",
                    token: "lks",
                    userId: 1,
                    status: "1",
                    
                    firstName: "kdjs",
                    middleName: "lks",
                    lastName: "ls",
                    mobile: "ewew",
                    email: "ksdl",
                    city: "lksdjd",
                    country: "lksdjd"
                },
                {
                   sessionId: "kdxjs",
                    token: "lkds",
                    userId: 1,
                
                    status: "j",
                  
                    firstName: "kdjs",
                    middleName: "lks",
                    lastName: "ls",
                    mobile: "ewew",
                    email: "ksdl",
                    city: "lksdjd",
                    country: "lksdjd"
                }
            ]
        })

        return NextResponse.json({ status: "Success" });
    }
    catch(error){
      
       console.log(error)
    }
}