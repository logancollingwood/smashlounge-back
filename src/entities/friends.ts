import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("friends",{schema:"smashlounge"})
export class friends {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"myid"
        })
    myid:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"friendid"
        })
    friendid:string;
        
}
