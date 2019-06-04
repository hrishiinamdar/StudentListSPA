var myApp = angular
            .module("myModule",[])
            .controller("myController",function($scope){ //used a controller over here. Which basically reponsible for a model for a particular view
               //A controller is also responsible for controlling the data. 
               //A code for localStorage of the data in the browser is  written.  
               if (localStorage.getItem("students")===null){   //This condition is for getting an item from the local storage that is from the browser. 
                $scope.students=[                                     //JSON object 
                    {name: "Hrishikesh", age: "25", roll_no:"1"},
                    {name: "Aditya", age: "21", roll_no:"2"},
                    {name: "Swarupa", age: "23", roll_no:"3"},
                    {name: "Varun", age: "25", roll_no:"4"},
                    {name: "Shweta", age: "23", roll_no:"5"}

               ];
               
               localStorage.setItem("items",JSON.stringify($scope.students)); //setitem() when passed a key name and value will add that key to the given storage object
            //Json.Stringify: This is used to convert javascript object to string
            //JSON is used to exchange data to/from a web server. So to create $scope.students object into String this is used   
            }
            else{
                $scope.students = JSON.parse(localStorage.getItem("students")); // by using JSON.parse() object is achieved from the data
                //getItem returns the key's value that is students in this case. 
            }
            $scope.add = function(){    //this is the  CRUD  operation function written for adding the student name age and roll no
                var newStudent = {name:"test",age:"test",roll_no:false}; //newStudent is added using this
                $scope.students.push(newStudent); //pushing the new student into the local storage
                localStorage.setItem("students", JSON.stringify($scope.students)); //making it a string 
              }
              $scope.change = function(ind) {  //Update in CRUD operation is performed using this function
                $scope.students[ind].show = !($scope.students[ind].show); //
                localStorage.setItem("students", JSON.stringify($scope.students)); //again creating object to the string
              }
              $scope.delete = function(ind) { //this function in CRUD operations is used to delete a particular student
                $scope.students.splice($scope.students.indexOf(ind), 1); //the .splice is used for removing the elements from the array
                localStorage.setItem("students", JSON.stringify($scope.students)); //again converting into the string. 
              }
              
            });