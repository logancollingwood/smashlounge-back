import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("attacks",{schema:"smashlounge"})
export class attacks {

    @PrimaryGeneratedColumn({
        type:"bigint", 
        name:"id"
        })
    id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"charid"
        })
    charid:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"gameid"
        })
    gameid:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"game_ver"
        })
    game_ver:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"gif_id"
        })
    gif_id:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"input_type"
        })
    input_type:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"input_dir"
        })
    input_dir:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"seq_num"
        })
    seq_num:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"seq_dir"
        })
    seq_dir:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:450,
        name:"description"
        })
    description:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:450,
        name:"inputs"
        })
    inputs:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"links_to"
        })
    links_to:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"links_from"
        })
    links_from:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"movetype"
        })
    movetype:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"total_frames"
        })
    total_frames:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"active_start"
        })
    active_start:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"active_end"
        })
    active_end:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"hit_start"
        })
    hit_start:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"hit_end"
        })
    hit_end:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"hit_second_start"
        })
    hit_second_start:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"hit_second_end"
        })
    hit_second_end:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"hit_third_start"
        })
    hit_third_start:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"hit_third_end"
        })
    hit_third_end:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"hit_fourth_start"
        })
    hit_fourth_start:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"hit_fourth_end"
        })
    hit_fourth_end:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"iasa"
        })
    iasa:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"charge_frame"
        })
    charge_frame:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"invincible_start"
        })
    invincible_start:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"invincible_end"
        })
    invincible_end:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"landlag"
        })
    landlag:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"lcancel"
        })
    lcancel:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"auto_cancelable"
        })
    auto_cancelable:boolean;
        

    @Column("bigint",{ 
        nullable:false,
        name:"auto_cancel_start"
        })
    auto_cancel_start:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"auto_cancel_end"
        })
    auto_cancel_end:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"grab_start"
        })
    grab_start:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"grab_end"
        })
    grab_end:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"lag_on_release"
        })
    lag_on_release:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"reflects"
        })
    reflects:boolean;
        

    @Column("bigint",{ 
        nullable:false,
        name:"reflect_start"
        })
    reflect_start:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"reflect_end"
        })
    reflect_end:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"reflection_lag"
        })
    reflection_lag:string;
        

    @Column("boolean",{ 
        nullable:false,
        name:"jcable"
        })
    jcable:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        name:"grounded"
        })
    grounded:boolean;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"misc"
        })
    misc:string;
        

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
