    //Setup
    let etr = "";

    //Make UI
    let mdiv = document.createElement("div");
    mdiv.style = "display: flex; background-color: black; color: white; margin: 0px; padding: 0px; flex-direction: column; position: fixed; width: 500px; height: 250px; left: 100%; top: 0%; transform: translate(-100%); border-radius: 5px; border: 0px; font-family: roboto;";
    mdiv.id = "icNBTui";

    let titletext = document.createElement("p");
    titletext.style = "margin: 0px;";
    titletext.innerHTML = "twn's JSONEditor";
    mdiv.append(titletext);

    let closeButton = document.createElement("a");
    closeButton.style = "text-decoration: none; color: black; background-color: red; width: 10px; position: fixed; top: 0px; left: calc(100% - 10px); border-top-right-radius: 10px; border: none;";
    closeButton.href = "javascript:document.querySelector('#icNBTui').remove();";
    mdiv.append(closeButton);

    let KEYSELECT = document.createElement("select");
    KEYSELECT.style = "color: lightblue; background-color: black;";
    KEYSELECT.setAttribute("onchange", "fixEntry()");
    KEYSELECT.id = "KSELECT";
    mdiv.append(KEYSELECT);

    let WRITE = document.createElement("textarea");
    WRITE.style = "resize: none; height: 100%; background-image: linear-gradient(rgb(0,0,0),rgb(50,50,50)); border: none; color: lightblue;";
    WRITE.setAttribute("onchange", "setData(WRITE.value, etr)");
    mdiv.append(WRITE);
    
    document.querySelector("html").append(mdiv);

    //CustomFunctions
    function getData(entryV){
        return (localStorage.getItem(entryV)).toString();
    };
    function setData(idat, entryV){
        localStorage.setItem(entryV, (idat.toString()))
    };
    function fixEntry(){
        etr = ((document.querySelector("#KSELECT")).value).toString();
        WRITE.value = getData(etr);
        WRITE.innerHTML = getData(etr);
    };

    //More Setup
    function updateEntries(){
        let LSentries = Object.keys(localStorage);
        KEYSELECT.innerHTML = "";
        LSentries.forEach(element => {
            let oJaP = document.createElement("option");
            oJaP.value = element;
            oJaP.innerHTML = element;
            KEYSELECT.append(oJaP);
        });
    };

    updateEntries();
    fixEntry();
