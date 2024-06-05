export interface Worker{
  name: string;
  surname: string;
  questions:[
    {
      number: 1;
      name: "Wysokość siedziska";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean,
        five: boolean,
        six: boolean,
      ]
    },
    {
      number: 2;
      name: "Głębokość siedziska";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean,
      ]
    },
    {
      number: 3;
      name: "Krzesło - czas użytkowania";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean,
      ]
    },
    {
      number: 4;
      name: "Podłokietniki";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean,
        five: boolean,
        six: boolean,
      ]
    },
    {
      number: 5;
      name: "Oparcie";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean,
        five: boolean,
      ]
    },
    {
      number: 6;
      name: "Monitor";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean,
        five: boolean,
        six: boolean,
        seven: boolean,
      ]
    },
    {
      number: 7;
      name: "Monitor - czas użytkowania";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
      ]
    },
    {
      number: 8;
      name: "Telefon";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean,
      ]
    },
    {
      number: 9;
      name: "Telefon - czas użytkowania";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
      ]
    },
    {
      number: 10;
      name: "Mysz";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean,
        five: boolean,
      ]
    },
    {
      number: 11;
      name: "Mysz - czas użytkowania";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
      ]
    },
    {
      number: 12;
      name: "Klawiatura";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
        four: boolean,
        five: boolean,
        six: boolean,
      ]
    },
    {
      number: 13;
      name: "Klawiatura - cza użytkowania";
      answers:[
        one: boolean,
        two: boolean,
        three: boolean,
      ]
    },
  ];
  // score: {
  //   sectionA: number;
  //   sectionB: number;
  //   sectionC: number;
  //   sectionD: number;
  //   overall: number;
  // }
}

