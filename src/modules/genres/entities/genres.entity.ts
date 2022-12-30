import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genres {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column({ default: 1 })
  status: number;
}
