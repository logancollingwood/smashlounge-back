import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("guidebody",{schema:"smashlounge"})
export class guidebody {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"guideid"
        })
    guideid:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"section_num"
        })
    section_num:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"section_head"
        })
    section_head:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"section_body"
        })
    section_body:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"section_foot"
        })
    section_foot:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"gifid"
        })
    gifid:string;
        

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
