import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {users} from "./users";
import {permissions} from "./permissions";


@Entity("roles",{schema:"smashlounge"})
@Index("idx_16525_roles_name_unique",["name",],{unique:true})
export class roles {

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
        nullable:true,
        length:255,
        name:"display_name"
        })
    display_name:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"description"
        })
    description:string | null;
        

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
        

   
    @ManyToMany(type=>users, users=>users.roless)
    userss:users[];
    

   
    @ManyToMany(type=>permissions, permissions=>permissions.roless)
    permissionss:permissions[];
    
}
