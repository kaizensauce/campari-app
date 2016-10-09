import 'whatwg-fetch';

class PomodoroService {
  static getAllPomodoros() {
      return new Promise((resolve) =>{
        const myInit = { method: 'GET',
               mode: 'cors',
               'Content-Type': 'application/json' };
        fetch("http://localhost:30001/pomodoro", myInit).then(function(response){
            return response.json();
            }).then(json=>{
                let pomodoros = Object.assign([], json.data);
                resolve(pomodoros);
            }).catch(function(err){
                console.log(err);
            });
      });
  }

  static savePomodoro(pomodoro){
      return new Promise((resolve) =>{
        let content = JSON.stringify({pomodoro});
        const myInit = { 
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"},
            body: content 
        };
        fetch("http://localhost:30001/pomodoro", myInit).then(function(response){
            return response.json();
            }).then(json=>{
                let pomodoros = Object.assign({}, json.data);
                resolve(pomodoros);
            }).catch(function(err){
                console.log(err);
            });
      });
  }

      static updatePomodoro(pomodoro){
      return new Promise((resolve) =>{
        let content = JSON.stringify({pomodoro});
        const myInit = { 
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"},
            body: content 
        };
        fetch("http://localhost:30001/pomodoro/" + pomodoro._id, myInit).then(function(response){
            return response.json();
            }).then(json=>{
                let pomodoros = Object.assign({}, json.data);
                resolve(pomodoros);
            }).catch(function(err){
                console.log(err);
            });
      });
  }



    static deletePomodoro(pomodoro){
      return new Promise((resolve) =>{
        const myInit = { 
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"} 
        };
        fetch("http://localhost:30001/pomodoro/" + pomodoro._id, myInit)
        .then(function(response){
            resolve("Pomodoro deleted"+ response);
        })
        .catch(function(error){
            throw error;
        });
      });
  }
}


   
    
//   var promise =  new Promise((resolve) => {
    
//       fetch('http://localhost:30001/pomodoro', myInit)
//       .then(function(result){
//           debugger;
//         resolve(Object.assign([], result));  
//       })});

    //   return fetch('http://localhost:30001/pomodoro', {mode: 'no-cors'})
    //   .then(result=> {

    //   });
    //   .then((result)=>{
    //     resolve(Object.assign([], result));  
    //   });


    // return new Promise((resolve) => {
    //   fetch('http://localhost:30001/pomodoro')
    //   .then((result)=>{
    //     resolve(Object.assign([], x));  
    //   });


    //   setTimeout(() => {
    //     resolve(Object.assign([], pomodoros));
    //   }, delay);
    // });
  

//   static saveCourse(course) {
//     course = Object.assign({}, course); // to avoid manipulating object passed in.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulate server-side validation
//         const minCourseTitleLength = 1;
//         if (course.title.length < minCourseTitleLength) {
//           reject(`Title must be at least ${minCourseTitleLength} characters.`);
//         }

//         if (course.id) {
//           const existingCourseIndex = courses.findIndex(a => a.id == course.id);
//           courses.splice(existingCourseIndex, 1, course);
//         } else {
//           //Just simulating creation here.
//           //The server would generate ids and watchHref's for new courses in a real app.
//           //Cloning so copy returned is passed by value rather than by reference.
//           course.id = generateId(course);
//           course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
//           courses.push(course);
//         }

//         resolve(course);
//       }, delay);
//     });
//   }

//   static deleteCourse(courseId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const indexOfCourseToDelete = courses.findIndex(course => {
//           course.courseId == courseId;
//         });
//         courses.splice(indexOfCourseToDelete, 1);
//         resolve();
//       }, delay);
//     });
//   }


export default PomodoroService;