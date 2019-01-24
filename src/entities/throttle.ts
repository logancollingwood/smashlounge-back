import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("throttle",{schema:"smashlounge"})
@Index("idx_16590_fk_user_id",["user_id",])
export class throttle {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"user_id"
        })
    user_id:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ip_address"
        })
    ip_address:string | null;
        

    @Column("bigint",{ 
        nullable:false,
        default: () => "(0)::bigint",
        name:"attempts"
        })
    attempts:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"suspended"
        })
    suspended:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"banned"
        })
    banned:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"last_attempt_at"
        })
    last_attempt_at:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"suspended_at"
        })
    suspended_at:Date | null;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"banned_at"
        })
    banned_at:Date | null;
        
}
