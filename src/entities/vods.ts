import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("vods",{schema:"smashlounge"})
export class vods {

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
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        default: () => "now()",
        name:"update_date"
        })
    update_date:Date;
        

    @Column("bigint",{ 
        nullable:false,
        name:"score"
        })
    score:string;
        

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
        length:130,
        name:"submitted_by"
        })
    submitted_by:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:260,
        name:"description"
        })
    description:string;
        
}
