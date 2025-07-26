module.exports = {
    addFunction: function(a,b){
        return a+b;
    },
    getArrayElement: function(item){
        for(var p=0;p< item.length;p++){
            return item[p];                     //only one item printing at a time
        }
    },
    getJsonAccess: function(data){
        for(let p in data){
            return (p + " " +data[p]);
        }
    }
}