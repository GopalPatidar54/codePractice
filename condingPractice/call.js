let name={
   firstName:"gopal",
   lastName:"Patidar"
}

let fullName=function(midleName){
console.log(this.firstName ,midleName , this.lastName)
}


let call=fullName.call(name,"SOliya")
console.log("call",call)
let apply=fullName.apply(name,["Soliya"])
console.log("apply",apply)
let bind=fullName.bind(name,"SOliya")
console.log("bind",bind)
bind()

