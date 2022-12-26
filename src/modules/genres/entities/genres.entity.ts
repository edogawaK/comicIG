import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: 1 })
  status: number;
}
