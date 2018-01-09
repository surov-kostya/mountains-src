if (document.querySelectorAll('.projects__item').length){

    new Vue({
        el:'.projects',
        data:{
            ul: document.querySelectorAll('.projects__item'),
            status: 'school',
            nextItem: 0
        },
        computed:{
            allDataAttr: function (){
                let attrList = []
                for(let i=0; i<this.ul.length; i++){
                    let attr = this.ul[i].getAttribute('data-project')
                    attr= attr.slice(1, -1)
                    console.log(attr)
                    attrList.push(attr)                
                }            
                return attrList
            }
        },
        methods:{        
            nextBtnClick(){
                this.nextItem +=1
                if(this.nextItem === this.ul.length){ 
                    this.nextItem = 0               
                }
                this.status = this.allDataAttr[this.nextItem]
            },
            prevBtnClick(){
                this.nextItem -=1
                if(this.nextItem < 0){ 
                    this.nextItem = this.ul.length - 1   
                }
                this.status = this.allDataAttr[this.nextItem]
            }
        }
    });

}