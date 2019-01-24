import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("players",{schema:"smashlounge"})
export class players {

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
        name:"sponsor"
        })
    sponsor:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"desc"
        })
    desc:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"rank"
        })
    rank:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"garpr"
        })
    garpr:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"region"
        })
    region:string;
        
}
