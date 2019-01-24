import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {roles} from "./roles";


@Entity("users",{schema:"smashlounge"})
@Index("idx_16618_users_email_unique",["email",],{unique:true})
export class users {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"name"
        })
    name:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"email"
        })
    email:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:60,
        name:"password"
        })
    password:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"remember_token"
        })
    remember_token:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"created_at"
        })
    created_at:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"updated_at"
        })
    updated_at:Date | null;
        

   
    @ManyToMany(type=>roles, roles=>roles.userss,{  nullable:false, })
    @JoinTable()
    roless:roles[];
    
}
