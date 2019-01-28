import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('locals', {schema: 'smashlounge'})
export class Group {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id',
    })
    id: string;

    @Column('bigint', {
        nullable: true,
        name: 'region',
    })
    region: string | null;

    @Column('character varying', {
        nullable: true,
        length: 130,
        name: 'profileid',
    })
    profileid: string | null;

    @Column('character varying', {
        nullable: true,
        length: 44,
        name: 'name',
    })
    name: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 10,
        scale: 7,
        name: 'latitude',
    })
    latitude: string | null;

    @Column('numeric', {
        nullable: true,
        precision: 11,
        scale: 7,
        name: 'longitude',
    })
    longitude: string | null;

    @Column('bigint', {
        nullable: true,
        name: 'game',
    })
    game: string | null;

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
