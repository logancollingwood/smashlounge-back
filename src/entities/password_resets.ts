import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("password_resets",{schema:"smashlounge"})
@Index("idx_16496_password_resets_email_index",["email",])
@Index("idx_16496_password_resets_token_index",["token",])
export class password_resets {

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"email"
        })
    email:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"token"
        })
    token:string;
        

    @Column("timestamp with time zone",{ 
        nullable:true,
        name:"created_at"
        })
    created_at:Date | null;
        
}
