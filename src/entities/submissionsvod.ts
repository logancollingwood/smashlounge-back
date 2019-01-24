import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("submissionsvod",{schema:"smashlounge"})
export class submissionsvod {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:260,
        name:"url"
        })
    url:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:130,
        name:"title"
        })
    title:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:160,
        name:"credit"
        })
    credit:string;
        

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
        length:260,
        name:"description"
        })
    description:string;
        

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
