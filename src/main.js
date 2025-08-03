const inputEl = document.getElementById("input")
const infoTextEl = document.getElementById("info-text")
const meaningContainerEl = document.getElementById("meaning-container")
const titleEl = document.getElementById("title")
const meaningEl = document.getElementById("meaning")
const audioEl = document.getElementById("audio")


const fetachAPI = async (word) => {
    try {
        infoTextEl.style.display = "block"
        meaningContainerEl.style.display = "none"
        infoTextEl.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`; 
        const result = await fetch(url).then((res) => res.json())

        if(result.title){
            meaningContainerEl.style.display = "block"
            infoTextEl.style.display = "none"
            titleEl.innerText = word;
            meaningEl.innerText = "N/A";
            audioEl.style.display = "none"
        }
        else {

        }
    }
    catch(error){
        console.log(error);
        infoTextEl.innerText = `an error happened, try again later`;
    }
}