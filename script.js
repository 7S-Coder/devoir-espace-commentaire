document.addEventListener("DOMContentLoaded", (event) => {
  // Initialisation des constantes
  const errorMsg = document.querySelector("#error-message");
  const form = document.querySelector("form");
  const submit = document.querySelector('button[type="submit"]');

  // Empêcher le rafraîchissement de la page quand on envoie le formulaire
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Vérifier les champs du formulaire
    const firstName = document.querySelector("#first-name").value.trim();
    const lastName = document.querySelector("#last-name").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (firstName === "" || lastName === "" || message === "") {
      errorMsg.style.display = "block";
      return;
    }

    errorMsg.style.display = "none";

    // Ajouter le commentaire à la liste
    const commentList = document.querySelector("#comment-list");
    const newComment = `
        <div class="flex space-x-4 text-sm text-gray-500">
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${message}</p>
                </div>
            </div>
        </div>
      `;

    commentList.insertAdjacentHTML("beforeend", newComment);

    // Réinitialiser le formulaire
    form.reset();
  });
});
