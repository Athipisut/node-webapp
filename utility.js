//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzY1OTE4LCJleHAiOjE2NjE3Njk1MTgsIm5iZiI6MTY2MTc2NTkxOCwianRpIjoiT3BZVFNKblVQdXRIdFlkWiIsInN1YiI6MTAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.-ntvxoz6z57KL6YS39Y2i_KYtsEzU70zIHI-iQxIFAE"; // put access token
const student = {
  id_student:63367292,
  name: 'Athipisut', // replace with your full name.
  age: 21, // put your age.
  gender: 'Male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzY1OTE4LCJleHAiOjE2NjE3Njk1MTgsIm5iZiI6MTY2MTc2NTkxOCwianRpIjoiT3BZVFNKblVQdXRIdFlkWiIsInN1YiI6MTAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.-ntvxoz6z57KL6YS39Y2i_KYtsEzU70zIHI-iQxIFAE`,
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}