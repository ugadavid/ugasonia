$(document).ready(function () {
  $(".option").click(function () {
      const isCorrect = $(this).data("correct");
      const feedback = $("#feedback");

      if (isCorrect) {
          feedback.text("Bravo ! C'est la bonne réponse.").css("color", "green");
      } else {
          feedback.text("Ce n'est pas la bonne réponse. Essaie encore !").css("color", "red");
      }
  });
});