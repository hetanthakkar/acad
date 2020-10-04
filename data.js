const data = [
  [
    {
      name: "FrontEnd Development",
      image: "https://img-a.udemycdn.com/course/750x422/2314744_c707.jpg",
      price: 30,
    },
    {
      name: "BackEnd Development",
      image:
        "https://qphs.fs.quoracdn.net/main-qimg-c02d737b627c8346adddd33fbcfb442e",
      price: 30,
    },
    {
      name: "Web Development",
      image:
        "https://sitegalleria.com/wp-content/uploads/2019/08/Web-Development-Company-Bangalore.jpeg",
      price: 30,
    },
    {
      name: "Mobile Development",
      image: "https://miro.medium.com/max/1000/1*ZnVbmWK9nAothEg_de2fOA.jpeg",
      price: 30,
    },
    {
      name: "Interview Prep",
      image:
        "https://stepupanalytics.com/wp-content/uploads/2018/07/competitive-programming-data-structures-and-algorithms.gif",
      price: 30,
    },
    {
      name: "Java",
      image:
        "https://crbtech.in/wp-content/uploads/2016/11/Want-To-Become-The-Most-Successful-Java--1200x600.jpg",
      price: 30,
    },
    {
      name: "JavaScript",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdSijhcOjGCo17mTM5jRVAegCvvdGylghE5g&usqp=CAU",
      price: 30,
    },
    {
      name: "Python",
      image: "https://miro.medium.com/max/836/0*gHid-f4RB4mMZTBl.jpg",
      price: 30,
    },
  ],
  [
    {
      name: "Piano",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYfF_CH712NQ9VaOiQpyXYm3mV5GSOluLiSw&usqp=CAU",
      price: 30,
    },
    {
      name: "Guitar",
      image:
        "https://images.squarespace-cdn.com/content/v1/563d549ee4b0c3c2842be615/1557951034395-7HUCMRBRUTI9HZY3WU7O/ke17ZwdGBToddI8pDm48kJ07f1vYiPjsh0Tvf56gg1tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpztp6bdhbiG4mWDrVM3FCtEN_tv4NTfvgbkxoU1xZlOe1N0L_Eox0LvyfQbideUXjc/Learn-guitar-online.jpeg?format=1500w",
      price: 30,
    },

    {
      name: "Violin",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9ntGDb2hQSSU323qMYKf1FniIuwWYMBbkCQ&usqp=CAU",
      price: 30,
    },
    {
      name: "Tabla",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTN8FlXsgIcg947UR5xTQ0FHKPDHxjhUOgQKQ&usqp=CAU",
      price: 30,
    },
  ],
  [
    {
      name: "Primary School Subjects",
      image:
        "https://cdn.3plearning.com/wp-content/uploads/2019/08/How-Should-I-teach-science.jpg",
      price: 30,
    },
    {
      name: "Middle School Subjects",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRHt6FM5rAE8XjZLbqZJB3jFs9v3syXEzEbQ&usqp=CAU",
      price: 30,
    },
    {
      name: "Secondary Subjects",
      image:
        "https://media.istockphoto.com/vectors/school-subjects-doodles-vector-id174174379",
      price: 30,
    },
    {
      name: "Senior Secondary",
      image:
        "https://www.stmaryspublicschool.co.in/academics/img/beyond-academics.jpg",
      price: 30,
    },

    {
      name: "Undergraduate(College) Subjects",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgalwuA-G85nsv_i3IlLuR28bnkmy-_ql_Cw&usqp=CAU",
      price: 30,
    },

    {
      name: "Graduate Subjects",
      image:
        "https://previews.123rf.com/images/gow27/gow271602/gow27160200050/52658969-mechanical-electrical-civil-chemical-and-other-engineering-education-profession-handwriting-doodle-i.jpg",
      price: 30,
    },
  ],
  [
    {
      name: "English",
      image:
        "https://idc.edu/wp-content/uploads/2018/02/8-Ways-to-Learn-English-Faster-850x390.jpg",
      price: 30,
    },
    {
      name: "French",
      image:
        "https://tv-wordpress.s3.amazonaws.com/a/wp-content/uploads/1340911652_403617946_1-Pictures-of-French-Language-Tutorial-Class-LEARN-FRENCH-Easily1.jpg",
      price: 30,
    },
    {
      name: "Spanish",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN3AAO9hrpvLfqUnYnP9WTi7FE2QMNY7KqYA&usqp=CAU",
      price: 30,
    },
    {
      name: "German",
      image:
        "https://qphs.fs.quoracdn.net/main-qimg-b88768ccbb04a3b48ef17a4746ab38bc",
      price: 30,
    },
  ],
  [
    {
      name: "Data Analytics",
      image:
        "https://tdwi.org/articles/2019/05/14/-/media/TDWI/TDWI/BITW/analytics7.jpg",
      price: 30,
    },
    {
      name: "Digital Marketing",
      image:
        "https://www.targetg.in/wp-content/uploads/2018/11/DIGITALMARKETING-4.png",
      price: 30,
    },
    {
      name: "Entrepreneurship",
      image:
        "https://i0.wp.com/www.iedunote.com/img/245/entrepreneurship-what-is-the-modern-definition-of-entrepreneur.jpg?resize=302%2C233&quality=100&ssl=1",
      price: 30,
    },
    {
      name: "Finance & Accounting",
      image:
        "https://cdn.proschoolonline.com/wp-content/uploads/2018/04/unnamed21.png",
      price: 30,
    },
    {
      name: "Investment",
      image:
        "https://www.moneycrashers.com/wp-content/uploads/2012/04/investing-strategies-styles-1068x713.jpg",
      price: 30,
    },
    {
      name: "Marketing",
      image:
        "https://www.threegirlsmedia.com/wp-content/uploads/2019/03/61465900_l.jpg",
      price: 30,
    },
    {
      name: "Stock Market",
      image:
        "https://thumbs.dreamstime.com/z/finance-concept-stock-market-torn-paper-background-finance-concept-painted-black-text-stock-market-torn-paper-background-119865223.jpg",
      price: 30,
    },
  ],
];
export default data;
