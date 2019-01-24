import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("guides",{schema:"smashlounge"})
export class guides {

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
        name:"slug"
        })
    slug:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"typeid"
        })
    typeid:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"dataid"
        })
    dataid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"description"
        })
    description:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"author1_sponsor"
        })
    author1_sponsor:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"author1_name"
        })
    author1_name:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"author1_twitter"
        })
    author1_twitter:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"author2_sponsor"
        })
    author2_sponsor:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"author2_name"
        })
    author2_name:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"author2_twitter"
        })
    author2_twitter:string;
        

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
