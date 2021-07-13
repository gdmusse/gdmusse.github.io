import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { Post, PostInputDTO, POST_TYPES } from "../model/Post";
import { PostDatabase } from "../data/PostDatabase";

export class PostBusiness {
  async createPost(input: PostInputDTO, token: string): Promise<string> {
    try {
      const authenticator = new Authenticator();
      const verifiedToken = authenticator.getData(token);

      if (!token) {
        throw new Error("A jwt must be provided");
      }

      if (!input.photo || !input.description || !input.type) {
        throw new Error(
          'Fields "photo", "description" and "type" are required'
        );
      }

      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generateId();

      const now: Date = new Date();

      const post = new Post(
        id,
        input.photo,
        input.description,
        input.type,
        now,
        verifiedToken.id
      );

      const postDatabase = new PostDatabase();
      await postDatabase.insertPost(post);

      return "Post created succesfully.";
    } catch (error) {
      if (error.message.includes("Data truncated for column 'type'")) {
        throw new Error("'type' can only be 'normal' or 'event' ");
      }
      throw new Error(error.message);
    }
  }

  async getPostByID(id: string, token: string): Promise<Post> {
    const authenticator = new Authenticator();
    authenticator.getData(token);

    if (!token) {
      throw new Error("A jwt must be provided");
    }

    const postDatabase = new PostDatabase();
    const post = await postDatabase.getPostById(id);

    return post;
  }
}
