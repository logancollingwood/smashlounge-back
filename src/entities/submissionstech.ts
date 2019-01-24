import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("submissionstech",{schema:"smashlounge"})
export class submissionstech {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"name"
        })
    name:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:650,
        name:"description"
        })
    description:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"ssbwiki"
        })
    ssbwiki:string;
        

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
