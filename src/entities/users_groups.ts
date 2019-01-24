import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("users_groups",{schema:"smashlounge"})
export class users_groups {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"user_id"
        })
    user_id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"group_id"
        })
    group_id:string;
        
}
