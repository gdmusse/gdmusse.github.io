import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_posts";

  public async insertPost(post: Post) {
    await this.getConnection().insert(post).into(PostDatabase.TABLE_NAME);
  }

  public async getPostById(id: string) {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_NAME)
      .where({ id });

    if (result.length === 0) {
      throw new Error("No post found, check id.");
    }
    return Post.toPostModel(result[0]);
  }
}
