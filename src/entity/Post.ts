import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// posts表的实体
@Entity("posts")
export class Post {
  // 自增 主键
  @PrimaryGeneratedColumn("increment")
  id: string;
  // 类型为varchar的列
  @Column("varchar")
  title: string;
  // 类型为text的列
  @Column("text")
  content: string;
  // Partial的作用在于 不需要将Post的全部属性都传递过来
  constructor(attributes: Partial<Post>) {
    // 将attributes的全部属性放到this上即可
    Object.assign(this, attributes);
  }
}
