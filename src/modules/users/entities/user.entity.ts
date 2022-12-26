import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import History from './history.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 1 })
  role: number;

  @Column({ default: 1 })
  status: number;

  @OneToMany((type) => History, (history) => history.user)
  histories: History[];
}

export default User;
