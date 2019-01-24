import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("framedatamoves",{schema:"smashlounge"})
export class framedatamoves {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"name"
        })
    name:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:130,
        name:"description"
        })
    description:string;
        
}
