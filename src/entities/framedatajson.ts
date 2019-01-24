import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("framedatajson",{schema:"smashlounge"})
export class framedatajson {

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
        

    @Column("text",{ 
        nullable:false,
        name:"json_text"
        })
    json_text:string;
        
}
