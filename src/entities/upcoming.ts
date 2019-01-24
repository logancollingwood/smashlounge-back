import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("upcoming",{schema:"smashlounge"})
export class upcoming {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:45,
        name:"title"
        })
    title:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:130,
        name:"fb_id"
        })
    fb_id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:250,
        name:"bracket"
        })
    bracket:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:35,
        default: () => "'event-info'",
        name:"class"
        })
    class:string;
        

    @Column("date",{ 
        nullable:false,
        name:"start"
        })
    start:string;
        

    @Column("date",{ 
        nullable:false,
        name:"end"
        })
    end:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"first"
        })
    first:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"second"
        })
    second:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"third"
        })
    third:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"stream"
        })
    stream:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"attending"
        })
    attending:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"location"
        })
    location:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"host"
        })
    host:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:15,
        name:"vods"
        })
    vods:string;
        
}
