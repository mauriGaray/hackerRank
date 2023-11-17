function gradingStudents(grades) {
  // Write your code here

  console.log(
    grades.map((grade) =>
      grade % 5 >= 3 && grade >= 38 ? grade + (5 - (grade % 5)) : grade
    )
  );
}

gradingStudents([4, 73, 67, 38, 33]);
