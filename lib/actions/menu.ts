"use server";
import { databases, DATABASE_ID, MENU_ID } from "../appwrite.config";

export const getMenuData = async () => {
    console.log(process.env.DATABASE_ID, process.env.MENU_ID)
    try {
        const response = await databases.listDocuments(DATABASE_ID!, MENU_ID!);
        return response.documents;
    } catch (error) {
        console.error('Error fetching data from Appwrite:', error);
        return [];
    }
};