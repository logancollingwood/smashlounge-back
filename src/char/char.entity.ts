import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import { Gif } from '../gif/gif.entity';

@Entity('charinfo', {schema: 'smashlounge'})
export class Char {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id',
    })
    id: string;

    @Column('character varying', {
        nullable: false,
        length: 30,
        name: 'name',
    })
    name: string;

    @Column('bigint', {
        nullable: true,
        name: 'tierdata',
    })
    tierdata: string | null;

    @Column('character varying', {
        nullable: false,
        length: 11,
        name: 'weight',
    })
    weight: string;

    @Column('character varying', {
        nullable: false,
        length: 11,
        name: 'fallspeed',
    })
    fallspeed: string;

    @Column('boolean', {
        nullable: false,
        name: 'walljump',
        })
    walljump: boolean;

    @Column('character varying', {
        nullable: false,
        length: 500,
        name: 'guide',
        })
    guide: string;

    @Column('bigint', {
        nullable: false,
        name: 'game',
        })
    game: string;

    gifs: Gif[];

}
