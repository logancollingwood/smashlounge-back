import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("chartech",{schema:"smashlounge"})
export class chartech {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"charid"
        })
    charid:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"techid"
        })
    techid:string;
        
}
