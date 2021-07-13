export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export class Post {
  constructor(
    private id: string,

    private photo: string,

    private description: string,

    private type: POST_TYPES,

    private created_at: Date,

    private author_id: string
  ) {}

  getId() {
    return this.id;
  }

  getPhoto() {
    return this.photo;
  }

  getDescription() {
    return this.description;
  }

  getType() {
    return this.type;
  }

  getCreatedAt() {
    return this.created_at;
  }

  getAuthorId() {
    return this.author_id;
  }

  setId(id: string) {
    this.id = id;
  }

  setPhoto(photo: string) {
    this.photo = photo;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setType(type: POST_TYPES) {
    this.type = type;
  }

  setCreatedAt(created_at: Date) {
    this.created_at= created_at;
  }

  setAuthorId(author_id: string) {
    this.author_id = author_id;
  }

  static toPostModel(post: any): Post {
    return new Post(
      post.id,
      post.photo,
      post.description,
      post.type,
      post.created_at,
      post.author_id
    );
  }
}

export interface PostInputDTO {

   photo: string,

   description: string,

   type: POST_TYPES
}
