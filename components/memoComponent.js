Vue.component('memo-component', {
    props : [ "id" ], //  
    template : 
    // v-model="title", v-model="memo"에서 받아온 값 - 부모컴포넌트  
    // 슬롯 템플릿 - 
    // 메모 컴포넌트의 템플릿과 연결 
    `
    <div>
        
        <slot name="title"></slot>
        <button @click="deleteMemo">X</button>
        <slot name="memo"></slot>
        <hr>
        <p>{{ date }}</p>
    </div>
    `, 
    data : function() {
        return {
            titles: "",
            memos: ""

        }
    },
    methods : { 
        
        deleteMemo : function() {
            this.$emit('delete', this.id );
            
        }
    },
    computed : {
        date : function() {
            const date = new Date()
            return `${date.getFullYear()}년 
            ${date.getMonth()+1}월 ${date.getDay()}일` 
        } 
    }
})