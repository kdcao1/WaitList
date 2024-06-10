import { MantineProvider, createTheme, MantineColorsTuple, Button } from '@mantine/core';

const darkBlue: MantineColorsTuple = [
  "#f0f4ff",
  "#e1e5ef",
  "#c2c9d8",
  "#a2abc2",
  "#8592ad",
  "#7382a3",
  "#6a7a9e",
  "#59688a",
  "#4e5c7d",
  "#404f71"
];

const pastelTeal: MantineColorsTuple = [
  "#ffeaee",
  "#fcd4db",
  "#f3a7b3",
  "#ec7889",
  "#e54f66",
  "#e2364f",
  "#e12843",
  "#c81b35",
  "#b4132e",
  "#9e0326"
]

const teal: MantineColorsTuple = [
  '#e5fafe',
  '#d9eff2',
  '#badbde',
  '#97c5cb',
  '#7ab3ba',
  '#67a8b0',
  '#5aa3ac',
  '#498f96',
  '#3a7f87',
  '#226e77'
];

const teaGreen: MantineColorsTuple = [
  '#f5f8f2',
  '#e9ede4',
  '#d0dbc4',
  '#b5c8a3',
  '#9eb685',
  '#8fad72',
  '#88a867',
  '#749356',
  '#67824b',
  '#57713d'
];


export const theme = createTheme({
  primaryColor: 'pastelTeal',
  colors: {
    pastelTeal,
  },
  autoContrast: true,
  luminanceThreshold: 0,
});