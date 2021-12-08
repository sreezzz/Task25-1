function foo() {
  let word = document.getElementById("cname").value;
  console.log(word);

  async function foo1() {
    let data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    let result = await data.json();
    let origin = result[0].origin;
    let definition = JSON.stringify(result[0].meanings[0].definitions[0]);

    document.getElementById(
      "main1"
    ).innerHTML = `<p>Origin of the word :${origin}</p>
<p> Definition of the word ${definition}</p>`;
  }
  foo1();
}
