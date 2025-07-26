         
            // named function practise
            function myFirstFunction(item){
                // alert('welcome you click ' + item);            /* Type 1 of output*/
                // console.log('welcome you click ' + item);              /* see in console Type 2 of output */
                // var oLabel = document.getElementById("printing");
                // oLabel.innerText = "Welcome to JS with 3rd kind of output by clicking " + item;
                document.write("It replace complete HTML by clicking "+ item);

                window.open("https://www.google.com/");

                // This is the fourth kind of output we are use here
                
            }
            
            function myLogin(){
                var oUser = document.getElementById("user"); //getting values from fields
                var oPass =  document.getElementById("pass"); //you can also remove chaining from here
                var sUser = oUser.value;//extracting values
                var sPass = oPass.value;
                if(sUser === sPass){ //comapring and action
                    document.write("Woww! you are successfully login."); // completely replace dom when success
                }else{
                    throwTheMessage("No your credentials not match! but working with key");
                    //leave inside this page and showing when not success.
                }
            }

            function throwTheMessage(key){
                var oLabel = document.getElementById("printing");
                oLabel.innerText = key; 
            }

            function magic(){
                var aHeaderElement = document.getElementsByClassName("spiderman");
                for(var i =0;i<aHeaderElement.length;i++){
                    var oHeaderElement = aHeaderElement[i];
                    oHeaderElement.style.color = "white";
                    oHeaderElement.style.backgroundColor = "green";
                }
            }

            function runTimeElement(){
                var oNewElement = document.createElement("h3");
                var oTextNode = document.createTextNode(document.getElementById("takingInput").value);
                oNewElement.appendChild(oTextNode);
                var oPlaceHolder = document.getElementById("placeholder");
                oPlaceHolder.appendChild(oNewElement);
            }

            function asyncFunction(){

                setTimeout(()=>{
                    alert("is the timer finished");
                },5000);
                
            }
         