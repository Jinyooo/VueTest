new Vue({
    el : "#app",
    data : {
        id : "",
        title : "",
        memo : "",
        date : "",
        titlelist : [
            { name: "제목입니다", id : 0}
        ],
        memolist : [
            { name: "미리 메모입니다", id : 0}
        ]
        
    },
    methods : {
        
        
        addMemo : function() {
            
            this.id++;
            this.titlelist.push( { name: this.title, id: this.id });
            this.memolist.push({ name: this.memo, id: this.id });
            this.memo="";
            this.title="";
        },
        deleteMemo :function(id) {
            let index = 0
            this.memolist.forEach( (element, i) => {
                if (element.id == this.id) {
                    index = i;
                }
            });
            this.titlelist.forEach( (element, i) => {
                if (element.id == this.id) {
                    index = i;
                }
            });
            this.memolist.splice(index, 1);
            this.titlelist.splice(index, 1);
            this.date="";
        }
    }
})