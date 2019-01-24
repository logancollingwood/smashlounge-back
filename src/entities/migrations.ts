import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("migrations",{schema:"smashlounge"})
export class migrations {

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"migration"
        })
    migration:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"batch"
        })
    batch:string;
        
}
