document.getElementById("heading").innerHTML = "FLAMES" ;
document.getElementById("sub-heading").innerHTML =`Enter two names to find out relationship/love compatibility`;
// document.getElementById("check").textContent = "check status"

function flames() {
    let firstName = document.getElementById("first-name").value.trim().toLowerCase();
    let secondName = document.getElementById("second-name").value.trim().toLowerCase();

    firstName = firstName.replace(/\s+/g,"");
    secondName = secondName.replace(/\s+/g,"");

    let firstArr = firstName.split("");
    let secondArr = secondName.split("");

    for (let i = 0; i < firstArr.length; i++) {

        let matchIndex = secondArr.indexOf(firstArr[i]);
            if (matchIndex !== -1) {
                firstArr.splice(i, 1);
                secondArr.splice(matchIndex, 1);
                i--;
            }
        }
        
        let count = firstArr.length + secondArr.length;
        const flames = ["F", "L", "A", "M", "E", "S"];
         while(flames.length > 1){
            let index = (count % flames.length) -1;
            if(index > 0){
                flames.splice(index, 1);
                 flames.push(...flames.splice(0, index));
            } else {
                flames.pop();
            }
         }

         let result = {
            F: "Friends",
            L: "Lover",
            A: "Affection",
            M: "Marriage",
            E: "Enemies",
            S: "Secret lovers",
         };

        document.getElementById("final").innerHTML =result[flames[0]]; 
    
}

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    flames()
});