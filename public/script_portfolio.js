// Three.js Szene einrichten
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-canvas').appendChild(renderer.domElement);

// Lichtquellen
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 5);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Textur laden
const textureLoader = new THREE.TextureLoader();
const asteroidTexture = textureLoader.load('3D-Models/struktur.png'); // Pfad zur Textur

// Asteroiden-Array erstellen, um mehrere Instanzen des Modells zu speichern
const asteroids = [];

// GLTFLoader, um das Asteroidenmodell zu laden
const loader = new THREE.GLTFLoader();
loader.load(
  '3D-Models/Asteroid_1a.glb', // Pfad zum Asteroidenmodell
  function (gltf) {
    const originalModel = gltf.scene;

    // Textur auf das Material anwenden
    originalModel.traverse((child) => {
      if (child.isMesh) {
        child.material.map = asteroidTexture;
        child.material.needsUpdate = true; // Aktualisiere das Material
      }
    });

    // 20 Instanzen des Asteroidenmodells erstellen und zufällig positionieren
    for (let i = 0; i < 100; i++) {
      const asteroid = originalModel.clone(); // Klone das ursprüngliche Modell

      // Zufällige Position und Grösse für jeden Asteroiden
      asteroid.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      );
      const scale = Math.random() * 0.5 + 0.3;
      asteroid.scale.set(scale, scale, scale);

      scene.add(asteroid);
      asteroids.push(asteroid);
    }

    // Scroll-Effekt für die Bewegung und Rotation der Asteroiden
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      asteroids.forEach((asteroid, index) => {
        // Rotation basierend auf dem Scrollwert
        asteroid.rotation.x = scrollY * 0.001 + index * 0.05;
        asteroid.rotation.y = scrollY * 0.001 + index * 0.05;

        // Bewegung entlang der Z-Achse für Tiefeneffekt
        asteroid.position.z = Math.sin(scrollY * 0.0005 + index) * 10;
      });
    });
  },
  undefined,
  function (error) {
    console.error('Ein Fehler ist beim Laden des Modells aufgetreten', error);
  }
);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// Responsives Design
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.querySelector('.profile-image a').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



