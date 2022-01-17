import "reflect-metadata";
import { createConnection } from "typeorm";
import { Post } from "./entity/Post";

createConnection()
  .then(async (connection) => {
    // 在connection中取出manager
    const { manager } = connection;
    const posts = await manager.find(Post);
    // 第一次查找全部Post数据应该为空
    console.log(posts);
    const p = new Post();
    p.title = "Post 1";
    p.content = "我的第一篇博客";
    // 保存p对象
    await manager.save(p);
    const posts2 = await manager.find(Post);
    // 应该有新增的一条数据
    console.log(posts2);
    // 最后要关闭连接
    connection.close();
  })
  .catch((error) => console.log(error));
