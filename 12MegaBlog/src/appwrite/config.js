import conf from '../conf'
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(appWriteUrl)
            .setProject(appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}) {
        try {
            return this.databases.createDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId,slug, {
                title,
                content,
                featuredImage,
                status,
                userId,
            })
        } catch (error) {
            console.log("Appwrite service :: CreatePost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,content, featuredImage,status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: UpdatePost :: error ");
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
            )

            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error ",error)
            return false;
        }
    }


    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
           )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error ", error);
            return false;
       }
    }
    
    async getPosts(queries =[Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appWriteCollectionId,
                queries,
            )
            
        } catch(error) {
            console.log("Appwrite service :: getPosts :: error ", error)
            return false;
        }
    }

    // file upload method 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite service :: upload :: error ", error)
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: delete File :: error ", error)
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId,
            fileId,
        )
    }
}

const service = new Service();


export default service();

