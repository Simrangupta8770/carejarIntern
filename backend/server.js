const express = require('express');
const cors = require('cors');
const faker = require('faker');
const bodyParser=require('body-parser');
const app = express();
const port = 5000;
app.use(cors());
const path=require('path');
const __dirname1 = path.resolve();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === "production") {
  // app.use(express.static(path.join(__dirname1, "/frontend/build")));
  // console.log(path.resolve(__dirname1, "frontend", "build", "index.html"));
  // app.get("*", (req, res) =>
  //   res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  // );
// } else {
  // app.get("/", (req, res) => {
  //   res.send("API is running..");
  // });
// }
const server=app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/api/specializations', (req, res) => {
  const specializations = ['Dentist', 'Dietitian', 'Gynecologist', 'Ophthalmologist'];
  const img=['https://source.unsplash.com/a-woman-has-an-annual-dental-check-up-in-dentist-surgery-5K_JCerUb24',
    'https://source.unsplash.com/a-midsection-of-senior-woman-serving-food-at-friends-dinner-party-at-home-AQmqZrKohqQ',
    'https://source.unsplash.com/portrait-of-obstetric-doctor-that-sits-in-the-clinic-room-with-ultrasound-device-ypIyUcCkfpU',
    'https://source.unsplash.com/female-doctor-ophthalmologist-is-checking-the-eye-vision-of-attractive-young-woman-in-modern-clinic-doctor-and-patient-in-ophthalmology-clinic-uo-hzj8y5_Y'


  ]
  const specializationData = specializations.map((specialization,i) => {
    const doctors = generateDoctorsBySpecialization(specialization, 3); // You can adjust the number of doctors per specialization
    return {
      Specialization: specialization,
      Doctors: doctors,
      infor:faker.lorem.paragraphs(1),
      image:img[i]
    };
  });
  
  res.json(specializationData);
});


function generateDoctor() {
  const doctorName = faker.name.findName();
  const doctorEmail = faker.internet.email();
  const doctorPhone = faker.phone.phoneNumber();
  const fee=faker.commerce.price();
  const clinic=faker.company.companyName();
  const exp=Math.floor(Math.random()*30)+1;
  // let imageUrl='https://randomuser.me/api/portraits/men/38.jpg';
  // try {
  //   const response =  axios.get('https://randomuser.me/api/');
  //   // imageUrl = response.data.results[0].picture.large;
  //   console.log(imageUrl);
  // } catch (error) {
  //   // console.error('Error fetching random person image:', error.message);
  // }
  return {
    Name: doctorName,
    Email: doctorEmail,
    Phone: doctorPhone,
    Fee:fee,
    Exp:exp,
    Clinic:clinic
  };
  
}

function generateDoctorsBySpecialization(specialization, numDoctors) {
  return Array.from({ length: numDoctors }, () => generateDoctor());
}
