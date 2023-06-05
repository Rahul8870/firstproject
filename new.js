class emp {
    first_name = this.first_name;
    last_name = this.last_name;
    id = this.id;
    dob = this.Date;
    doj = this.Date;
    qualification = this.qualification;
    skill = this.skill;
    employee_name(){
      return this.first_name.concat(" ",this.last_name);
    }
  }
  
  let emp1 = new emp();
  
  emp1.first_name = "Rahul ";
  emp1.last_name = "ravi";
  emp1.id = "01";
  
  emp1.dob = new Date(2001, 05, 15);
  emp1.doj = new Date(2023, 04, 03);
  emp1.qualification = "B-Tech";
  emp1.skill = "Java";
  let employee=[emp1];
  console.log(emp1.employee_name());
  console.log(employee_name())
  console.log(employee_name())