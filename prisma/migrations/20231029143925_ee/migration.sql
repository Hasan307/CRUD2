/*
  Warnings:

  - You are about to alter the column `startsAt` on the `product` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endsAt` on the `product` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `lastLogin` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[id]` on the table `cart` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `product_meta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `product_review` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `startsAt` DATETIME NULL,
    MODIFY `endsAt` DATETIME NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `firstName` VARCHAR(100) NULL,
    MODIFY `lastName` VARCHAR(100) NULL,
    MODIFY `mobile` VARCHAR(100) NULL,
    MODIFY `email` VARCHAR(100) NULL,
    MODIFY `password` VARCHAR(100) NULL,
    MODIFY `admin` TINYINT NULL,
    MODIFY `registeredAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `lastLogin` DATETIME NULL,
    MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `cart_id_key` ON `cart`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `order_id_key` ON `order`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `product_id_key` ON `product`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `product_meta_id_key` ON `product_meta`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `product_review_id_key` ON `product_review`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_id_key` ON `user`(`id`);
