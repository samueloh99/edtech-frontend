export const courses = [
  {
    id: 0,
    name: "Cairo Course",
    slug: "cairo",
    lessons: 140,
    totalHours: 50,
    author: "Falco",
    level: "Beginner",
    bg: "bg-gradient-to-bl from-fuchsia-200 to-orange-300",
  },
  {
    id: 1,
    name: "Zig Course",
    slug: "zig",
    lessons: 140,
    totalHours: 50,
    author: "Falco",
    level: "Beginner",
    bg: "bg-gradient-to-br from-amber-300 to-lime-200",
  },
  // {
  //   id: 0,
  //   name: "Solidity Course",
  //   slug: "solidity",
  //   lessons: 140,
  //   totalHours: 50,
  //   author: "Falco",
  //   level: "Beginner",
  //   bg: "bg-gradient-to-bl from-cyan-200 to-lime-200",
  // },
];

export const languagesFilters = [
  {
    id: 0,
    name: "Cairo",
  },
  {
    id: 1,
    name: "Zig",
  },
  // {
  //   id: 0,
  //   name: "Solidity",
  // },
];

export const solidityCourseContent = [
  {
    chapter: 1,
    title: "Basics",
    contents: [
      {
        id: 0,
        title: "Content 1",
        time: "4:50",
      },
      {
        id: 1,
        title: "Content 2",
        time: "4:50",
      },
      {
        id: 2,
        title: "Content 3",
        time: "4:50",
      },
      {
        id: 3,
        title: "Content 4",
        time: "4:50",
      },
      {
        id: 4,
        title: "Content 5",
        time: "4:50",
      },
      {
        id: 5,
        title: "Content 6",
        time: "4:50",
      },
      {
        id: 6,
        title: "Content 7",
        time: "4:50",
      },
      {
        id: 7,
        title: "Content 8",
        time: "4:50",
      },
    ],
  },

  {
    chapter: 2,
    title: "Advanced",
    contents: [
      {
        id: 0,
        title: "Content 1",
        time: "4:50",
      },
      {
        id: 1,
        title: "Content 2",
        time: "4:50",
      },
      {
        id: 2,
        title: "Content 3",
        time: "4:50",
      },
      {
        id: 3,
        title: "Content 4",
        time: "4:50",
      },
      {
        id: 4,
        title: "Content 5",
        time: "4:50",
      },
      {
        id: 5,
        title: "Content 6",
        time: "4:50",
      },
      {
        id: 6,
        title: "Content 7",
        time: "4:50",
      },
      {
        id: 7,
        title: "Content 8",
        time: "4:50",
      },
    ],
  },
];

export const cairoCourseContent = [
  {
    chapter: 1,
    title: "Basics",
    contents: [
      {
        id: 0,
        title: "Installation",
        module: 1,
        type: "content",
        time: "1:38",
      },
      {
        id: 1,
        title: "First Project",
        module: 2,
        type: "content",
        time: "4:48",
      },
      {
        id: 2,
        title: "Variables",
        module: 3,
        type: "content",
        time: "5:16",
      },
      {
        id: 3,
        title: "Data Types",
        module: 4,
        type: "content",
        time: "6:02",
      },
      {
        id: 4,
        title: "Data Types Exercise Part 1",
        module: 5,
        type: "pratice",
        time: "00:00",
      },
      {
        id: 5,
        title: "Data Types Exercise Part 2",
        module: 6,
        type: "pratice",
        time: "00:00",
      },
      {
        id: 6,
        title: "Functions",
        module: 7,
        type: "content",
        time: "7:18",
      },
      {
        id: 7,
        title: "Comments",
        module: 8,
        type: "content",
        time: "0:56",
      },
      {
        id: 8,
        title: "Control Flow",
        module: 9,
        type: "content",
        time: "5:43",
      },
    ],
  },
];

export const zigCourseContent = [
  {
    chapter: 1,
    title: "Basics",
    contents: [
      {
        id: 0,
        title: "Hello World Exercise",
        module: 1,
        type: "pratice",
        time: "00:00",
      },
      {
        id: 1,
        title: "Data Types Exercise",
        module: 2,
        type: "pratice",
        time: "00:00",
      },
    ],
  },
];

export const cairoExercises = [
  {
    module: 5,
    exerciseId: 1,
    file: {
      "lib.cairo": {
        name: "lib.cairo",
        language: "cairo",
        value:
          "// Exercise 1: Make the mathematical addition work by modifying the code.\nfn exercise_one() -> u16 {\n    // Only modify the 2 lines below. Don't write any new lines of code.\n    let x = 5_u16;\n    let y = 300_u16;\n    // Don't modify the code below this line.\n    let sum: u16 = x + y;\n    sum\n}",
      },
    },
  },

  {
    module: 6,
    exerciseId: 2,
    file: {
      "lib.cairo": {
        name: "lib.cairo",
        language: "cairo",
        value:
          "// Exercise 2: take the elements representing food from the 'random_elements' tuple and store them in a new tuple variable called 'food'.\nfn exercise_two() -> (felt252, felt252) {\n    let random_elements = (100, 'sushi', 1, true, 'pizza', 'computer');\n    // Write your code below this line. Don't modify the code above this line.\n    let (rand1, rand2, rand3, rand4, rand5, rand6) = random_elements;\n    let food = (rand2, rand5);\n    // Don't modify the code below this line.\n    food\n}",
      },
    },
  },
];

export const zigExercises = [
  {
    module: 1,
    exerciseId: 1,
    file: {
      "index.zig": {
        name: "index.zig",
        language: "zig",
        value:
          "// EXERCISE 1 \n// Create a public hello world function that prints 'Hello, world!' to the console using the provided writer.\n\nconst std = @import('std');\n\npub fn printHelloWorld(writer: anytype) !void {}",
      },
    },
  },

  {
    module: 2,
    exerciseId: 2,
    file: {
      "index.zig": {
        name: "index.zig",
        language: "zig",
        value:
          "// EXERCISE 2\n// Create a public function `addOne` that takes an `i32` and returns an `i32` that is one larger.\n\nconst std = @import('std');\n\npub fn addOne() {}",
      },
    },
  },
];
