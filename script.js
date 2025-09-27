function submitCommand(){
    const textarea = document.getElementById("commandInput");
    const form = document.getElementById("commandForm");
    textarea.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            form.submit();
        }
    });
}

function completion(){
const textarea = document.getElementById('commandInput');

    textarea.addEventListener('keydown', function (event) {
    const isArrowRight = event.key === 'ArrowRight' || event.key === 'Right' || event.which === 39 || event.keyCode === 39;
    if (!isArrowRight) return;
        event.preventDefault();
        const start = textarea.selectionStart;
        const before = textarea.value.slice(0, start);
        if (before == "cat") {
            textarea.value = before + ' About_Me.txt';
            textarea.selectionStart = textarea.selectionEnd = start + 13;
        }
        if (before == "gcc") {
            textarea.value = before + ' Skills.c';
            textarea.selectionStart = textarea.selectionEnd = start + 9;
        }
        if (before == "python") {
            textarea.value = before + ' Experience.py';
            textarea.selectionStart = textarea.selectionEnd = start + 14;
        }
        if (before == "cp") {
            textarea.value = before + ' Bastien_Tiffy_CV.pdf';
            textarea.selectionStart = textarea.selectionEnd = start + 21;
        }
        if (before == "ping") {
            textarea.value = before + ' contact.html';
            textarea.selectionStart = textarea.selectionEnd = start + 13;
        }
        if (before == "man") {
            textarea.value = before + ' cv';
            textarea.selectionStart = textarea.selectionEnd = start + 3;
        }
    });
}

function typeWriterchar(text, output, speed = 10) {
    let i = 0;
    function typeWrite() {
        if (i < text.length) {
            if (text[i] == '\t')
                output.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            if (text[i] == '\n')
                output.innerHTML += text[i] + "<br>"
            output.innerHTML += text[i]
            i++;
            setTimeout(typeWrite, speed);
        }
    }
    typeWrite();
}

function typeWriterLine(text, output, speed = 200) {
    let lines = text.split("\n");
    let i = 0;
    function typeWriteLineFun() {
        if (i < lines.length) {
            if (lines[i][0] == '\t')
                output.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            output.innerHTML += lines[i] + "<br>";
            i++;
            setTimeout(typeWriteLineFun, speed);
        }
    }
    typeWriteLineFun();
}


function repartCommand(command = new URLSearchParams(window.location.search).get("command")){
    console.log(command);
    const output = document.getElementById("output");
    output.innerHTML = "";

    if (command == "help") {
        const text = "table des matières:\n\n ls pour lister les fichiers \n\n cat file.txt pour les fichiers text\n\n gcc file.c pour les fichiers c \n\n python file.py pour les fichiers python \n\n cp file.pdf pour les fichiers pdf\n\n ping file.html pour les fichiers html\n\n man cv\n\n Utiliser -> pour l'autocomplétion";
        typeWriterfunchar(text, output);
    }
    if (command == "ls") {
        let tailleEcranX = window.innerWidth;
        let tailleEcranY = window.innerHeight
        if (tailleEcranX < 800 || tailleEcranY < 800) {
            const button1 = document.createElement("button");
            button1.textContent = "About_Me.txt";
            button1.className = "m-2 border border-white px-2 py-1 text-white bg-black hover:bg-white hover:text-black";
            button1.addEventListener("click", () => repartCommand("cat About_Me.txt"));
            document.body.appendChild(button1);
            
            const button2 = document.createElement("button");
            button2.textContent = "Skills.c";
            button2.className = "m-2 border border-white px-2 py-1 text-white bg-black hover:bg-white hover:text-black";
            button2.addEventListener("click", () => repartCommand("gcc Skills.c"));
            document.body.appendChild(button2);
            
            const button3 = document.createElement("button");
            button3.textContent = "Experience.py";
            button3.className = "m-2 border border-white px-2 py-1 text-white bg-black hover:bg-white hover:text-black";
            button3.addEventListener("click", () => repartCommand("python Experience.py"));
            document.body.appendChild(button3);

            const button4 = document.createElement("button");
            button4.textContent = "contact.html";
            button4.className = "m-2 border border-white px-2 py-1 text-white bg-black hover:bg-white hover:text-black";
            button4.addEventListener("click", () => repartCommand("ping contact.html"));
            document.body.appendChild(button4);

            const button5 = document.createElement("button");
            button5.textContent = "Bastien_Tiffy_CV.pdf";
            button5.className = "m-2 border border-white px-2 py-1 text-white bg-black hover:bg-white hover:text-black";
            button5.addEventListener("click", () => repartCommand("cp Bastien_Tiffy_CV.pdf"));
            document.body.appendChild(button5);
        } else {
            const text= "About_Me.txt\tSkills.c\tExperience.py\tcontact.html\tBastien_Tiffy_CV.pdf";
            typeWriterchar(text, output);
        }
    }
    if (command == "cat About_Me.txt") {
        const text = "Passionné par la tech, le developpement et l'automatisation, je me forme à Epitech Montpellier. Je combine rigueur, adaptabilité et esprit d'équipe au quotidien.";
        typeWriterchar(text, output);
    }
    if (command == "gcc Skills.c") {
        const text = "Langages:\n\t- HTML/CSS/JavaScript\n\t- C#(.NET), PHP, Python\n\t- MySQL/PostgreSQL\nFrameworks & outils:\n\t- React/Vue.js(basique)\n\t- Git/GitHub\n\t- Visual Studio, VS Code\n\t- Docker (débutant), Figma, CMS (WordPress)\nMéthodes:\n\t- Agile\n\t- Travail en équipe\n\t- Rédaction de documentation technique"
        typeWriterLine(text, output);
    }
    if (command == "python Experience.py") {
        const text = ">>>Expérience\n\t3:\n>>>Septembre 2023-Décembre 2023 (4mois)\n\t\tProxiel Montpellier\n\tDéveloppement web\n>>>Depuis décembre 2022\n\t\t Sapeur-pompier volontaire Mireval\n\tIntervention de secrours\n>>>Depuis décembre 2023\n\t\tAutoentrepreneur\n\t Réalisation de mission freelance: site web, applications, maintenance, etc.";
        typeWriterLine(text, output);
    }
    if (command == "cp Bastien_Tiffy_CV.pdf") {
        const link = document.createElement('a');
        link.href = 'Bastien_Tiffy_CV.pdf';
        link.download = 'Bastien_Tiffy_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        output.textContent = "Bastien_Tiffy_CV.pdf téléchargé.";
    }
    if (command == "ping contact.html") {
        window.location.href = "contact.html";
    }
    if(command == "man cv") {
        window.location.href = "cv.html";
    }
}


submitCommand();
repartCommand();
completion();
