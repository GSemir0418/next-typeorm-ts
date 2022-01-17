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
}
