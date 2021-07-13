import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "";

  public async insertUser(user: User) {
    await this.getConnection().insert(user).into("labook_users");
  }

  public async getUserByEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from("labook_users")
      .where({ email });

    return User.toUserModel(result[0]);
  }

  public async checkFriends(id: string, id2: string) {
    const result = await this.getConnection()
      .select()
      .where({ user1_id: id, user2_id: id2 })
      .from("labook_friends");

    return result;
  }

  public async addFriend(id: string, id2: string) {
    await this.getConnection()
      .insert({ user1_id: id, user2_id: id2 })
      .into("labook_friends");

    await this.getConnection()
      .insert({ user1_id: id2, user2_id: id })
      .into("labook_friends");
  }

  public async removeFriend(id: string, id2: string) {
    await this.getConnection()
      .delete()
      .where({ user1_id: id, user2_id: id2 })
      .from("labook_friends");

    await this.getConnection()
      .delete()
      .where({ user2_id: id, user1_id: id2 })
      .from("labook_friends");
  }
}
