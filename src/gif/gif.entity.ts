import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gifs', {schema: 'smashlounge'})
export class Gif {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id',
    })
    id: string;

    @Column('bigint', {
        nullable: false,
        default: () => '(1)::bigint',
        name: 'typeid',
    })
    typeid: string;

    @Column('bigint', {
        nullable: false,
        default: () => '(0)::bigint',
        name: 'dataid',
    })
    dataid: string;

    @Column('character varying', {
        nullable: false,
        length: 260,
        name: 'source',
    })
    source: string;

    @Column('bigint', {
        nullable: false,
        name: 'submittedby',
    })
    submittedby: string;

    @Column('character varying', {
        nullable: false,
        length: 300,
        name: 'url',
    })
    url: string;

    @Column('character varying', {
        nullable: false,
        length: 400,
        name: 'description',
    })
    description: string;

    @Column('bigint', {
        nullable: false,
        name: 'score',
    })
    score: string;

    @Column('timestamp with time zone', {
        nullable: true,
        name: 'created_at',
    })
    created_at: Date | null;

    @Column('timestamp with time zone', {
        nullable: true,
        name: 'updated_at',
    })
    updated_at: Date | null;

}
