import { UserDatabase } from "../data/UserDatabase";
import { FriendDTO, LoginInputDTO, User, UserInputDTO } from "../model/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  async createUser(input: UserInputDTO): Promise<string> {
    try {
      if (!input.name || !input.email || !input.password) {
        throw new Error('Fields "name", "email" and "password" are required');
      }
      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generateId();

      const hashManager = new HashManager();
      const cypherPassword = await hashManager.hash(input.password);

      const user = new User(id, input.name, input.email, cypherPassword);

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const authenticator = new Authenticator();
      const accessToken = authenticator.generateToken({ id });

      return accessToken;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUserByEmail(input: LoginInputDTO): Promise<string> {
    try {
      if (!input.email || !input.password) {
        throw new Error('Fields "email" and "password" are required');
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.getUserByEmail(input.email);

      if (!user) {
        throw new Error("Invalid email");
      }

      const hashManager = new HashManager();
      const hashCompare = await hashManager.compare(
        input.password,
        user.getPassword()
      );

      if (!hashCompare) {
        throw new Error("Invalid password");
      }

      const authenticator = new Authenticator();
      const accessToken = authenticator.generateToken({
        id: user.getId(),
      });

      return accessToken;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addFriend(input: FriendDTO, token: string): Promise<void> {
    try {
      const authenticator = new Authenticator();
      const verifiedToken = authenticator.getData(token);

      if (!token) {
        throw new Error("A jwt must be provided");
      }

      if (!input) {
        throw new Error('Field "id" is required');
      }

      const userDatabase = new UserDatabase();
      const friends = await userDatabase.checkFriends(
        verifiedToken.id,
        input.id
      );

      if (friends.length !== 0) {
        throw new Error("You are already friends with this user");
      } else {
        return await userDatabase.addFriend(verifiedToken.id, input.id);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async removeFriend(input: FriendDTO, token: string): Promise<void> {
    try {
      const authenticator = new Authenticator();
      const verifiedToken = authenticator.getData(token);

      if (!token) {
        throw new Error("A jwt must be provided");
      }

      if (!input) {
        throw new Error('Field "id" is required');
      }

      const userDatabase = new UserDatabase();
      const friends = await userDatabase.checkFriends(
        verifiedToken.id,
        input.id
      );

      if (friends.length === 0) {
        throw new Error("You are not friends with this user");
      } else {
        return await userDatabase.removeFriend(verifiedToken.id, input.id);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