const projectData = {
  projekt1: {
    title: "Website",
    description: `
      <section id="aloeimport-project">
    <div class="project-card">
        <h2><a href="https://aloeimport.ch" target="_blank">Aloeimport Website</a></h2>
        <p>
            Die Aloeimport-Website wurde von mir für meine Mutter entwickelt, um ihre Aloe-Vera-Produkte und Dienstleistungen ansprechend und strukturiert zu präsentieren. 
            Diese Seite dient als zentrale Plattform, die Informationen zu verschiedenen Herstellern und Produktkategorien bereitstellt und Interessenten eine klare Übersicht über die verfügbaren Produkte bietet.
        </p>
        <h3>Projektziele</h3>
        <ul>
            <li>Erstellen einer modernen und benutzerfreundlichen Oberfläche, die sowohl auf mobilen als auch auf Desktop-Geräten optimal funktioniert</li>
            <li>Implementierung einer Bestellungslösung, die Bestellungen direkt per E-Mail versendet und gleichzeitig in einer Excel-Tabelle für die interne Verwaltung speichert</li>
            <li>Sicherstellung einer rechtskonformen Website mit Cookie-Hinweis, Datenschutzrichtlinien und Allgemeinen Geschäftsbedingungen (AGB)</li>
        </ul>
        <h3>Funktionen und Technologien</h3>
        <ul>
            <li><strong>Frontend:</strong> HTML, CSS und JavaScript wurden verwendet, um eine attraktive und benutzerfreundliche Oberfläche zu gestalten</li>
            <li><strong>Backend:</strong> Die Bestellformulare sind so konzipiert, dass sie Bestellungen per E-Mail direkt an die Betreiberin senden und gleichzeitig eine automatisierte Speicherung in einer Excel-Tabelle ermöglichen, was die Verwaltung der Bestellungen erleichtert</li>
            <li><strong>Rechtliche Elemente:</strong> Die Website verfügt über ein Cookie-Banner, das die Zustimmung der Nutzer einholt, sowie eine Datenschutzrichtlinie und AGB, die als separate HTML-Seiten erstellt wurden und die Nutzer über die Nutzung und Speicherung ihrer Daten informieren</li>
        </ul>
        <h3>Besondere Merkmale</h3>
        <ul>
            <li>Verknüpfung von E-Mail und Excel für effizientes Bestell- und Verwaltungssystem</li>
            <li>Responsive Design für mobile und Desktop-Nutzung</li>
            <li>Implementierung eines Cookie-Banners, das Nutzern die Möglichkeit bietet, ihre Einwilligung zur Datenverarbeitung zu geben</li>
            <li>Erstellung von separaten Seiten für <a href="https://aloeimport.ch/datenschutz.html" target="_blank">Datenschutz</a> und <a href="https://aloeimport.ch/agb.html" target="_blank">AGB</a></li>
        </ul>
        <footer>
            <p>
                <em>Hinweis:</em> Diese Zusammenfassung wurde in Zusammenarbeit mit ChatGPT erstellt, das mich bei der Entwicklung und Beschreibung des Projekts unterstützt hat.
            </p>
        </footer>
    </div>
</section>
    `,
    image: "img/Aloeimport.png",
    status: "finished"
  },
  projekt2: {
    title: "Präsentation",
    description: `<section id="presentation-template-project">
    <div class="project-card">
        <h2>Internes Präsentations-Template für Swisscom (Eigengebrauch)</h2>
        <p>
            Dieses Projekt umfasst die Entwicklung eines internen Präsentationstemplates für meinen persönlichen Gebrauch bei Swisscom. 
            Das Template ist an die spezifischen Corporate-Guidelines angepasst und wurde entwickelt, um ein modernes und professionelles Erscheinungsbild für meine internen Präsentationen sicherzustellen.
        </p>
        <h3>Projektziele</h3>
        <ul>
            <li>Entwicklung eines Präsentationstemplates, das den Swisscom-Richtlinien entspricht und exklusiv für den Eigengebrauch konzipiert ist</li>
            <li>Integration moderner, professioneller Animationen, die die Präsentationen ansprechend und dynamisch gestalten</li>
            <li>Bereitstellung einer einfach zu nutzenden Vorlage für konsistente und professionelle interne Präsentationen</li>
        </ul>
        <h3>Funktionen und Merkmale</h3>
        <ul>
            <li><strong>Corporate Design:</strong> Das Template enthält die Swisscom-konformen Farben, Schriftarten und visuellen Elemente für ein konsistentes Erscheinungsbild</li>
            <li><strong>Bilder und Grafiken:</strong> Ansprechende, guideline-konforme Bilder und Grafiken sorgen für einen professionellen Look</li>
            <li><strong>Animationen:</strong> Die Präsentation enthält dezente und moderne Animationen, die die Inhalte fliessend und ansprechend präsentieren</li>
        </ul>
        <h3>Besondere Merkmale</h3>
        <ul>
            <li>Einfache Anpassungsmöglichkeiten für verschiedene Themen</li>
            <li>Hochwertige visuelle Gestaltung und Benutzerfreundlichkeit, speziell für meinen internen Gebrauch</li>
        </ul>
        <h3>Beispielpräsentation</h3>
        <p>
            Lade eine Beispielpräsentation(Startgespräch) herunter, um die Struktur und die eingebauten Animationen zu sehen:
        </p>
        <a href="files/Startgespräch.pptx" download="Beispiel_Praesentation_Startgespraech_Swisscom.pptx">
            Beispielpräsentation herunterladen
        </a>
        <footer>
            <p>
                <em>Hinweis:</em> Diese Zusammenfassung wurde in Zusammenarbeit mit ChatGPT erstellt, das mich bei der Entwicklung und Beschreibung des Projekts unterstützt hat.
            </p>
        </footer>
    </div>
</section>
`,
    image: "img/Praesentation.png",
    status: "finished"
  },
  projekt3: {
    title: "Ai erlernen",
    description: `<section id="ai-learning-project">
    <div class="project-card">
        <h2>KI-Lernprojekt mit Notion (in Arbeit)</h2>
        <p>
            Dieses Projekt ist ein fortlaufendes Lernvorhaben im Bereich der künstlichen Intelligenz, das ich mithilfe von Notion organisiere. Ziel ist es, umfassende Kenntnisse in KI und Machine Learning zu erlangen und letztlich eigene KI-Programme zu entwickeln.
        </p>
        <h3>Projektziele</h3>
        <ul>
            <li>Fundiertes Verständnis der Grundlagen von KI und maschinellem Lernen aufbauen</li>
            <li>Alle 4 Wochen neue Theorieblöcke bearbeiten und praktisch anwenden</li>
            <li>Erwerb von Fähigkeiten zur Entwicklung eigener KI-Anwendungen innerhalb von 2-3 Semestern</li>
        </ul>
        <h3>Arbeitsweise</h3>
        <ul>
            <li>Verwendung von Notion zur Organisation der Theorieblöcke und praktischen Aufgaben</li>
            <li>Detaillierte Zeitplanung mit wöchentlichen Lernzielen und zusätzlicher Zeit für vertiefende Übungen</li>
            <li>Fokus auf Themen wie Python-Grundlagen, mathematische Grundlagen für ML, Datenaufbereitung und -analyse, sowie einfache ML-Algorithmen</li>
        </ul>
        <h3>Besondere Merkmale</h3>
        <ul>
            <li>Strukturierte Herangehensweise mit detaillierten Theorieblöcken und Aufgaben</li>
            <li>Regelmässige Überprüfung und Anpassung des Fortschritts</li>
            <li>Flexibilität in der Zeiteinteilung durch Notion-Integration</li>
        </ul>
        <footer>
            <p>
                <em>Hinweis:</em> Diese Zusammenfassung wurde in Zusammenarbeit mit ChatGPT erstellt, das mich bei der Planung und Strukturierung des Projekts unterstützt hat.
            </p>
        </footer>
    </div>
</section>
`,
    image: "img/notionai.png",
    status: "in-progress"
  },
  projekt4: {
    title: "Notion",
    description: `<section id="vocational-training-project">
    <div class="project-card">
        <h2>Berufsausbildungs-Management in Notion</h2>
        <p>
            Dieses Projekt umfasst die vollständige Organisation meiner Berufsausbildung als Applikationsentwickler in Notion. 
            Mit Notion verwalte ich alle relevanten Inhalte, Lernziele, Aufgaben und Fortschritte, um meine Ausbildung strukturiert und effizient zu gestalten.
        </p>
        <h3>Projektziele</h3>
        <ul>
            <li>Vollständige Dokumentation und Organisation der beruflichen Ausbildung</li>
            <li>Erstellung eines flexiblen, zentralisierten Systems zur Nachverfolgung von Lernzielen, Aufgaben und Fortschritten</li>
            <li>Verwendung von Notion, um eine klare Struktur und eine einfache Navigation zwischen unterschiedlichen Lernblöcken zu gewährleisten</li>
        </ul>
        <h3>Funktionen und Merkmale</h3>
        <ul>
            <li><strong>Lernziele und Meilensteine:</strong> Detaillierte Auflistung und Nachverfolgung der Ausbildungsziele für jeden Lernblock</li>
            <li><strong>Notizen und Aufgaben:</strong> Möglichkeit zur Speicherung von Notizen, Aufgaben und Materialien für eine einfache Wiederverwendung</li>
            <li><strong>Zeiterfassung:</strong> Funktion zur Zeiterfassung, die den Überblick über den Fortschritt und die Zeitplanung unterstützt</li>
        </ul>
        <h3>Besondere Merkmale</h3>
        <ul>
            <li>Langfristige Organisation meiner gesamten Ausbildung für eine effiziente Nachverfolgung und Optimierung des Lernprozesses</li>
            <li>Zentrale Plattform für eine klare Übersicht aller Ausbildungsinhalte und Fortschritte</li>
        </ul>
        <footer>
            <p>
                <em>Hinweis:</em> Diese Zusammenfassung wurde in Zusammenarbeit mit ChatGPT erstellt, das mich bei der Strukturierung des Projekts unterstützt hat.
            </p>
        </footer>
    </div>
</section>

`,
    image: "img/bbzwnotion.png",
    status: "in-progress"
  },
projekt5: {
  title: "Ai bauen",
  description: `<section id="ai-building-project">
    <div class="project-card">
        <h2>Entwicklung einer eigenen Künstlichen Intelligenz</h2>
        <p>
            Dieses Projekt markiert den nächsten Schritt in meiner KI-Reise: die Entwicklung einer eigenen künstlichen Intelligenz nach Abschluss meines Lernprojekts. 
            Ziel ist es, das erlernte Wissen in die Praxis umzusetzen und eine funktionierende KI zu bauen, die spezifische Aufgaben autonom lösen kann.
        </p>
        <h3>Projektziele</h3>
        <ul>
            <li>Anwendung der im Lernprojekt erworbenen Kenntnisse und Fähigkeiten in einem eigenständigen KI-Projekt</li>
            <li>Entwicklung einer KI, die in der Lage ist, eine spezifische Aufgabe effizient und autonom auszuführen</li>
            <li>Vertiefung meiner Programmierkenntnisse und AI-Kompetenzen durch praktisches Arbeiten</li>
        </ul>
        <h3>Geplante Funktionen und Technologien</h3>
        <ul>
            <li><strong>Machine Learning:</strong> Anwendung verschiedener Algorithmen, die ich im Lernprojekt erarbeitet habe, zur Lösung komplexer Aufgaben</li>
            <li><strong>Datenverarbeitung:</strong> Fähigkeit, große Datenmengen zu analysieren und in die Entscheidungsprozesse der KI zu integrieren</li>
            <li><strong>Python und weitere Tools:</strong> Implementierung mit Python sowie Verwendung spezialisierter Bibliotheken und Tools</li>
        </ul>
        <h3>Besondere Merkmale</h3>
        <ul>
            <li>Praxisnahe Anwendung der erlernten Theorie, um reale Probleme zu lösen</li>
            <li>Schaffung eines voll funktionsfähigen KI-Modells, das als Basis für zukünftige Projekte dienen kann</li>
        </ul>
        <footer>
            <p>
                <em>Hinweis:</em> Diese Zusammenfassung wurde in Zusammenarbeit mit ChatGPT erstellt, das mich bei der Planung und Strukturierung des Projekts unterstützt hat.
            </p>
        </footer>
    </div>
</section>

`,
  image: "img/Aibauen.png",
  status: "not-started"
}
};

