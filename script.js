// Scroll fade
    window.addEventListener("scroll", () => {
      const fadeSections = document.querySelectorAll(".fade-on-scroll");
      fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 100) {
          section.classList.add("visible");
        }
      });
    });

    // Open Auth Modal
    function openModal(type) {
      const modal = document.getElementById("authModal");
      const title = document.getElementById("modalTitle");
      modal.style.display = "flex";
      title.textContent = type === "login" ? "Login" : "Sign Up";
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      document.getElementById("authModal").style.display = "none";
      document.body.style.overflow = "auto";
    }

    function goHome() {
      location.reload();
    }

    // Back to home from VM page
    function goBack() {
      document.querySelector(".hero").style.display = "flex";
      document.querySelector("#vmPage").style.display = "none";
      
      document.querySelector("#aboutSection").style.display = "block";
      document.querySelector("#vmManualSection").style.display = "block";
      document.querySelector("#billingSection").style.display = "block";
      document.querySelector("#contactSection").style.display = "block";
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Start with Glitch Transition
    function startWithGlitch() {
      const glitch = document.getElementById("glitchOverlay");
      glitch.style.display = "flex"; 
      setTimeout(() => {
        glitch.style.display = "none";
        showVM();
      }, 5000);
    }

    function showVM() {
      document.querySelector(".hero").style.display = "none";
      document.querySelector("#vmPage").style.display = "block";

      document.querySelector("#aboutSection").style.display = "none";
      document.querySelector("#vmManualSection").style.display = "none";
      document.querySelector("#billingSection").style.display = "none";
      document.querySelector("#contactSection").style.display = "none";
    }


const launchBtn = document.getElementById("launchBtn");
const stopBtn = document.getElementById("stopBtn");
const statusMsg = document.getElementById("statusMsg");
const vmContainer = document.getElementById("vmContainer");
const vmFrame = document.querySelector("iframe");

// --------------------
// START VM
// --------------------

launchBtn.addEventListener("click", async () => {

    statusMsg.textContent = "🚀 Launching DreamzLab...";
    launchBtn.disabled = true;

    try {

        const response = await fetch("http://localhost:3000/start", {
            method: "POST"
        });

        const data = await response.json();

        if (!data.success) {
            throw new Error("Failed to start container");
        }

        statusMsg.textContent = "⏳ Preparing Kali Desktop...";

        // Give the container a few seconds to start VNC + noVNC
        await new Promise(resolve => setTimeout(resolve, 4000));

        vmFrame.src = data.url;

        vmContainer.style.display = "block";

        launchBtn.style.display = "none";
        stopBtn.style.display = "inline-block";

        statusMsg.textContent = "💻 VM Running";

    } catch (err) {

        console.error(err);

        statusMsg.textContent = "❌ Failed to start VM";

        launchBtn.disabled = false;

    }

});

// --------------------
// STOP VM
// --------------------

stopBtn.addEventListener("click", async () => {

    statusMsg.textContent = "🛑 Stopping VM...";

    try {

        const response = await fetch("http://localhost:3000/stop", {
            method: "POST"
        });

        const data = await response.json();

        if (!data.success) {
            throw new Error("Failed to stop VM");
        }

        vmFrame.src = "";

        vmContainer.style.display = "none";

        stopBtn.style.display = "none";

        launchBtn.style.display = "inline-block";
        launchBtn.disabled = false;

        statusMsg.textContent = "✅ VM Stopped";

    } catch (err) {

        console.error(err);

        statusMsg.textContent = "❌ Failed to stop VM";

    }

});