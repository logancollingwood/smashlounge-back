import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("submissionstournament",{schema:"smashlounge"})
export class submissionstournament {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"title"
        })
    title:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"fb_id"
        })
    fb_id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:150,
        name:"bracket"
        })
    bracket:string;
        

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
        length:45,
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
        length:50,
        name:"location"
        })
    location:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:65,
        name:"host"
        })
    host:string;
        

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
