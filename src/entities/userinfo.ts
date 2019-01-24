import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("userinfo",{schema:"smashlounge"})
@Index("idx_16609_userid",["userid",],{unique:true})
export class userinfo {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:130,
        name:"image"
        })
    image:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"facebook"
        })
    facebook:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:130,
        name:"location"
        })
    location:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"twitch"
        })
    twitch:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"userid"
        })
    userid:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:130,
        name:"vod"
        })
    vod:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"twitter"
        })
    twitter:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"main"
        })
    main:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"sponsor"
        })
    sponsor:string;
        

    @Column("double precision",{ 
        nullable:false,
        precision:53,
        name:"latitude"
        })
    latitude:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"longitude"
        })
    longitude:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:12,
        name:"friendcode"
        })
    friendcode:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:90,
        name:"garpr"
        })
    garpr:string;
        
}
