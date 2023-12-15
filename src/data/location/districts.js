const districts = [
  {
    id: 1,
    district_name: "Bagerhat",
    division_name: "Khulna",
  },
  {
    id: 2,
    district_name: "Bandarban",
    division_name: "Chittagong",
  },
  {
    id: 3,
    district_name: "Barguna",
    division_name: "Barisal",
  },
  {
    id: 4,
    district_name: "Barisal",
    division_name: "Barisal",
  },
  {
    id: 5,
    district_name: "Bhola",
    division_name: "Barisal",
  },
  {
    id: 6,
    district_name: "Bogra",
    division_name: "Rajshahi",
  },
  {
    id: 7,
    district_name: "Brahmanbaria",
    division_name: "Chittagong",
  },
  {
    id: 8,
    district_name: "Chandpur",
    division_name: "Barisal",
  },
  {
    id: 9,
    district_name: "Chapainawabganj",
    division_name: "Rajshahi",
  },
  {
    id: 10,
    district_name: "Chittagong",
    division_name: "Chittagong",
  },
  {
    id: 11,
    district_name: "Chuadanga",
    division_name: "Khulna",
  },
  {
    id: 12,
    district_name: "Comilla",
    division_name: "Chittagong",
  },
  {
    id: 13,
    district_name: "Cox's Bazar",
    division_name: "Chittagong",
  },
  {
    id: 14,
    district_name: "Dhaka",
    division_name: "Dhaka",
  },
  {
    id: 15,
    district_name: "Dinajpur",
    division_name: "Rangpur",
  },
  {
    id: 16,
    district_name: "Faridpur",
    division_name: "Dhaka",
  },
  {
    id: 17,
    district_name: "Feni",
    division_name: "Chittagong",
  },
  {
    id: 18,
    district_name: "Gaibandha",
    division_name: "Rangpur",
  },
  {
    id: 19,
    district_name: "Gazipur",
    division_name: "Dhaka",
  },
  {
    id: 20,
    district_name: "Gopalganj",
    division_name: "Dhaka",
  },
  {
    id: 21,
    district_name: "Habiganj",
    division_name: "Sylhet",
  },
  {
    id: 22,
    district_name: "Jamalpur",
    division_name: "Mymensingh",
  },
  {
    id: 23,
    district_name: "Jashore (Jessore)",
    division_name: "Khulna",
  },
  {
    id: 24,
    district_name: "Jhalokathi",
    division_name: "Barisal",
  },
  {
    id: 25,
    district_name: "Jhenaidah",
    division_name: "Khulna",
  },
  {
    id: 26,
    district_name: "Joypurhat",
    division_name: "Rajshahi",
  },
  {
    id: 27,
    district_name: "Khagrachari",
    division_name: "Chittagong",
  },
  {
    id: 28,
    district_name: "Khulna",
    division_name: "Khulna",
  },
  {
    id: 29,
    district_name: "Kishoreganj",
    division_name: "Dhaka",
  },
  {
    id: 30,
    district_name: "Kurigram",
    division_name: "Rangpur",
  },
  {
    id: 31,
    district_name: "Kushtia",
    division_name: "Khulna",
  },
  {
    id: 32,
    district_name: "Lakshmipur",
    division_name: "Chittagong",
  },
  {
    id: 33,
    district_name: "Lalmonirhat",
    division_name: "Rangpur",
  },
  {
    id: 34,
    district_name: "Madaripur",
    division_name: "Barisal",
  },
  {
    id: 35,
    district_name: "Magura",
    division_name: "Khulna",
  },
  {
    id: 36,
    district_name: "Manikganj",
    division_name: "Dhaka",
  },
  {
    id: 37,
    district_name: "Meherpur",
    division_name: "Khulna",
  },
  {
    id: 38,
    district_name: "Moulvibazar",
    division_name: "Sylhet",
  },
  {
    id: 39,
    district_name: "Munshiganj",
    division_name: "Dhaka",
  },
  {
    id: 40,
    district_name: "Mymensingh",
    division_name: "Mymensingh",
  },
  {
    id: 41,
    district_name: "Naogaon",
    division_name: "Rajshahi",
  },
  {
    id: 42,
    district_name: "Narail",
    division_name: "Khulna",
  },
  {
    id: 43,
    district_name: "Narayanganj",
    division_name: "Dhaka",
  },
  {
    id: 44,
    district_name: "Narsingdi",
    division_name: "Dhaka",
  },
  {
    id: 45,
    district_name: "Natore",
    division_name: "Rajshahi",
  },
  {
    id: 46,
    district_name: "Nawabganj",
    division_name: "Rajshahi",
  },
  {
    id: 47,
    district_name: "Netrokona",
    division_name: "Mymensingh",
  },
  {
    id: 48,
    district_name: "Nilphamari",
    division_name: "Rangpur",
  },
  {
    id: 49,
    district_name: "Noakhali",
    division_name: "Chittagong",
  },
  {
    id: 50,
    district_name: "Pabna",
    division_name: "Rajshahi",
  },
  {
    id: 51,
    district_name: "Panchagarh",
    division_name: "Rangpur",
  },
  {
    id: 52,
    district_name: "Patuakhali",
    division_name: "Barisal",
  },
  {
    id: 53,
    district_name: "Pirojpur",
    division_name: "Barisal",
  },
  {
    id: 54,
    district_name: "Rajbari",
    division_name: "Dhaka",
  },
  {
    id: 55,
    district_name: "Rajshahi",
    division_name: "Rajshahi",
  },
  {
    id: 56,
    district_name: "Rangamati",
    division_name: "Chittagong",
  },
  {
    id: 57,
    district_name: "Rangpur",
    division_name: "Rangpur",
  },
  {
    id: 58,
    district_name: "Satkhira",
    division_name: "Khulna",
  },
  {
    id: 59,
    district_name: "Shariatpur",
    division_name: "Barisal",
  },
  {
    id: 60,
    district_name: "Sherpur",
    division_name: "Mymensingh",
  },
  {
    id: 61,
    district_name: "Sirajganj",
    division_name: "Rajshahi",
  },
  {
    id: 62,
    district_name: "Sunamganj",
    division_name: "Sylhet",
  },
  {
    id: 63,
    district_name: "Sylhet",
    division_name: "Sylhet",
  },
  {
    id: 64,
    district_name: "Tangail",
    division_name: "Dhaka",
  },
];

export default districts;
