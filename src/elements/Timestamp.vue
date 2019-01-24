<template>
    <span class="tooltip" :class="this.positionClass" :data-tooltip="time.full">
        {{time.display}}
    </span>
</template>

<script>
import moment from 'moment'

export default {
    name : 'Timestamp',
    props : {
        value : [Number, String],
        isFull : {
            type : Boolean,
            default : false,
        },
        noTime : {
            type : Boolean,
            default : false,
        },
        position : {
            type : String,
            default : 'right',
        },
        or : {
            type : String,
            default : 'Unknown',
        },
    },
    computed : {
        time () {

            if(!this.value){
                return {
                    full : this.or,
                    display : this.or,
                };
            }

            let full = moment.utc(this.value).local().format('M/D/YY h:mm:ss A'),
                parts = full.split(' '),
                part;

            if(this.noTime){
                return {
                    full : parts[0],
                    display : parts[0],
                }
            }

            let one_day = 1000 * 60 * 60 * 24;
            let now = new Date().getTime();

            if(this.value < now + one_day && this.value > now - one_day){
                part = moment.utc(this.value).local().format('h:mm A');
            } else {
                part = parts[0];
            }//el

            return {
                full : full,
                display : this.isFull ? full : part,
            };

        },
        positionClass () {
            return 'is-tooltip-' + this.position;
        }
    }
}
</script>
