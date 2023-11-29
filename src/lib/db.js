import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || prismaClientSingleton();

export default prisma; // Use ES6 export syntax

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
