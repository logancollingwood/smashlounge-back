import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("gifvotes",{schema:"smashlounge"})
export class gifvotes {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"gifid"
        })
    gifid:string;
        

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
