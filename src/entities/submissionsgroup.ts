import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("submissionsgroup",{schema:"smashlounge"})
export class submissionsgroup {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:130,
        name:"name"
        })
    name:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:290,
        name:"facebook"
        })
    facebook:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"latitude"
        })
    latitude:number;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"longitude"
        })
    longitude:number;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "(0)::bigint",
        name:"region"
        })
    region:string;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "(0)::bigint",
        name:"game"
        })
    game:string;
        

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