// Funktion zum Öffnen des Projekts
function openProject(id) {
  const project = projectData[id];

  if (project) {
    // Setze den Inhalt des grossen Panels
    document.getElementById("expandedTitle").innerText = project.title;
    document.getElementById("expandedDescription").innerHTML = project.description;
    document.getElementById("expandedImage").src = project.image;

    // Statusanzeige und -farbe einstellen
    const statusElement = document.getElementById("expandedStatus");
    statusElement.className = "expanded-status " + project.status;
    statusElement.innerText = 
      project.status === "finished" ? "Fertig" :
      project.status === "in-progress" ? "In Arbeit" :
      "Noch nicht gestartet";

    // Zeige das Overlay und deaktiviere das Scrollen der Hauptseite
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Event-Listener hinzufügen, um das Overlay zu schliessen, wenn ausserhalb des Panels geklickt wird
    overlay.addEventListener("click", function(event) {
      if (event.target === overlay) {
        closeProject();
      }
    });
  }
}

// Funktion zum Schliessen des Projekts
function closeProject() {
  const overlay = document.querySelector(".overlay");

  // Blende das Overlay aus und aktiviere das Scrollen der Hauptseite wieder
  overlay.style.display = "none";
  document.body.style.overflow = "";

  // Event-Listener entfernen, um Mehrfachklicks zu vermeiden
  overlay.removeEventListener("click", closeProject);
}

window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.opacity = '0'; // Für sanftes Ausblenden
  setTimeout(() => loadingScreen.style.display = 'none', 500); // Versteckt nach dem Ausblenden
});

// Funktion zum Senden der E-Mail
async function sendMail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      document.getElementById('contactForm').style.display = 'none';
      document.getElementById('successMessage').style.display = 'flex';
    } else {
      console.error('Fehler beim Senden der E-Mail:', await response.json());
    }
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
  }
}
