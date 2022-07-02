-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user',

    UNIQUE INDEX `User_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cookies` (
    `debtorId` VARCHAR(191) NOT NULL,
    `creditorId` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Cookies_debtorId_creditorId_key`(`debtorId`, `creditorId`),
    PRIMARY KEY (`debtorId`, `creditorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cookies` ADD CONSTRAINT `Cookies_debtorId_fkey` FOREIGN KEY (`debtorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cookies` ADD CONSTRAINT `Cookies_creditorId_fkey` FOREIGN KEY (`creditorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
