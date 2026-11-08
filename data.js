/**
 * STAT 2251: Inferential Statistics for Development Studies
 * Master Data Assembly & Quick Reference Tables
 */

window.COURSE_METADATA = {
  courseCode: "0542 21 Stat 2251",
  courseTitle: "Inferential Statistics for Development Studies",
  credit: 2.0,
  level: "Year: Second | Term: Second",
  status: "Core Course",
  faculty: "Statistics Discipline & Development Studies",
  totalChapters: 10,
  sections: [
    { name: "Section A", chapters: [1, 2, 3, 4], clo: "CLO 1, 2, 3" },
    { name: "Section B", chapters: [5, 6, 7, 8, 9, 10], clo: "CLO 1, 2, 3, 4" }
  ],
  statisticalTables: {
    zTable: [
      { conf: "90%", alpha: "0.10", oneTail: "1.282", twoTail: "1.645" },
      { conf: "95%", alpha: "0.05", oneTail: "1.645", twoTail: "1.960" },
      { conf: "98%", alpha: "0.02", oneTail: "2.054", twoTail: "2.326" },
      { conf: "99%", alpha: "0.01", oneTail: "2.326", twoTail: "2.576" }
    ],
    tTable: [
      { df: "5", t_05_one: "2.015", t_025_two: "2.571", t_01_two: "4.032" },
      { df: "9", t_05_one: "1.833", t_025_two: "2.262", t_01_two: "3.250" },
      { df: "10", t_05_one: "1.812", t_025_two: "2.228", t_01_two: "3.169" },
      { df: "24", t_05_one: "1.711", t_025_two: "2.064", t_01_two: "2.797" },
      { df: "25", t_05_one: "1.708", t_025_two: "2.060", t_01_two: "2.787" },
      { df: "27", t_05_one: "1.703", t_025_two: "2.052", t_01_two: "2.771" }
    ],
    chiSquareTable: [
      { df: "1", alpha_05: "3.841", alpha_01: "6.635" },
      { df: "2", alpha_05: "5.991", alpha_01: "9.210" },
      { df: "3", alpha_05: "7.815", alpha_01: "11.345" },
      { df: "4", alpha_05: "9.488", alpha_01: "13.277" },
      { df: "5", alpha_05: "11.070", alpha_01: "15.086" }
    ],
    fTable: [
      { df1: "2", df2: "6", f_05: "5.14" },
      { df1: "2", df2: "9", f_05: "4.26" },
      { df1: "2", df2: "20", f_05: "3.49" },
      { df1: "2", df2: "27", f_05: "3.35" },
      { df1: "3", df2: "20", f_05: "3.10" }
    ]
  }
};

window.getCompleteChapters = function() {
  const ch1_3 = window.CHAPTERS_1_3 || [];
  const ch4_6 = window.CHAPTERS_4_6 || [];
  const ch7_10 = window.CHAPTERS_7_10 || [];
  return [...ch1_3, ...ch4_6, ...ch7_10];
};
