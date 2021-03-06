import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("vodvotes",{schema:"smashlounge"})
export class vodvotes {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"vodid"
        })
    vodid:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"voterid"
        })
    voterid:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"direction"
        })
    direction:boolean;
        
}
