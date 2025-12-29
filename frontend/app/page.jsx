

export default function Home() {

  const users = [
    { id: 1, name: "Ali Khan", age: 8, email: "ali.khan@gmail.com", city: "Karachi" },
    { id: 2, name: "Ahmed Raza", age: 16, email: "ahmed.raza@gmail.com", city: "Lahore" },
    { id: 3, name: "Sara Malik", age: 14, email: "sara.malik@gmail.com", city: "Islamabad" },
    { id: 4, name: "Usman Ali", age: 28, email: "usman.ali@gmail.com", city: "Karachi" },
    { id: 5, name: "Ayesha Noor", age: 27, email: "ayesha.noor@gmail.com", city: "Lahore" },
    { id: 6, name: "Bilal Ahmed", age: 41, email: "bilal.ahmed@gmail.com", city: "Faisalabad" },
    { id: 7, name: "Hassan Riaz", age: 9, email: "hassan.riaz@gmail.com", city: "Karachi" },
    { id: 8, name: "Zain Abbas", age: 12, email: "zain.abbas@gmail.com", city: "Islamabad" },
    { id: 9, name: "Fatima Khan", age: 26, email: "fatima.khan@gmail.com", city: "Lahore" },
    { id: 10, name: "Hamza Iqbal", age: 35, email: "hamza.iqbal@gmail.com", city: "Multan" },
    { id: 11, name: "Nida Aslam", age: 7, email: "nida.aslam@gmail.com", city: "Karachi" },
    { id: 12, name: "Saad Butt", age: 45, email: "saad.butt@gmail.com", city: "Lahore" },
    { id: 13, name: "Muneeb Shah", age: 18, email: "muneeb.shah@gmail.com", city: "Peshawar" },
    { id: 14, name: "Hira Qureshi", age: 24, email: "hira.qureshi@gmail.com", city: "Islamabad" },
    { id: 15, name: "Adeel Siddiqui", age: 42, email: "adeel.s@gmail.com", city: "Karachi" },
    { id: 16, name: "Sana Javed", age: 15, email: "sana.javed@gmail.com", city: "Multan" },
    { id: 17, name: "Imran Sheikh", age: 39, email: "imran.sheikh@gmail.com", city: "Faisalabad" },
    { id: 18, name: "Laiba Tariq", age: 6, email: "laiba.tariq@gmail.com", city: "Lahore" },
    { id: 19, name: "Arslan Mehmood", age: 29, email: "arslan.m@gmail.com", city: "Karachi" },
    { id: 20, name: "Anum Saeed", age: 17, email: "anum.saeed@gmail.com", city: "Islamabad" },
    { id: 21, name: "Shahzaib Khan", age: 31, email: "shahzaib.k@gmail.com", city: "Peshawar" },
    { id: 22, name: "Maryam Nawaz", age: 23, email: "maryam.n@gmail.com", city: "Lahore" },
    { id: 23, name: "Farhan Akhtar", age: 48, email: "farhan.a@gmail.com", city: "Karachi" },
    { id: 24, name: "Komal Rafiq", age: 10, email: "komal.r@gmail.com", city: "Multan" },
    { id: 25, name: "Danish Ali", age: 34, email: "danish.ali@gmail.com", city: "Faisalabad" },
    { id: 26, name: "Iqra Yousaf", age: 13, email: "iqra.y@gmail.com", city: "Islamabad" },
    { id: 27, name: "Umer Farooq", age: 44, email: "umer.f@gmail.com", city: "Karachi" },
    { id: 28, name: "Noor Ul Ain", age: 21, email: "noor.ain@gmail.com", city: "Lahore" },
    { id: 29, name: "Rizwan Haider", age: 52, email: "rizwan.h@gmail.com", city: "Peshawar" },
    { id: 30, name: "Mahnoor Ali", age: 5, email: "mahnoor.ali@gmail.com", city: "Islamabad" }
  ];

  let arr = [2,1,4,2,3,6,3,8,1];

  let unique = arr?.filter((x, ind) =>  arr?.indexOf(x) === ind);
  let removeDup = [...new Set(arr)];
  let single = arr?.filter((x) => arr?.indexOf(x) === arr?.lastIndexOf(x))
  console.log(single)

  console.log('hello world')


  return (
    <>

    </>
  );
}