import "reflect-metadata";
import { createConnection } from "typeorm";
import { Post } from "./entity/Post";

createConnection()
  .then(async (connection) => {
    const { manager } = connection;
    const posts = await manager.find(Post);
    if (posts.length === 0) {
      await manager.save(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
          return new Post({
            title: `Post ${v}`,
            content: `这是我的第${v}篇博客`,
          });
        })
      );
      console.log(`posts数据填充完成!`);
    }
    connection.close();
  })
  .catch((error) => console.log(error));
