import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("techs",{schema:"smashlounge"})
export class techs {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:32,
        name:"tech"
        })
    tech:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:400,
        name:"description"
        })
    description:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"smashwiki"
        })
    smashwiki:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:100,
        name:"inputs"
        })
    inputs:string;
        

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
        
}
