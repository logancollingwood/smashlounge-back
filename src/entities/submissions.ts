import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("submissions",{schema:"smashlounge"})
export class submissions {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:300,
        name:"url"
        })
    url:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"source"
        })
    source:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:300,
        name:"description"
        })
    description:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"pageid"
        })
    pageid:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"dataid"
        })
    dataid:string;
        

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
