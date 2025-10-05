document.getElementById("unmuteBtn").addEventListener("click", function () {
        const iframe = document.getElementById("liveFrame");
        const src = iframe.src.replace("mute=1", "mute=0");
        iframe.src = src;
        this.style.display = "none"; // hide button after unmuting
      });